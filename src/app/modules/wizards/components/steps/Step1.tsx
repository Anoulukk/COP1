import {FC} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'


const Step1: FC = () => {

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
  const renderField = (item: any) => {
    switch (item.input_type) {
      case "text":
        return (
          <div key={item.code} className="mb-3 ms-10">
            <h4 key={item.code}>{item.code} {item.description}</h4>
            <Field type="text" name={item.code} className="form-control" />
            <ErrorMessage name={item.code} component="div" className="text-danger" />
          </div>
        );
      case "file":
        return (
          <div key={item.code} className="mb-3 ms-10">
            <h4 key={item.code}>{item.code} {item.description}</h4>
            <Field type="file" name={item.code} className="form-control" />
            <ErrorMessage name={item.code} component="div" className="text-danger" />
          </div>
        );
      case "choice":
        return (
          <div key={item.code} className="mb-3 ms-10">
            <h4 key={item.code}>{item.code} {item.description}</h4>
            <Field as="select" name={item.code} className="form-control">
              <option value="">Select an option</option>
              <option value="Option1">Option 1</option>
              <option value="Option2">Option 2</option>
            </Field>
            <ErrorMessage name={item.code} component="div" className="text-danger" />
          </div>
        );
      case null:
        if (item.classified === "heading") {
          return <h3 key={item.code}>{item.code} {item.description}</h3>;
        } else if (item.classified === "title") {
          // Check if input_type exists even when classified as "title"
          if (item.input_type === "file") {
            return (
              <div key={item.code} className="mb-3 ms-10">
                <h4 className="ms-5" key={item.code}>{item.code} {item.description}</h4>
                <Field type="file" name={item.code} className="form-control" />
                <ErrorMessage name={item.code} component="div" className="text-danger" />
              </div>
            );
          } else if (item.input_type === "choice") {
            return (
              <div key={item.code} className="mb-3 ms-10">
                <h4 className="ms-5" key={item.code}>{item.code} {item.description}</h4>
                <Field as="select" name={item.code} className="form-control">
                  <option value="">Select an option</option>
                  <option value="Option1">Option 1</option>
                  <option value="Option2">Option 2</option>
                </Field>
                <ErrorMessage name={item.code} component="div" className="text-danger" />
              </div>
            );
          } else {
            // If no specific input_type is given, just render the title
            return <h4 className="ms-5" key={item.code}>{item.code} {item.description}</h4>;
          }
        }
        break;
      default:
        return null;
    }
  };
  
  

  return (
    <div className='' style={{ width: '100%' }}>
         <ul className="nav nav-tabs nav-line-tabs mb-5 fs-6">
  <li className="nav-item">
    <a
      className="nav-link active"
      data-bs-toggle="tab"
      href="#kt_tab_pane_1"
    >
      110 ຂໍ້ມູນວິສາຫະກິດ
    </a>
  </li>
  <li className="nav-item">
    <a
      className="nav-link"
      data-bs-toggle="tab"
      href="#kt_tab_pane_2"
    >
      120 ຫົວໜ່ວຍຄຸ້ມຄອງສິ່ງແວດລ້ອມ
    </a>
  </li>
  <li className="nav-item">
    <a
      className="nav-link"
      data-bs-toggle="tab"
      href="#kt_tab_pane_3"
    >
      130 ຫົວໜ່ວຍຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ 
    </a>
  </li>
  <li className="nav-item">
    <a
      className="nav-link"
      data-bs-toggle="tab"
      href="#kt_tab_pane_4"
    >
      140 ເອກະສານທີ່ກ່ຽວຂ້ອງ
    </a>
  </li>
</ul> 
{/* <div className="tab-content" id="myTabContent">
  <div
    className="tab-pane fade active show"
    id="kt_tab_pane_1"
    role="tabpanel"
  >
         {form200.map(item => renderField(item))}

  </div>
  <div className="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
    Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim
    irure officia enim reprehenderit. Magna duis labore cillum sint
    adipisicing exercitation ipsum. Nostrud ut anim non exercitation
    velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint
    velit ullamco magna consequat voluptate minim amet aliquip ipsum
    aute laboris nisi. Labore labore veniam irure irure ipsum
    pariatur mollit magna in cupidatat dolore magna irure esse
    tempor ad mollit. Dolore commodo nulla minim amet ipsum officia
    consectetur amet ullamco voluptate nisi commodo ea sit eu.
  </div>
  <div className="tab-pane fade" id="kt_tab_pane_3" role="tabpanel">
    Sint sit mollit irure quis est nostrud cillum consequat Lorem
    esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam
    Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim
    cupidatat. eserunt officia id Lorem nostrud aute id commodo elit
    eiusmod enim irure amet eiusmod qui reprehenderit nostrud
    tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad
    irure in labore cillum elit enim. Consequat aliquip incididunt
    ipsum et minim laborum laborum laborum et cillum labore.
    Deserunt adipisicing cillum id nulla minim nostrud labore
    eiusmod et amet.
  </div>
  <div className="tab-pane fade" id="kt_tab_pane_4" role="tabpanel">
    Sint sit mollit irure quis est nostrud cillum consequat Lorem
    esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam
    Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim
    cupidatat. eserunt officia id Lorem nostrud aute id commodo elit
    eiusmod enim irure amet eiusmod qui reprehenderit nostrud
    tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad
    irure in labore cillum elit enim. Consequat aliquip incididunt
    ipsum et minim laborum laborum laborum et cillum labore.
    Deserunt adipisicing cillum id nulla minim nostrud labore
    eiusmod et amet.
  </div>
</div> 
  {/*<h2 className='mb-5'>

      100 ຫົວໜ່ວຍຄຸ້ມຄອງສິ່ງແວດລ້ອມ
  </h2>
 <div className='accordion' id='kt_accordion_1' >
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
      <strong>This is the first item's accordion body.</strong>It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as the
      showing and hiding via CSS transitions. You can modify any of this with custom
      CSS or overriding our default variables. It's also worth noting that just about
      any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
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
      120 ຫົວໜ່ວຍຄຸ້ມຄອງສິ່ງແວດລ້ອມ
    </button>
  </h2>
  <div
    id='kt_accordion_1_body_2'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_2'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
      <strong>This is the second item's accordion body.</strong>It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as the
      showing and hiding via CSS transitions. You can modify any of this with custom
      CSS or overriding our default variables. It's also worth noting that just about
      any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
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
      130 ຫົວໜ່ວຍຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ
    </button>
  </h2>
  <div
    id='kt_accordion_1_body_3'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_3'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
      <strong>This is the third item's accordion body.</strong>It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as the
      showing and hiding via CSS transitions. You can modify any of this with custom
      CSS or overriding our default variables. It's also worth noting that just about
      any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
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
      140 ຫົວໜ່ວຍຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ
    </button>
  </h2>
  <div
    id='kt_accordion_1_body_4'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_4'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
      <strong>This is the third item's accordion body.</strong>It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as the
      showing and hiding via CSS transitions. You can modify any of this with custom
      CSS or overriding our default variables. It's also worth noting that just about
      any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
</div>
</div> */}
      {/* {form200.map(item => renderField(item))} */}
    </div>
  );
};


export {Step1}