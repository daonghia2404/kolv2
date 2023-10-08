import React, { useState } from 'react';

import SEO from '@/components/SEO';
import AuthLayout from '@/layouts/AuthLayout';
import Steps, { TStepsOption } from '@/components/Steps';
import StepWelcome from '@/containers/SignUpForm/StepWelcome';
import StepInfo from '@/containers/SignUpForm/StepInfo';
import StepBody from '@/containers/SignUpForm/StepBody';

const SignUp = () => {
  const [stepState, setStepState] = useState<{ currentStep?: TStepsOption; data?: any }>({});

  const dataStep = [
    {
      id: '1',
      children: <StepWelcome onNext={(): void => handleNextStep('2', {})} />,
    },
    {
      id: '2',
      children: <StepInfo onPrev={(): void => handlePrevStep('1')} onNext={(): void => handleNextStep('3', {})} />,
    },
    {
      id: '3',
      children: <StepBody onPrev={(): void => handlePrevStep('2')} onNext={(): void => handleNextStep('4', {})} />,
    },
    {
      id: '4',
      children: <></>,
    },
    {
      id: '5',
      children: <></>,
    },
    {
      id: '6',
      children: <></>,
    },
  ];

  const handleNextStep = (keyStep: string, data: any): void => {
    const changedStep = dataStep.find((option) => option.id === keyStep);
    setStepState({
      ...stepState,
      currentStep: changedStep,
      data: { ...stepState?.data, ...data },
    });
  };

  const handlePrevStep = (keyStep: string): void => {
    const changedStep = dataStep.find((option) => option.id === keyStep);
    setStepState({
      ...stepState,
      currentStep: changedStep,
    });
  };

  return (
    <div className="SignUp">
      <div className="SignUp-wrapper">
        <div className="AuthLayout-card">
          <Steps
            options={dataStep}
            value={stepState.currentStep}
            onChange={(stepChanged): void => setStepState({ ...stepState, currentStep: stepChanged })}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

SignUp.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <SEO />
      <AuthLayout>{page}</AuthLayout>
    </>
  );
};
