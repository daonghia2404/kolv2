import React, { useState } from 'react';

import SEO from '@/components/SEO';
import ProfileLayout from '@/layouts/ProfileLayout';
import Steps, { TStepsOption } from '@/components/Steps';
import StepPlan from '@/containers/StepCreateListing/StepPlan';
import StepCategoriesServices from '@/containers/StepCreateListing/StepCategoriesServices';
import StepVisibleLocation from '@/containers/StepCreateListing/StepVisibleLocation';
import StepInformation from '@/containers/StepCreateListing/StepInformation';
import StepContact from '@/containers/StepCreateListing/StepContact';
import StepPhotoVideo from '@/containers/StepCreateListing/StepPhotoVideo';
import StepPublish from '@/containers/StepCreateListing/StepPublish';

const CreateListing = () => {
  const [stepState, setStepState] = useState<{ currentStep?: TStepsOption; data?: any }>({});

  const dataStep = [
    {
      id: '1',
      children: <StepPlan onNext={(data): void => handleNextStep('2', { ...stepState?.data, ...data })} />,
    },
    {
      id: '2',
      children: (
        <StepCategoriesServices
          onNext={(data): void => handleNextStep('3', { ...stepState?.data, ...data })}
          onPrev={(): void => handlePrevStep('1')}
        />
      ),
    },
    {
      id: '3',
      children: (
        <StepVisibleLocation
          onNext={(data): void => handleNextStep('4', { ...stepState?.data, ...data })}
          onPrev={(): void => handlePrevStep('2')}
        />
      ),
    },
    {
      id: '4',
      children: (
        <StepInformation
          onNext={(data): void => handleNextStep('5', { ...stepState?.data, ...data })}
          onPrev={(): void => handlePrevStep('3')}
        />
      ),
    },
    {
      id: '5',
      children: (
        <StepContact
          onNext={(data): void => handleNextStep('6', { ...stepState?.data, ...data })}
          onPrev={(): void => handlePrevStep('4')}
        />
      ),
    },
    {
      id: '6',
      children: (
        <StepPhotoVideo
          onNext={(data): void => handleNextStep('7', { ...stepState?.data, ...data })}
          onPrev={(): void => handlePrevStep('5')}
        />
      ),
    },
    {
      id: '7',
      children: <StepPublish onNext={(data): void => {}} onPrev={(): void => handlePrevStep('6')} />,
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
    <div className="CreateListing">
      <div className="CreateListing-wrapper">
        <div className="ProfileLayout-body-title">
          Credit Buy/Refill <span style={{ fontWeight: 400 }}>(All prices include 8.1% VAT)</span>
        </div>
        <Steps
          lineWidth={`calc(100% / ${dataStep.length * 2})`}
          options={dataStep}
          value={stepState.currentStep}
          onChange={(stepChanged): void => setStepState({ ...stepState, currentStep: stepChanged })}
        />
      </div>
    </div>
  );
};

export default CreateListing;

CreateListing.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <SEO />
      <ProfileLayout>{page}</ProfileLayout>
    </>
  );
};
