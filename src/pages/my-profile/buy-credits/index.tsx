import React, { useState } from 'react';

import SEO from '@/components/SEO';
import ProfileLayout from '@/layouts/ProfileLayout';
import Steps, { TStepsOption } from '@/components/Steps';
import StepAmount from '@/containers/StepBuyCredits/StepAmount';
import StepInformation from '@/containers/StepBuyCredits/StepInformation';
import StepPayment from '@/containers/StepBuyCredits/StepPayment';

const BuyCredits = () => {
  const [stepState, setStepState] = useState<{ currentStep?: TStepsOption; data?: any }>({});

  const dataStep = [
    {
      id: '1',
      title: 'Select Package',
      children: <StepAmount onNext={(data): void => handleNextStep('2', { ...stepState?.data, ...data })} />,
    },
    {
      id: '2',
      title: 'Billing Information',
      children: (
        <StepInformation
          onNext={(data): void => handleNextStep('3', { ...stepState?.data, ...data })}
          onPrev={(): void => handlePrevStep('1')}
        />
      ),
    },
    {
      id: '3',
      title: 'Payment Information',
      children: <StepPayment onNext={(): void => {}} onPrev={(): void => handlePrevStep('2')} />,
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
    <div className="BuyCredits">
      <div className="BuyCredits-wrapper">
        <div className="ProfileLayout-body-title">
          Credit Buy/Refill <span style={{ fontWeight: 400 }}>(All prices include 8.1% VAT)</span>
        </div>
        <Steps
          options={dataStep}
          value={stepState.currentStep}
          onChange={(stepChanged): void => setStepState({ ...stepState, currentStep: stepChanged })}
        />
      </div>
    </div>
  );
};

export default BuyCredits;

BuyCredits.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <SEO />
      <ProfileLayout>{page}</ProfileLayout>
    </>
  );
};
