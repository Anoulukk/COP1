import {FC} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'
import DynamicTable from '../DynamicTable';
import Select from 'react-select';


const Step1: FC = () => {
  const forms:any = {
    form110: [
      { classified: "heading", code: "110", description: "ຂໍ້ມູນວິສາຫະກິດ", input_type: null },
      { classified: "title", code: "110A", description: "ຊື່ບໍລິສັດ", input_type: null },
      { classified: "sub_head", code: "110A1", description: "ຊື່ລາວ", input_type: "text" },
      { classified: "sub_head", code: "110A2", description: "ຊື່ອັງກິດ", input_type: "text" },
      { classified: "title", code: "110B", description: "ຜູ້ອຳນວຍການ", input_type: "text" },
      { classified: "title", code: "110C", description: "ປະກອບກິດຈະການ", input_type: "text" },
      { classified: "title", code: "110D", description: "ທຶນຈົດທະບຽນ", input_type: "null" },
      { classified: "sub_head", code: "110D1", description: "ກີບ", input_type: "number" },
      { classified: "sub_head", code: "110D2", description: "ໂດລາ", input_type: "number" },
      { classified: "title", code: "110E", description: "ກຳນົດອາຍຸການລົງທຶນ (ປີ)", input_type: "number" },
      { classified: "title", code: "110F", description: "ທີ່ຕັ້ງສຳນັກງານ", input_type: null },
      { classified: "sub_head", code: "110F1", description: "ບ້ານ", input_type: "choice" },
      { classified: "sub_head", code: "110F2", description: "ເມືອງ", input_type: "choice" },
      { classified: "sub_head", code: "110F3", description: "ແຂວງ", input_type: "choice" },
      { classified: "sub_head", code: "110F4", description: "ເຂດເສດຖະກິດພິເສດ", input_type: "choice" },
      { classified: "title", code: "110G", description: "ໂຄງຮ່າງການຈັດຕັ້ງ", input_type: "file" },
      { classified: "title", code: "110H", description: "ເລກປະຈຳຕົວວິສາຫະກິດ", input_type: "number" },
      { classified: "title", code: "110I", description: "ເລກປະຈຳຕົວຜູ້ຄອບຄອງສິ່ງເສດເຫຼືອ ແລະ ສ້າງມົນລະພິດ (EMC ID)", input_type: "text" },
      { classified: "title", code: "110J", description: "ຂະແໜງທຸລະກິດ (LSIC)", input_type: "choice" },
      { classified: "title", code: "110K", description: "ຂະໜາດໂຮງງານ", input_type: "choice" },
      { classified: "title", code: "110L", description: "ລະດັບຄວາມສ່ຽງຜົນກະທົບດ້ານສິ່ງແວດລ້ອມຂອງໂຮງງານ", input_type: "choice" },
    ],
    form120: [
      { classified: "heading", code: "120", description: "ຫົວໜ່ວຍຄຸ້ມຄອງສິ່ງແວດລ້ອມ", input_type: null },
      { classified: "title", code: "121", description: "ບໍລິສັດທີ່ປຶກສາສິ່ງແວດລ້ອມ", input_type: null },
      { classified: "sub_head", code: "121A", description: "ຊື່", input_type: "text" },
      { classified: "sub_head", code: "121B", description: "ເລກທີໃບອະນຸຍາດໃຫ້ບໍລິການວິຊາການດ້ານສິ່ງແວດລ້ອມ", input_type: "text" },
      { classified: "title", code: "122", description: "ຜູ້ຈັດການດ້ານສິ່ງແວດລ້ອມ", input_type: null },
      { classified: "sub_head", code: "122A", description: "ຊື່", input_type: "text" },

      { classified: "title", code: "123", description: "ວິຊາການຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ເຄມີປະຈຳໂຮງງານ", input_type: null },
      { classified: "sub_head", code: "123A", description: "ຊື່່  ວິຊາການຄຸ້ມຄອງສິ່ງແວດລ້ອມທົ່ວໄປ", input_type: "text" },
      { classified: "sub_head", code: "123B", description: "ຊື່  ວິຊາການຄວບຄຸມມົນລະພິດທາງນ້ຳ", input_type: "text" },
      { classified: "sub_head", code: "123C", description: "ຊື່  ວິຊາການຄວບຄຸມມົນລະພິດທາງອາກາດ", input_type: "text" },
      { classified: "sub_head", code: "123D", description: "ຊື່ ວິຊາການຄວບຄຸມທາດເຄມີ", input_type: "text" },
      { classified: "sub_head", code: "123E", description: "ຊື່  ວິຊາການຄວບຄຸມສິ່ງເສດເຫຼືອປະເພດແຂງ ແລະ ອື່ນໆ", input_type: "text" },
    ],
    form130: [
      { classified: "heading", code: "130", description: "ຫົວໜ່ວຍຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ ", input_type: null },
      { classified: "title", code: "131", description: "ພະນັກງານຮັບຜິດຊອບດ້ານຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ", input_type: null },
      { classified: "sub_head", code: "131A", description: "ຊື່ ພະນັກງານຮັບຜິດຊອບດ້ານຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ", input_type: "text" },
      { classified: "title", code: "132", description: "ໜ່ວຍງານຮັບຜິດຊອບ ຫຼື ຄະນະກຳມະການດ້ານຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ", input_type: null },
      { classified: "sub_head", code: "132A", description: "ລາຍຊື່ພາຍໃນຫົວໜ່ວຍຄວາມປອດໄພ", input_type: "T1-1", column:["ຊື່ ແລະ ນາມສະກຸນ", "ພາກສ່ວນ"] },
      { classified: "sub_head", code: "132B", description: "ໂຄງຮ່າງການຈັດຕັ້ງໜ່ວຍງານຮັບຜິດຊອບຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ", input_type: "file" },
    ],
    form140: [
      { classified: "heading", code: "140", description: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
      { classified: "sub_head", code: "140A", description: "ໃບທະບຽນວິສາຫະກິດ (D1-1)", input_type: "file" },
      { classified: "sub_head", code: "140B", description: "ໃບອະນຸຍາດລົງທຶນ (D1-2)", input_type: "file" },
      { classified: "sub_head", code: "140C", description: "ໃບຢັ້ງຢືນ ເລກປະຈຳຕົວວິສາຫະກິດ (D1-3)", input_type: "file" },
      { classified: "sub_head", code: "140D", description: "ໃບຢັ້ງຢືນການມອບເລກປະຈຳຕົວຜູ້ເສຍອາກອນ (D1-4)", input_type: "file" },
      { classified: "sub_head", code: "140E", description: "ໃບຢັ້ງຢືນເລກປະຈຳຕົວຜູ້ຄອບຄອງສິ່ງເສດເຫຼືອ ແລະ ສ້າງມົນລະພິດ (D1-5)", input_type: "file" },
      { classified: "sub_head", code: "140F", description: "ໃບອະນຸຍາດດຳເນີນທຸລະກິດກ່ຽວກັບເຄມີ (D1-6)", input_type: "file" },
      { classified: "sub_head", code: "140G", description: "ໃບອະນຸຍາດໃຫ້ບໍລິການວິຊາການກ່ຽວກັບສິ່ງແວດລ້ອມ (D1-7)", input_type: "file" },
      { classified: "sub_head", code: "140H", description: "ຊຸດເອກະສານປະຈຳຕົວຜູ້ຈັດການດ້ານສິ່ງແວດລ້ອມ (D1-8)", input_type: "file" },
      { classified: "sub_head", code: "140I", description: "ຊຸດເອກະສານປະຈຳຕົວວິຊາການຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ເຄມີປະຈຳໂຮງງານ (D1-9)", input_type: "file" },
      { classified: "sub_head", code: "140J", description: "ຊຸດເອກະສານປະຈຳຕົວພະນັກງານຮັບຜິດຊອບດ້ານຄວາມປອດໄພ (D1-10)", input_type: "file" },
    
    ],

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
          <input type={inputType} placeholder={description} className="form-control ms-4" />
        );
      case 'choice':
        return classified === "title" ? (
          <Select className='react-select-styled ms-3' classNamePrefix='react-select' />
        ) : (
          <Select className='react-select-styled ms-4' classNamePrefix='react-select' />
        );
        case 'T1-1':
          return <DynamicTable data={column}/>;

        default:
          // if (isTInput) {
          //   return <DynamicTable column={column}/>;
          // }
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
            : <span className='fs-5 ms-4'>{item.code} {item.description}</span>}
          {renderInput(item.input_type, item.description, item.classified, item.column)}
        </div>
      );
    });
  };
  

  return (
    <div className='' style={{ width: '100%' }}>
    <h2 className='mb-5'>
      100 ຂໍ້ມູນທົ່ວໄປຂອງວິສາຫະກິດ
    </h2>
    <div className='accordion' id='kt_accordion_1'>
      {Object.keys(forms).map((formKey, idx) => (
        <div className='accordion-item' key={idx}>
          <h2 className='accordion-header' id={`kt_accordion_1_header_${idx + 1}`}>
            <button
              className='accordion-button fs-4 fw-bold collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#kt_accordion_1_body_${idx + 1}`}
              aria-expanded='false'
              aria-controls={`kt_accordion_1_body_${idx + 1}`}
            >
              {formKey.replace('form', '')} {forms[formKey][0]?.description}
            </button>
          </h2>
          <div
            id={`kt_accordion_1_body_${idx + 1}`}
            className='accordion-collapse collapse'
            aria-labelledby={`kt_accordion_1_header_${idx + 1}`}
            data-bs-parent='#kt_accordion_1'
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


export {Step1}