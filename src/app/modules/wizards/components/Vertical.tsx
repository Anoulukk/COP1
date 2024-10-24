import {useEffect, useRef, useState} from 'react'
import {KTIcon} from '../../../../_metronic/helpers'
import {Step1} from './steps/Step1'
import {Step2} from './steps/Step2'
import {Step3} from './steps/Step3'
import {Step4} from './steps/Step4'
import {Step5} from './steps/Step5'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import {Form, Formik, FormikValues} from 'formik'
import {createAccountSchemas, ICreateAccount, inits} from './CreateAccountWizardHelper'
import { ToolbarWrapper } from '../../../../_metronic/layout/components/toolbar'
import { Content } from '../../../../_metronic/layout/components/content'
import { Step1Comment } from './steps/Step1Comment'
import { Step1ReConfirm } from './steps/Step1ReConfirm'

const Vertical = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const [ stepper, setStepper ] = useState<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const [isMinimized, setIsMinimized] = useState(false)

  const loadStepper = () => {
    setStepper(StepperComponent.createInsance(stepperRef.current as HTMLDivElement))
  }

  const prevStep = () => {
    if (!stepper) {
      return
    }

    stepper.goPrev()

    setCurrentSchema(createAccountSchemas[stepper.currentStepIndex - 1])
  }

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper) {
      return
    }

    if (stepper.currentStepIndex !== stepper.totalStepsNumber) {
      stepper.goNext()
    } else {
      stepper.goto(1)
      actions.resetForm()
    }

    console.log(values);

    setCurrentSchema(createAccountSchemas[stepper.currentStepIndex - 1])
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  // Toggle function to minimize/maximize the card
  const toggleCardSize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <>
      <ToolbarWrapper />
      <Content>
        <div
          ref={stepperRef}
          className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
          id='kt_create_account_stepper'
        >
          {/* begin::Aside*/}
          <div
            className={`card d-flex justify-content-center justify-content-xl-start flex-row-auto ${
              isMinimized ? 'w-xxl-100px' : 'w-xl-300px w-xxl-350px'
            } me-9`}
            style={{ transition: 'width 0.3s ease-in-out' }}  // Smooth width transition
          >

            {/* Toggle button for minimizing/maximizing the card */}
              <button
                type='button'
                className='btn btn-light app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary h-30px w-30px position-absolute mt-15 start-100 translate-middle rotate'
                onClick={toggleCardSize}
              >
                {isMinimized ? (
                            <KTIcon iconName='black-right-line' className='fs-3 rotate-180 ms-1' />

                ) : (
                  <KTIcon iconName='black-left-line' className='fs-3 rotate-180 ms-1' />

                )}
              </button>
            {/* begin::Wrapper*/}
            <div className='card-body py-10'>
              {/* begin::Nav*/}
              <div className='stepper-nav'>
                {/* begin::Step 1*/}
                <div className='stepper-item current' data-kt-stepper-element='nav'>
                  {/* begin::Wrapper*/}
                  <div className='stepper-wrapper'>
                    {/* begin::Icon*/}
                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>1</span>
                    </div>
                    {/* end::Icon*/}

                    {/* begin::Label*/}
                    <div className='stepper-label'>
                      {!isMinimized && <h3 className='stepper-title'>ຂໍ້ມູນທົ່ວໄປຂອງວິສາຫະກິດ</h3>}
                      

                    </div>
                    {/* end::Label*/}
                  </div>
                  {/* end::Wrapper*/}

                  {/* begin::Line*/}
                  <div className='stepper-line h-40px'></div>
                  {/* end::Line*/}
                </div>
                {/* end::Step 1*/}

                {/* begin::Step 2*/}
                <div className='stepper-item' data-kt-stepper-element='nav'>
                  {/* begin::Wrapper*/}
                  <div className='stepper-wrapper'>
                    {/* begin::Icon*/}
                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>2</span>
                    </div>
                    {/* end::Icon*/}

                    {/* begin::Label*/}
                    <div className='stepper-label'>
                    {!isMinimized &&<h3 className='stepper-title'>ທີ່ຕັ້ງ ແລະ ການນຳໃຊ້ພື້ນທີ່ໂຮງງານ</h3>}
                    </div>
                    {/* end::Label*/}
                  </div>
                  {/* end::Wrapper*/}

                  {/* begin::Line*/}
                  <div className='stepper-line h-40px'></div>
                  {/* end::Line*/}
                </div>
                {/* end::Step 2*/}

                {/* begin::Step 3*/}
                <div className='stepper-item' data-kt-stepper-element='nav'>
                  {/* begin::Wrapper*/}
                  <div className='stepper-wrapper'>
                    {/* begin::Icon*/}
                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>3</span>
                    </div>
                    {/* end::Icon*/}

                    {/* begin::Label*/}
                    <div className='stepper-label'>
                    {!isMinimized &&<h3 className='stepper-title'>ຂໍ້ມູນການປະກອບກິດຈະການ</h3>}
                    </div>
                    {/* end::Label*/}
                  </div>
                  {/* end::Wrapper*/}

                  {/* begin::Line*/}
                  <div className='stepper-line h-40px'></div>
                  {/* end::Line*/}
                </div>
                {/* end::Step 3*/}

                {/* begin::Step 4*/}
                <div className='stepper-item' data-kt-stepper-element='nav'>
                  {/* begin::Wrapper*/}
                  <div className='stepper-wrapper'>
                    {/* begin::Icon*/}
                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>4</span>
                    </div>
                    {/* end::Icon*/}

                    {/* begin::Label*/}
                    <div className='stepper-label'>
                    {!isMinimized &&<h3 className='stepper-title'>ການຄຸ້ມຄອງສິ່ງເສດເຫຼືອ</h3>}
                    </div>
                    {/* end::Label*/}
                  </div>
                  {/* end::Wrapper*/}

                  {/* begin::Line*/}
                  <div className='stepper-line h-40px'></div>
                  {/* end::Line*/}
                </div>
                {/* end::Step 4*/}

                {/* begin::Step 5*/}
                <div className='stepper-item' data-kt-stepper-element='nav'>
                  {/* begin::Wrapper*/}
                  <div className='stepper-wrapper'>
                    {/* begin::Icon*/}
                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>5</span>
                    </div>
                    {/* end::Icon*/}

                    {/* begin::Label*/}
                    <div className='stepper-label'>
                    {!isMinimized && <h3 className='stepper-title'>ການຄວບຄຸມມົນລະພິດທາງນ້ຳ</h3>}
                    </div>
                    {/* end::Label*/}
                  </div>
                  {/* end::Wrapper*/}

                  {/* begin::Line*/}
                  <div className='stepper-line h-40px'></div>
                  {/* end::Line*/}
                </div>
                {/* end::Step 5*/}
                {/* begin::Step 6*/}
                <div className='stepper-item' data-kt-stepper-element='nav'>
                  {/* begin::Wrapper*/}
                  <div className='stepper-wrapper'>
                    {/* begin::Icon*/}
                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>6</span>
                    </div>
                    {/* end::Icon*/}

                    {/* begin::Label*/}
                    <div className='stepper-label'>
                    {!isMinimized &&<h3 className='stepper-title'>ການຄວບຄຸມມົນລະພິດທາງອາກາດ</h3>}
                    </div>
                    {/* end::Label*/}
                  </div>
                  {/* end::Wrapper*/}

                  {/* begin::Line*/}
                  <div className='stepper-line h-40px'></div>
                  {/* end::Line*/}
                </div>
                {/* end::Step 6*/}
                {/* begin::Step 7*/}
                <div className='stepper-item' data-kt-stepper-element='nav'>
                  {/* begin::Wrapper*/}
                  <div className='stepper-wrapper'>
                    {/* begin::Icon*/}
                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>7
                      </span>
                    </div>
                    {/* end::Icon*/}

                    {/* begin::Label*/}
                    <div className='stepper-label'>
                    {!isMinimized && <h3 className='stepper-title'>ການຄຸ້ມຄອງຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ</h3>}
                    </div>
                    {/* end::Label*/}
                  </div>
                  {/* end::Wrapper*/}

                  {/* begin::Line*/}
                  <div className='stepper-line h-40px'></div>
                  {/* end::Line*/}
                </div>
                {/* end::Step 7*/}
                {/* begin::Step 8*/}
                <div className='stepper-item' data-kt-stepper-element='nav'>
                  {/* begin::Wrapper*/}
                  <div className='stepper-wrapper'>
                    {/* begin::Icon*/}
                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>8</span>
                    </div>
                    {/* end::Icon*/}

                    {/* begin::Label*/}
                    <div className='stepper-label'>
                    {!isMinimized && <h3 className='stepper-title'>ສະຫຼຸບແຜນການຄຸ້ມຄອງ ແລະ 
                      ຕິດຕາມກວດກາມົນລະພິດສິ່ງແວດລ້ອມ</h3>}
                    </div>
                    {/* end::Label*/}
                  </div>
                  {/* end::Wrapper*/}
                </div>
                {/* end::Step 8*/}
              </div>
              {/* end::Nav*/}
            </div>
            {/* end::Wrapper*/}
          </div>
          {/* begin::Aside*/}

          <div className=' bg-body rounded' style={{ width: '100%' }}>
            <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
              {() => (
                <Form className='' noValidate id='kt_create_account_form' placeholder={undefined}>
                  <div className='current' data-kt-stepper-element='content'  >
                    <Step1 />
                    {/* <Step1Comment /> */}
                    {/* <Step1ReConfirm /> */}
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Step2 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Step3 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Step4 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Step5 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Step4 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Step3 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Step2 />
                  </div>

                  <div className='d-flex flex-stack pt-10'>
                    <div className='mr-2'>
                      <button
                        onClick={prevStep}
                        type='button'
                        className='btn btn-lg btn-light-primary me-3'
                        data-kt-stepper-action='previous'
                      >
                        <KTIcon iconName='arrow-left' className='fs-4 me-1' />
                        ກັບຄືນ
                      </button>
                    </div>

                    <div>
                      <button type='submit' className='btn btn-lg btn-primary me-3'>
                        <span className='indicator-label'>
                          {stepper?.currentStepIndex !== ((stepper?.totalStepsNumber || 2) - 1) && 'ຖັດໄປ'}
                          {stepper?.currentStepIndex === ((stepper?.totalStepsNumber || 2) - 1) && 'ສົ່ງ'}
                          <KTIcon iconName='arrow-right' className='fs-3 ms-2 me-0' />
                        </span>
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Content>
    </>
  )
}

export {Vertical}
