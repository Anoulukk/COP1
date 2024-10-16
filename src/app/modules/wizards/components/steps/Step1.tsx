import {FC} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'
import Select from 'react-select'
import DynamicTable from '../DynamicTable';


const Step1: FC = () => {
  const form110 = [
    { classified: "title", code: "110A", description: "ຊື່ບໍລິສັດ", input_type: null },
    { classified: "sub_head", code: "110A1", description: "ຊື່ລາວ", input_type: "text" },
    { classified: "sub_head", code: "110A2", description: "ຊື່ອັງກິດ", input_type: "text" },
    { classified: "title", code: "110B", description: "ຜູ້ອຳນວຍການ", input_type: "text" },
    { classified: "title", code: "110C", description: "ປະກອບກິດຈະການ", input_type: "text" },
    { classified: "title", code: "110D", description: "ທຶນຈົດທະບຽນ", input_type: null },
    { classified: "sub_head", code: "110D1", description: "ກີບ", input_type: "number" },
    { classified: "sub_head", code: "110D2", description: "ໂດລາ", input_type: "number" },
    { classified: "title", code: "110E", description: "ກຳນົດອາຍຸການລົງທຶນ (ປີ)", input_type: "number" },
    { classified: "title", code: "110F", description: "ທີ່ຕັ້ງສຳນັກງານ", input_type: null },   
    { classified: "sub_head", code: "110F1", description: "ບ້ານ", input_type: "choice" },   
    { classified: "sub_head", code: "110F2", description: "ເມືອງ", input_type: "choice" },   
    { classified: "sub_head", code: "110F3", description: "ແຂວງ", input_type: "choice" },   
    { classified: "sub_head", code: "110F4", description: "ເຂດເສດຖະກິດພິເສດ", input_type: "choice" },   
    { classified: "title", code: "110G", description: "ໂຄງຮ່າງການຈັດຕັ້ງ", input_type: "P1-1" },   
    { classified: "title", code: "110H", description: "ເລກປະຈາຕົວວິສາຫະກິດ", input_type: "number" },   
    { classified: "title", code: " 110I", description: "ເລກປະຈາຕົວຜູ້ຄອບຄອງສິ່ງເສດເຫຼືອ ແລະ ສ້າງມົນລະພິດ (EMC ID)", input_type: "text" },   
    { classified: "title", code: " 110J", description: " ຂະແໜງທລະກິດ (LSIC)", input_type: "choice" },   
    { classified: "title", code: " 110K", description: "ຂະໜາດໂຮງງານ", input_type: "choice" },   
    { classified: "title", code: " 110L", description: "ລະດັບຄວາມສ່ຽງຜົນກະທົບດ້ານສິ່ງແວດລ້ອມຂອງໂຮງງານ", input_type: "choice" },   
  ]
  const form120 = [
    { classified: "title", code: "121", description: "ບໍລິສັດທີ່ປົກສາສິ່ງແວດລ້ອມ", input_type: "choice" },
    { classified: "sub_head", code: "121A", description: "ຊື່", input_type: "text" },
    { classified: "sub_head", code: "121B", description: "ເລກທີໃບອະນຸຍາດໃຫບໍລິການວິຊາການດ້ານສິ່ງແວດລ້ອມ", input_type: "text" },
    { classified: "sub_head", code: "122", description: "ທິດຕາເວັນອອກ", input_type: "text" },
    { classified: "sub_head", code: "220A4", description: "ທິດຕາເວັນຕົກ", input_type: "text" },

    { classified: "title", code: "220B", description: "ແຜນຜັງສະແດງໃຫ້ເຫັນທີ່ຕັ້ງໂຮງງານ ໃນຂອບເຂດລັດສະໝີ 500 ແມັດ", input_type: "file" },
    { classified: "title", code: "220C", description: "ພື້ນທີ່ອ້ອມຂ້າງໂຮງງານ ", input_type: null },
    { classified: "sub_head", code: "220C1", description: "ຊຸມຊົນ", input_type: "text" },
    { classified: "sub_head", code: "220C2", description: "ແຫຼ່ງນໍ້າ", input_type: "text" },
    { classified: "sub_head", code: "220C3", description: "ໂຮງຮຽນ", input_type: "text" },
    { classified: "sub_head", code: "220C4", description: "ໂຮງໝໍ ຫຼື ສຸກສາລາ", input_type: "text" },
    { classified: "sub_head", code: "220C5", description: "ວັດວາອາຮາມ", input_type: "text" },
    { classified: "sub_head", code: "220C6", description: "ສະຖານທີ່ປະຫວັດສາດ ຫຼື ບູຮານວັດຖຸ", input_type: "text" },
    { classified: "sub_head", code: "220C7", description: "ເຂດອະນຸລັກຊີວະນານາພັນ", input_type: "text" },
    { classified: "sub_head", code: "220C8", description: "ແຫຼ່ງທ່ອງທ່ຽວ", input_type: "text" },
    { classified: "sub_head", code: "220C9", description: "ອື່ນໆ (ລະບຸ)", input_type: "text" }, 
  ]

  const form230 = [
    { classified: "sub_head", code: "231A", description: "ເນື້ອທີ່ທັງໝົດ (ຕາແມັດ)", input_type: "number" },
    { classified: "sub_head", code: "231B", description: "ພື້ນທີ່ສີຂຽວ (ສ່ວນຮ້ອຍ)", input_type: "number" },
    { classified: "sub_head", code: "231C", description: "ການນຳໃຊ້ພື້ນທີ່", input_type: "T2-1" },
    { classified: "sub_head", code: "231D", description: "ແຜນຜັງການນຳໃຊ້ພື້ນທີ່", input_type: "file" },

    { classified: "title", code: "232", description: "ອາຄານ ແລະ ສິ່ງປຸກສ້າງ", input_type: null },
    { classified: "sub_head", code: "232A", description: "ຈຳນວນອາຄານ ແລະ ສິ່ງປຸກສ້າງ", input_type: "text" },
    { classified: "sub_head", code: "232B", description: "ຂໍ້ມູນອາຄານ ແລະ ສິ່ງແວດລ້ອມ", input_type: "T2-2" },
    { classified: "sub_head", code: "232C", description: "ໃບອະນຸຍາດປຸກສ້າງໂຮງງານ ເລກທີ", input_type: "text" },

    { classified: "title", code: "232D", description: "ແຜນຜັງການກໍ່ສ້າງ ແລະ ລະບົບເຕັກນິກໂຮງງານ", input_type: null },
    { classified: "sub_head", code: "232D1", description: "ແຜນຜັງສະແດງສິ່ງປຸກສ້າງໃນບໍລິເວນໂຮງງານ", input_type: "file" },
    { classified: "sub_head", code: "232D2", description: "ແຜນຜັງກໍ່ສ້າງອາຄານຜະລິດ (ຮູບດ້ານໜ້າ, ຂ້າງ, ຫຼັງ ແລະ ຮູບຕັດ)", input_type: "file" },
    { classified: "sub_head", code: "232D3", description: "ແຜນຜັງການກໍ່ສ້າງສາງເກັບມ້ຽນເຄມີ", input_type: "file" },  
  ]
  const form240 = [
    { classified: "sub_head", code: "240A", description: "ຫ້ອງເກັບສານເຄມີ", input_type: "text" },
    { classified: "sub_head", code: "240B", description: "ຫ້ອງເກັບສິ່ງເສດເຫຼືອເຄມີ", input_type: "text" },
    { classified: "sub_head", code: "240C", description: "ອາຄານ ຫຼື ພື້ນທີ່ເກັບວັດຖຸດິບ", input_type: "text" },
    { classified: "sub_head", code: "240D", description: "ອາຄານ ຫຼື ພື້ນທີ່ເກັບເຊື້ອໄຟ", input_type: "text" },
  ]
  const form250 = [
    { classified: "sub_head", code: "250A", description: "ໃບອະນຸຍາດນຳໃຊ້ທີ່ດິນ", input_type: "text" },
    { classified: "sub_head", code: "250B", description: "ໃບອະນຸຍາດປຸກສ້າງໂຮງງານ", input_type: "text" },
    { classified: "sub_head", code: "250C", description: "ໃບອະນຸຍາດສ້າງສາງເກັບມ້ຽນເຄມີ", input_type: "text" },

  ]
  const renderInput = (inputType:any, description:any) => {
    switch (inputType) {
      case 'text':
      case 'number':
      case 'file':
        return <input type={inputType} placeholder={description} className="form-control" />;
      case 'choice':
        return (
          <Select  
            className='react-select-styled' 
            classNamePrefix='react-select'
            // options={description}
          />

        );
        case 'T2-1':
          return (
            <DynamicTable />
          );
    
       default:
        return null;
    }
  };
  

  return (
   <div className=''  style={{ width: '100%' }}>
      <h2 className='mb-5'>

      100 ຂໍ້ມູນທົ່ວໄປຂອງວິສາຫະກິດ

  </h2>
<div className='accordion' id='kt_accordion_1'>
<div className='accordion-item'>
  <h2 className='accordion-header' id='kt_accordion_1_header_1'>
    <button
      className='accordion-button fs-4 fw-bold collapsed'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#kt_accordion_1_body_1'
      aria-expanded='false'
      aria-controls='kt_accordion_1_body_1'
    >
      110 ຂໍ້ມູນວິສາຫະກິດ
    </button>
  </h2>
  <div
    id='kt_accordion_1_body_1'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_1'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
        {form110.map((item, index) => {
          return (
            <div className="form-group mb-3" key={index}>
              {item.classified === "title" ? <h4>{item.code} {item.description}</h4> 
              :(<span className='fs-5 ms-3 ms-5'>{item.code} {item.description}</span>)}
              {renderInput(item.input_type, item.description)}
            </div>
          );
      })}
    </div>
  </div>
</div>
<div className='accordion-item'>
  <h2 className='accordion-header' id='kt_accordion_1_header_2'>
    <button
      className='accordion-button fs-4 fw-bold collapsed'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#kt_accordion_1_body_2'
      aria-expanded='false'
      aria-controls='kt_accordion_1_body_2'
    >
      220 ສະພາບພື້ນທີ່ອ້ອມຂ້າງໂຮງງານ

    </button>
  </h2>
  <div
    id='kt_accordion_1_body_2'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_2'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
    {form120.map((item, index) => {
          return (
            <div className="form-group mb-3" key={index}>
              {item.classified === "title" ? <h4>{item.code} {item.description}</h4> 
              :(<span className='fs-5 ms-3'>{item.code} {item.description}</span>)}
              {renderInput(item.input_type, item.description)}
            </div>
          );
      })}
    </div>
  </div>
</div>
<div className='accordion-item'>
  <h2 className='accordion-header' id='kt_accordion_1_header_3'>
    <button
      className='accordion-button fs-4 fw-bold collapsed'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#kt_accordion_1_body_3'
      aria-expanded='false'
      aria-controls='kt_accordion_1_body_3'
    >
      230	ການນຳໃຊ້ພື້ນທີ່, ອາຄານ ແລະ ສິ່ງປຸກສ້າງພາຍໃນໂຮງງານ

    </button>
  </h2>
  <div
    id='kt_accordion_1_body_3'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_3'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
    {form230.map((item, index) => {
          return (
            <div className="form-group mb-3" key={index}>
              {item.classified === "title" ? <h4>{item.code} {item.description}</h4> 
              :(<span className='fs-5 ms-3'>{item.code} {item.description}</span>)}
              {renderInput(item.input_type, item.description)}
            </div>
          );
      })}
    </div>
  </div>
</div>
<div className='accordion-item'>
  <h2 className='accordion-header' id='kt_accordion_1_header_4'>
    <button
      className='accordion-button fs-4 fw-bold collapsed'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#kt_accordion_1_body_4'
      aria-expanded='false'
      aria-controls='kt_accordion_1_body_4'
    >
      240	ອາຄານ ແລະ ພື້ນທີ່ຄວບຄຸມ 

    </button>
  </h2>
  <div
    id='kt_accordion_1_body_4'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_4'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
    {form240.map((item, index) => {
          return (
            <div className="form-group mb-3" key={index}>
              {item.classified === "title" ? <h4>{item.code} {item.description}</h4> 
              :(<span className='fs-5 ms-3'>{item.code} {item.description}</span>)}
              {renderInput(item.input_type, item.description)}
            </div>
          );
      })}
    </div>
  </div>
</div>
<div className='accordion-item'>
  <h2 className='accordion-header' id='kt_accordion_1_header_5'>
    <button
      className='accordion-button fs-4 fw-bold collapsed'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#kt_accordion_1_body_5'
      aria-expanded='false'
      aria-controls='kt_accordion_1_body_5'
    >
      250	ເອກະສານທີ່ກ່ຽວຂ້ອງ

    </button>
  </h2>
  <div
    id='kt_accordion_1_body_5'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_5'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
    {form250.map((item, index) => {
          return (
            <div className="form-group mb-3" key={index}>
              {item.classified === "title" ? <h4>{item.code} {item.description}</h4> 
              :(<span className='fs-5 ms-3'>{item.code} {item.description}</span>)}
              {renderInput(item.input_type, item.description)}
            </div>
          );
      })}
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export {Step1}