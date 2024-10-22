import { FC } from 'react';
import DynamicTable from '../DynamicTable';
import Select from 'react-select';

const Step2: FC = () => {
  const forms:any = {
    form210: [
      { classified: "heading", code: "200", description: "ທີ່ຕັ້ງຂອງໂຮງງານ", input_type: null },
      { classified: "title", code: "210A", description: "ທີ່ຕັ້ງໂຮງງານ", input_type: null },
      { classified: "sub_head", code: "210A1", description: "ຖະໜົນ", input_type: "text" },
      { classified: "sub_head", code: "210A2", description: "ບ້ານ", input_type: "choice" },
      { classified: "sub_head", code: "210A3", description: "ເມືອງ", input_type: "choice" },
      { classified: "sub_head", code: "210A4", description: "ແຂວງ", input_type: "choice" },
      { classified: "sub_head", code: "210A5", description: "ເຂດເສດຖະກິດພິເສດ", input_type: "choice" },
    
      { classified: "title", code: "210B", description: "ແຜນທີ່ໂຮງງານ", input_type: "file" },
      { classified: "title", code: "210C", description: "ຕຳແໜ່ງພິກັດ GPS (ລະບົບ UTM)", input_type: "choice" },
      { classified: "sub_head", code: "210C1", description: "Zone", input_type: "text" },
      { classified: "sub_head", code: "210C2", description: "ພິກັດ Easting: E", input_type: "text" },
      { classified: "sub_head", code: "210C3", description: "ພິກັດ Northing: N", input_type: "text" },
    ],
    form220: [
      { classified: "heading", code: "220", description: "ສະພາບພື້ນທີ່ອ້ອມຂ້າງໂຮງງານ", input_type: null },
      { classified: "title", code: "220A", description: "ພື້ນທີ່ຕິດກັບໂຮງງານ", input_type: null },
      { classified: "sub_head", code: "220A1", description: "ທິດເໜືອ", input_type: "text" },
      { classified: "sub_head", code: "220A2", description: "ທິດໃຕ້", input_type: "text" },
      { classified: "sub_head", code: "220A3", description: "ທິດຕາເວັນອອກ", input_type: "text" },
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
    ],
    form230: [
      { classified: "heading", code: "230", description: "ການນຳໃຊ້ພື້ນທີ່, ອາຄານ ແລະ ສິ່ງປຸກສ້າງພາຍໃນໂຮງງານ", input_type: null },
      { classified: "title", code: "231", description: "ເນື້ອທີ່ ແລະ ການນຳໃຊ້ພື້ນທີ່", input_type: null },
      { classified: "sub_head", code: "231A", description: "ເນື້ອທີ່ທັງໝົດ (ຕາແມັດ)", input_type: "number" },
      { classified: "sub_head", code: "231B", description: "ພື້ນທີ່ສີຂຽວ (ສ່ວນຮ້ອຍ)", input_type: "number" },
      { classified: "sub_head", code: "231C", description: "ການນຳໃຊ້ພື້ນທີ່", input_type: "T2-1", column:["ລຳດັບ", "ຊື່ພື້ນທີ່", "ເນື້ອທີ່ (ຕາແມັດ)", "ສ່ວນຮ້ອຍ", "ໝາຍເຫດ"] },
      { classified: "sub_head", code: "231D", description: "ແຜນຜັງການນຳໃຊ້ພື້ນທີ່", input_type: "file" },
    
      { classified: "title", code: "232", description: "ອາຄານ ແລະ ສິ່ງປຸກສ້າງ", input_type: null },
      { classified: "sub_head", code: "232A", description: "ຈຳນວນອາຄານ ແລະ ສິ່ງປຸກສ້າງ", input_type: "text" },
      { classified: "sub_head", code: "232B", description: "ຂໍ້ມູນອາຄານ ແລະ ສິ່ງແວດລ້ອມ", input_type: "T2-2", column:["ລຳດັບ", "ຊື່ອາຄານ", "ລັກສະນະອາຄານ", "ຂະໜາດອາຄານ", "ການນຳໃຊ້/ການນຳໃຊ້ສະເພາະ"] },
      { classified: "sub_head", code: "232C", description: "ໃບອະນຸຍາດປຸກສ້າງໂຮງງານ ເລກທີ", input_type: "text" },
    
      { classified: "title", code: "232D", description: "ແຜນຜັງການກໍ່ສ້າງ ແລະ ລະບົບເຕັກນິກໂຮງງານ", input_type: null },
      { classified: "sub_head", code: "232D1", description: "ແຜນຜັງສະແດງສິ່ງປຸກສ້າງໃນບໍລິເວນໂຮງງານ", input_type: "file" },
      { classified: "sub_head", code: "232D2", description: "ແຜນຜັງກໍ່ສ້າງອາຄານຜະລິດ (ຮູບດ້ານໜ້າ, ຂ້າງ, ຫຼັງ ແລະ ຮູບຕັດ)", input_type: "file" },
      { classified: "sub_head", code: "232D3", description: "ແຜນຜັງການກໍ່ສ້າງສາງເກັບມ້ຽນເຄມີ", input_type: "file" },
    ],
    form240: [
      { classified: "heading", code: "240", description: "ອາຄານ ແລະ ພື້ນທີ່ຄວບຄຸມ ", input_type: null },
      { classified: "sub_head", code: "240A", description: "ຫ້ອງເກັບສານເຄມີ", input_type: "text" },
      { classified: "sub_head", code: "240B", description: "ຫ້ອງເກັບສິ່ງເສດເຫຼືອເຄມີ", input_type: "text" },
      { classified: "sub_head", code: "240C", description: "ອາຄານ ຫຼື ພື້ນທີ່ເກັບວັດຖຸດິບ", input_type: "text" },
      { classified: "sub_head", code: "240D", description: "ອາຄານ ຫຼື ພື້ນທີ່ເກັບເຊື້ອໄຟ", input_type: "text" },
    ],
    form250: [
      { classified: "heading", code: "250", description: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
      { classified: "sub_head", code: "250A", description: "ໃບອະນຸຍາດນຳໃຊ້ທີ່ດິນ", input_type: "text" },
      { classified: "sub_head", code: "250B", description: "ໃບອະນຸຍາດປຸກສ້າງໂຮງງານ", input_type: "text" },
      { classified: "sub_head", code: "250C", description: "ໃບອະນຸຍາດສ້າງສາງເກັບມ້ຽນເຄມີ", input_type: "text" },
    ]
  };

  const renderInput = (inputType: string, description: string, classified: string, column:any) => {
    const isTInput = inputType?.startsWith('T');
    switch (inputType) {
      case 'text':
      case 'number':
      case 'file':
        return classified === "title" ? (
          <input type={inputType} placeholder={description} className="form-control ms-3" />
        ) : (
          <input type={inputType} placeholder={description} className="form-control ms-7" />
        );
      case 'choice':
        return classified === "title" ? (
          <Select className='react-select-styled ms-3' classNamePrefix='react-select' />
        ) : (
          <Select className='react-select-styled ms-7' classNamePrefix='react-select' />
        );
        default:
          if (isTInput) {
            return classified === "title" ? (
              <div className='ms-7'><DynamicTable data={column}/></div>
            ) : (
              <div className='ms-7'><DynamicTable data={column}/></div>
            );
          }
          return null;
    }
  };

  const renderFormItems = (form: any[]) => {
    return form.map((item, index) => {
      if (item.classified === 'heading') {
        return null;
      }
      return (
        <div className="form-group mb-3" key={index}>
          {item.classified === "title"
            ? <h4 className='ms-3'>{item.code} {item.description}</h4>
            : <span className='fs-5 ms-7'>{item.code} {item.description}</span>}
          {renderInput(item.input_type, item.description, item.classified, item.column)}
        </div>
      );
    });
  };
  


  return (
    <div className='' style={{ width: '100%' }}>
      <h2 className='mb-5'>
        200 ທີ່ຕັ້ງ ແລະ ການນຳໃຊ້ພື້ນທີ່ໂຮງງານ
      </h2>
      <div className='accordion' id='kt_accordion_2'>
        {Object.keys(forms).map((formKey, idx) => (
          <div className='accordion-item' key={idx}>
            <h2 className='accordion-header' id={`kt_accordion_2_header_${idx + 1}`}>
              <button
                className='accordion-button fs-4 fw-bold collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={`#kt_accordion_2_body_${idx + 1}`}
                aria-expanded='false'
                aria-controls={`kt_accordion_2_body_${idx + 1}`}
              >
                {formKey.replace('form', '')} {forms[formKey][0]?.description}
              </button>
            </h2>
            <div
              id={`kt_accordion_2_body_${idx + 1}`}
              className='accordion-collapse collapse'
              aria-labelledby={`kt_accordion_2_header_${idx + 1}`}
              data-bs-parent='#kt_accordion_2'
            >
              <div className='accordion-body'>
                {renderFormItems(forms[formKey])}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Step2 };


const form200 = [
  { classified: "heading", code: "200", description: "ທີ່ຕັ້ງຂອງໂຮງງານ", input_type: null },
  { classified: "title", code: "210A", description: "ທີ່ຕັ້ງໂຮງງານ", input_type: null },
  { classified: "sub_head", code: "210A1", description: "ຖະໜົນ", input_type: "text" },
  { classified: "sub_head", code: "210A2", description: "ບ້ານ", input_type: "choice" },
  { classified: "sub_head", code: "210A3", description: "ເມືອງ", input_type: "choice" },
  { classified: "sub_head", code: "210A4", description: "ແຂວງ", input_type: "choice" },
  { classified: "sub_head", code: "210A5", description: "ເຂດເສດຖະກິດພິເສດ", input_type: "choice" },

  { classified: "title", code: "210B", description: "ແຜນທີ່ໂຮງງານ", input_type: "file" },
  { classified: "title", code: "210C", description: "ຕຳແໜ່ງພິກັດ GPS (ລະບົບ UTM)", input_type: "choice" },
  { classified: "sub_head", code: "210C1", description: "Zone", input_type: "text" },
  { classified: "sub_head", code: "210C2", description: "ພິກັດ Easting: E", input_type: "text" },
  { classified: "sub_head", code: "210C3", description: "ພິກັດ Northing: N", input_type: "text" },

  { classified: "heading", code: "220", description: "ສະພາບພື້ນທີ່ອ້ອມຂ້າງໂຮງງານ", input_type: null },
  { classified: "title", code: "220A", description: "ພື້ນທີ່ຕິດກັບໂຮງງານ", input_type: null },
  { classified: "sub_head", code: "220A1", description: "ທິດເໜືອ", input_type: "text" },
  { classified: "sub_head", code: "220A2", description: "ທິດໃຕ້", input_type: "text" },
  { classified: "sub_head", code: "220A3", description: "ທິດຕາເວັນອອກ", input_type: "text" },
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

  { classified: "heading", code: "230", description: "ການນຳໃຊ້ພື້ນທີ່, ອາຄານ ແລະ ສິ່ງປຸກສ້າງພາຍໃນໂຮງງານ", input_type: null },
  { classified: "title", code: "231", description: "ເນື້ອທີ່ ແລະ ການນຳໃຊ້ພື້ນທີ່", input_type: null },
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

  { classified: "heading", code: "240", description: "ອາຄານ ແລະ ພື້ນທີ່ຄວບຄຸມ ", input_type: null },
  { classified: "sub_head", code: "240A", description: "ຫ້ອງເກັບສານເຄມີ", input_type: "text" },
  { classified: "sub_head", code: "240B", description: "ຫ້ອງເກັບສິ່ງເສດເຫຼືອເຄມີ", input_type: "text" },
  { classified: "sub_head", code: "240C", description: "ອາຄານ ຫຼື ພື້ນທີ່ເກັບວັດຖຸດິບ", input_type: "text" },
  { classified: "sub_head", code: "240D", description: "ອາຄານ ຫຼື ພື້ນທີ່ເກັບເຊື້ອໄຟ", input_type: "text" },
  
  { classified: "heading", code: "250", description: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
  { classified: "sub_head", code: "250A", description: "ໃບອະນຸຍາດນຳໃຊ້ທີ່ດິນ", input_type: "text" },
  { classified: "sub_head", code: "250B", description: "ໃບອະນຸຍາດປຸກສ້າງໂຮງງານ", input_type: "text" },
  { classified: "sub_head", code: "250C", description: "ໃບອະນຸຍາດສ້າງສາງເກັບມ້ຽນເຄມີ", input_type: "text" },

]