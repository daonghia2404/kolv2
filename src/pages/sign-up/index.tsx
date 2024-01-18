import React, { useState } from 'react';
import { useRouter } from 'next/router';

import SEO from '@/components/SEO';
import AuthLayout from '@/layouts/AuthLayout';
import Steps, { TStepsOption } from '@/components/Steps';
import StepWelcome from '@/containers/SignUpForm/StepWelcome';
import StepInfo from '@/containers/SignUpForm/StepInfo';
import StepBody from '@/containers/SignUpForm/StepBody';
import StepImages from '@/containers/SignUpForm/StepImages';
import StepIdCard from '@/containers/SignUpForm/StepIdCard';
import StepReview from '@/containers/SignUpForm/StepReview';
import { Paths } from '@/routers/constants';

const SignUp = () => {
  const router = useRouter();
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
      children: <StepImages onPrev={(): void => handlePrevStep('3')} onNext={(): void => handleNextStep('5', {})} />,
    },
    {
      id: '5',
      children: <StepIdCard onPrev={(): void => handlePrevStep('4')} onNext={(): void => handleNextStep('6', {})} />,
    },
    {
      id: '6',
      children: (
        <StepReview
          onPrev={(): void => handlePrevStep('5')}
          onNext={(): void => {
            router.push(Paths.Home);
          }}
        />
      ),
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
            lineWidth="3rem"
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
