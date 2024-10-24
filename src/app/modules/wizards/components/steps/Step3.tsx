import {FC} from 'react'
import {Field, ErrorMessage} from 'formik'
import DynamicTable from '../DynamicTable';
import Select from 'react-select';

const Step3: FC = () => {
  const forms:any = {
    form310: [
      { classified: "heading", code: "310", description: "ການນຳໃຊ້ວັດຖຸດິບ, ເຊື້ອໄຟ ແລະ ສານເຄມີ", input_type: null },
      { classified: "title", code: "311", description: "ວັດຖຸດິບ", input_type: null },
      { classified: "sub_head", code: "311A", description: "ວັດຖຸດິບທັງໝົດ (ຊະນິດ)", input_type: "number" },
      { classified: "sub_head", code: "311B", description: "ຂໍ້ມູນວັດຖຸດິບ", input_type: "T3-1", column:["ລຳດັບ", "ຊື່ວັດຖຸດິບ", "ແຫຼ່ງທີ່ມາ", "HS Code", "ປະລິມານການໃຊ້","ການຂົນສົ່ງ", "ການບັນຈຸ", "ສະຖານທີ່ເກັບ", "ຂະບວນການນຳໃຊ້", "ໝາຍເຫດ", "ຄວບຄຸມ/ບໍ່ຄວບຄຸມ"] },
      { classified: "sub_head", code: "311C", description: "ຮູບພາບວັດຖຸດິບ ແລະ ການຈັດເກັບ", input_type: "file" },
      { classified: "sub_head", code: "311D", description: "ມາດຕະການສຳລັບນຳເຂົ້າວັດຖຸດິບຄວບຄຸມ", input_type: "text" },
      { classified: "sub_head", code: "311E", description: "ມາດຕະການສຳລັບການຕິດຕາມກວດກາ", input_type: "text" },
    
      { classified: "title", code: "312", description: "ເຊື້ອໄຟ", input_type: null },
      { classified: "sub_head", code: "312A", description: "ເຊື້ອໄຟທີ່ນຳໃຊ້ (ຊະນິດ)", input_type: "number" },
      { classified: "sub_head", code: "312B", description: "ຂໍ້ມູນການໃຊ້ເຊື້ອໄຟ", input_type: "T3-2", column:["ລຳດັບ", "ປະເພດເຊື້ອໄຟ", "ແຫຼ່ງທີ່ມາ", "ປະລິມານການນຳໃຊ້", "ປະລິມານການກັກເກັບ","ການຂົນສົ່ງ", "ການບັນຈຸ", "ສະຖານທີ່ເກັບ", "ຂະບວນການນຳໃຊ້", "ໝາຍເຫດ"] },
      { classified: "sub_head", code: "312C", description: "ຮູບພາບເຊື້ອໄຟ ແລະ ການຈັດເກັບ", input_type: "file" },

      { classified: "title", code: "313", description: "ສານເຄມີ", input_type: null },
      { classified: "sub_head", code: "313A", description: "ສານເຄມີທັງໝົດທີ່ນຳໃຊ້ (ຊະນິດ)", input_type: "number" },
      { classified: "sub_head", code: "313B", description: "ປະລິມານສານເຄມີທັງໝົດທີ່ນຳໃຊ້ (kg)", input_type: "number" },

      { classified: "sub_head", code: "313C", description: "ປະເພດສານເຄມີເປັນພິດອັນຕະລາຍ", input_type: null },
      { classified: "sub_head", code: "313C1", description: "ສານເຄມີປະເພດ 1 (ຊະນິດ)", input_type: "number" },
      { classified: "sub_head", code: "313C2", description: "ສານເຄມີປະເພດ 2 (ຊະນິດ)", input_type: "number" },
      { classified: "sub_head", code: "313C3", description: "ສານເຄມີປະເພດ 3 (ຊະນິດ)", input_type: "number" },
      { classified: "sub_head", code: "313C4", description: "ສານເຄມີປະເພດ 4 (ຊະນິດ)", input_type: "number" },
      { classified: "sub_head", code: "313C5", description: "ສານເຄມີປະເພດອື່ນໆ (ຊະນິດ)", input_type: "number" },

      { classified: "sub_head", code: "313D", description: "ສານເຄມີ ແລະ ການນຳໃຊ້", input_type: "T3-3", column:["ລຳດັບ", "ຊື່ສານເຄມີ", "ແຫຼ່ງທີ່ມາ", "ປະລິມານທີ່ໃຊ້ຕໍ່ປີ", "ປະລິມານກັກເກັບ","ການຂົນສົ່ງ", "ການບັນຈຸ", "ສະຖານທີ່ເກັບ", "ຂະບວນການນຳໃຊ້", "ໝາຍເຫດ"] },
      { classified: "sub_head", code: "313E", description: "ຮູບພາບສານເຄມີ", input_type: "file" },
      { classified: "sub_head", code: "313F", description: "ຂໍ້ມູນຄວາມເປັນພິດອັນຕະລາຍຂອງສານເຄມີ", input_type: "T3-4", column:["ລຳດັບ", "ຊື່ສານເຄມີ", "ລັກສະນະທາງກາຍະພາບ", "ຄຸນລັກສະນະອັນຕະລາຍ", "HS Code","ປະເພດສານເຄມີອັນຕະລາຍ", "ອົງປະກອບຫຼັກຂອງເຄມີ", "C.A.S No."] },


    ],
    form320: [
      { classified: "heading", code: "320", description: "ຜະລິດຕະພັນ", input_type: null },
      { classified: "title", code: "321", description: "ຜະລິດຕະພັນຫຼັກ", input_type: null },
      { classified: "sub_head", code: "321A", description: "ຜະລິດຕະພັນ (ຊະນິດ)", input_type: "number" },
      { classified: "sub_head", code: "321B", description: "ກຳລັງການຜະລິດປົກກະຕິຕໍ່ປີ", input_type: "text" },
      { classified: "sub_head", code: "321C", description: "ກຳລັງການຜະລິດສູງສຸດຕໍ່ປີ", input_type: "text" },
      { classified: "sub_head", code: "321D", description: "ຂໍ້ມູນຜະລິດຕະພັນ", input_type: "T3-5", column:["ລຳດັບ", "ຊື່ຜະລິດຕະພັນ", "ກຳລັງການຜະລິດປົກກະຕິ", "ກຳລັງການຜະລິດສູງສຸດ", "ການບັນຈຸ","ສະຖານທີ່ເກັບ", "ການຂົນສົ່ງ", "ແຫຼ່ງຈຳໜ່າຍ", "HS Code"] },
      { classified: "sub_head", code: "321E", description: "ຮູບພາບຜະລິດຕະພັນ", input_type: "file" },

      { classified: "title", code: "322", description: "ຜະລິດຕະພັນຂ້າງຄຽງ", input_type: null },
      { classified: "sub_head", code: "322A", description: "ຜະລິດຕະພັນຂ້າງຄຽງ (ຊະນິດ)", input_type: "text" },
      { classified: "sub_head", code: "322B", description: "ຂໍ້ມູນຜະລິດຕະພັນຂ້າງຄຽງ", input_type: "T3-6", column:["ລຳດັບ", "ຊື່ຜະລິດຕະພັນຂ້າງຄຽງ", "ປະລິມານ", "ມາຈາກຂະບວນການ", "ການບັນຈຸ","ສະຖານທີ່ເກັບ"] },
      { classified: "sub_head", code: "322C", description: "ຮູບພາບຜະລິດຕະພັນຂ້າງຄຽງ", input_type: "file" },
    ],
    form330: [
      { classified: "heading", code: "330", description: "ການນຳໃຊ້ເຄື່ອງຈັກ, ແຮງງານ, ຊັບພະຍາກອນນ້ຳ ແລະ ພະລັງງານໄຟຟ້າ", input_type: null },
      { classified: "title", code: "331", description: "ການນຳໃຊ້ເຄື່ອງຈັກຫຼັກໃນການຜະລິດ", input_type: null },
      { classified: "sub_head", code: "331A", description: "ກຳລັງເຄື່ອງຈັກໃນໂຮງງານ", input_type: "text" },
      { classified: "sub_head", code: "331B", description: "ຂໍ້ມູນເຄື່ອງຈັກໃນໂຮງງານ", input_type: "T3-7", column:["ລຳດັບ", "ຊື່ເຄື່ອງຈັກ", "ລາຍລະອຽດ", "ຈຳນວນ", "ປະເທດຜູ້ຜະລິດ","ແຮງມ້າ/ແຮງມ້າປຽບທຽບ","ແຮງມ້າລວມ"] },
      { classified: "sub_head", code: "331C", description: "ຮູບເຄື່ອງຈັກ", input_type: "file" },
      { classified: "sub_head", code: "331D", description: "ແຜນຜັງຕິດຕັ້ງເຄື່ອງຈັກ", input_type: "file" },
      { classified: "sub_head", code: "331E", description: "ແຜນຜັງຕິດຕັ້ງເຄື່ອງຍົກນ້ຳໜັກ, ແຜນຜັງຕິດຕັ້ງເຕົາອົບ ແລະ ເຕົາສະຕີມ", input_type: "file" },
    
      { classified: "title", code: "332", description: "ການນຳໃຊ້ແຮງງານ", input_type: null },
      { classified: "sub_head", code: "332A", description: "ຈຳນວນຜຽນ (ຜຽນ)", input_type: "number" },
      { classified: "sub_head", code: "332B", description: "ຂໍ້ມູນການເຮັດວຽກ", input_type: "T3-8", column:["ຜຽນ", "ຈຳນວນຜູ້ອອກແຮງ", "ເວລາເຮັດວຽກ", "ເວລາ (ຊົ່ວໂມງ)"] },
      { classified: "sub_head", code: "332C", description: "ຈຳນວນຜູ້ອອກແຮງງານລວມ (ຄົນ)", input_type: "number" },
    
      { classified: "title", code: "332D", description: "ປະເພດແຮງງານ", input_type: null },
      { classified: "sub_head", code: "332D1", description: "ພະນັກງານ-ວິຊາການ-ຊ່ຽວຊານ (ຄົນ)", input_type: "number" },
      { classified: "sub_head", code: "332D2", description: "ແຮງງານຜະລິດ (ຄົນ)", input_type: "number" },

      { classified: "title", code: "332E", description: "ເພດ", input_type: null },
      { classified: "sub_head", code: "332E1", description: "ຜູ້ຊາຍ (ຄົນ)", input_type: "number" },
      { classified: "sub_head", code: "332E2", description: "ຜູ້ຍິງ (ຄົນ)", input_type: "number" },

      { classified: "title", code: "332F", description: "ກຸ່ມແຮງງານ", input_type: null },
      { classified: "sub_head", code: "332F1", description: "ຜູ້ອອກແຮງງານພາຍໃນປະເທດ (ຄົນ)", input_type: "number" },
      { classified: "sub_head", code: "332F2", description: "ຜູ້ອອກແຮງງານຕ່າງປະເທດ (ຄົນ)", input_type: "number" },

      { classified: "title", code: "332G", description: "ການໃຊ້ຜູ້ຮັບເໝົາ (ບໍ່ປະຈຳ)", input_type: null },
      { classified: "sub_head", code: "332G1", description: "ການນຳໃຊ້", input_type: "text" },
      { classified: "sub_head", code: "332G2", description: "ຄວາມຖີ່ໃນການໃຊ້", input_type: "text" },
      { classified: "sub_head", code: "332G3", description: "ຈຳນວນ (ຄົນ)", input_type: "number" },

      { classified: "title", code: "333", description: "ການນຳໃຊ້ນ້ຳ ແລະ ການກັກເກັບ", input_type: null },
      { classified: "sub_head", code: "333A", description: "ປະລິມານການນຳໃຊ້ນ້ຳທັງໝົດ (ແມັດກ້ອນ)", input_type: "number" },
      { classified: "sub_head", code: "333B", description: "ການນຳໃຊ້ນ້ຳປະປາ", input_type: "text" },
      { classified: "sub_head", code: "333B1", description: "ປະລິມານນຳໃຊ້ (ແມັດກ້ອນ)", input_type: "number" },
      { classified: "sub_head", code: "333B2", description: "ຂະໜາດມິເຕີ້", input_type: "text" },
      { classified: "sub_head", code: "333B3", description: "ຂະໜາດທໍ່", input_type: "text" },
      
      { classified: "title", code: "333C", description: "ການນຳໃຊ້ນ້ຳໜ້າດິນ", input_type: null },
      { classified: "sub_head", code: "333C1", description: "ຂະໜາດການນຳໃຊ້ນ້ຳ", input_type: "choice" },
      { classified: "sub_head", code: "333C2", description: "ປະລິມານການໃຊ້ (ແມັດກ້ອນ)", input_type: "number" },
      { classified: "sub_head", code: "333C3", description: "ແຫຼ່ງນ້ຳໜ້າດິນທີ່ນຳໃຊ້", input_type: "text" },
      
      { classified: "title", code: "333D", description: "ການນຳໃຊ້ນໍ້າໃຕ້ດິນ", input_type: null },
      { classified: "sub_head", code: "333D1", description: "ຂະໜາດການນຳໃຊ້ນ້ຳໃຕ້ດິນ", input_type: "choice" },
      { classified: "sub_head", code: "333D2", description: "ປະລິມານການໃຊ້ (ແມັດກ້ອນ)", input_type: "number" },
      { classified: "sub_head", code: "333D3", description: "ຈຳນວນບໍ່ນ້ຳບາດານ/ບໍ່ນ້ຳສ້າງ (ຈຸດ)", input_type: "number" },
      { classified: "sub_head", code: "333D4", description: "ຂໍ້ມູນບໍ່ນ້ຳບາດານ/ບໍ່ນ້ຳສ້າງ", input_type: "T3-9", column:["ບໍນ້ຳບາດານ/ນ້ຳສ້າງ ເລກທີ", "ພິກັດ", "ຄວາມເລິກ", "ຂະໜາດປ້ຳ"] },
      { classified: "sub_head", code: "333D5", description: "ແຜນຜັງບໍ່ນ້ຳບາດານ/ບໍ່ນ້ຳສ້າງ", input_type: "file" },
      { classified: "sub_head", code: "333D6", description: "ໝໍ້ວັດປະລິມານການນຳໃຊ້ນ້ຳໃຕ້ດິນ", input_type: "choice" },
      
      { classified: "title", code: "333E", description: "ການນຳໃຊ້ນ້ຳຄືນໃໝ່", input_type: null },
      { classified: "sub_head", code: "333E1", description: "ການນຳໃຊ້ນ້ຳຄືນໃໝ່", input_type: "choice" },
      { classified: "sub_head", code: "333E2", description: "ນຳໃຊ້ໃນຂະບວນການ", input_type: "text" },

      { classified: "sub_head", code: "333F", description: "ຂໍ້ມູນການໃຊ້ນ້ຳເຂົ້າໃນການອຸປະໂພກ", input_type: "T3-10", column:["ລຳດັບ", "ປະເພດນ້ຳໃຊ້", "ການນຳໃຊ້", "ປະລິມານນຳໃຊ້"] },
      { classified: "sub_head", code: "333G", description: "ຂໍ້ມູນການນຳໃຊ້ນ້ຳເຂົ້າໃນການຜະລິດ", input_type: "T3-11", column:["ລຳດັບ", "ຊື່ຂະບວນການ", "ປະເພດນ້ຳໃຊ້", "ປະລິມານນຳໃຊ້"] },
      { classified: "sub_head", code: "333H", description: "ການກັກເກັບ (ຈຸດ)", input_type: "number" },
      { classified: "sub_head", code: "333I", description: "ປະລິມານກັກເກັບລວມ (ແມັດກ້ອນ)", input_type: "number" },
      { classified: "sub_head", code: "333J", description: "ຂໍ້ມູນການກັກເກັບນ້ຳ", input_type: "T3-12", column:["ລຳດັບ", "ປະເພດການກັກເກັບ", "ປະລິມານການກັກເກັບ (ແມັດກ້ອນ)", "ຂະໜາດຂອງອ່າງ, ໜອງ", "ຂະໜາດ"] },

      { classified: "title", code: "333", description: "ການນຳໃຊ້ໄຟຟ້າ", input_type: null },
      { classified: "sub_head", code: "334A", description: "ຂະໜາດຂ່າຍສານໄຟຟ້າ", input_type: "text" },
      { classified: "sub_head", code: "334B", description: "ຈຳນວນໝໍ້ແປງ ແລະ ຂະໜາດ (KVA)", input_type: "text" },
      { classified: "sub_head", code: "334C", description: "ຂະໜາດໝໍ້ແປງລວມ (KVA)", input_type: "number" },
      { classified: "sub_head", code: "334D", description: "ພະລັງງານໄຟຟ້າສະເລ່ຍ (Kw/ມື້)", input_type: "number" },
      { classified: "sub_head", code: "334E", description: "ໄຟຟ້າສຳຮອງ", input_type: "text" },
      { classified: "sub_head", code: "334F", description: "ແຜນຜັງຕິດຕັ້ງລະບົບໄຟຟ້າ", input_type: "file" },
    ],
    form340: [
      { classified: "heading", code: "340", description: "ຂະບວນການຜະລິດຫຼັກ ແລະ ສະໜັບສະໜຸນ", input_type: null },
      { classified: "title", code: "341", description: "ຫ້ອງເກັບສານເຄມີ", input_type: null },
      { classified: "sub_head", code: "341A", description: "ຈຳນວນສາຍ, ຊຸດການຜະລິດ", input_type: "number" },
      { classified: "sub_head", code: "341B", description: "ຮູບແບບການຜະລິດ", input_type: "choice" },
      { classified: "sub_head", code: "341C", description: "ແຜນວາດຂະບວນການຜະລິດ (Workflow)", input_type: "file" },
      { classified: "sub_head", code: "341D", description: "ຂໍ້ມູນຂະບວນການຜະລິດ", input_type: "T3-13", column:["ລຳດັບ", "ຊື່ຂັ້ນຕອນ", "ອະທິບາຍໂດຍຫຍໍ້", "ວັດຖຸດິບທີ່ນຳໃຊ້", "ສານເຄມີທີ່ນຳໃຊ້"] },
      { classified: "sub_head", code: "341E", description: "ຮູບພາບຂະບວນການຜະລິດ", input_type: "file" },

      { classified: "title", code: "342", description: "ຂະບວນການສະໜັບສະໜຸນ ແລະ ກິດຈະກຳທີ່ເຮັດໃຫ້ເກີດສິ່ງເສດເຫຼືອ ແລະ ມົນລະພິດສິ່ງແວດລ້ອມ", input_type: null },
      { classified: "sub_head", code: "342A", description: "ໜ່ວຍສ້ອມແປງ ແລະ ບຳລຸງຮັກສາ", input_type: "text" },
      { classified: "sub_head", code: "342B", description: "ລະບົບຜະລິດໄຟຟ້າ", input_type: "text" },
      { classified: "sub_head", code: "342C", description: "ລະບົບປັບປຸງຄຸນນະພາບນ້ຳ", input_type: "text" },
      { classified: "sub_head", code: "342D", description: "ໝໍ້ຕົ້ມນ້ຳ (Boiler)", input_type: "text" },
      { classified: "sub_head", code: "342E", description: "ຫໍຫຼໍ່ເຢັນ (Cooling Tower) ", input_type: "text" },
      { classified: "sub_head", code: "342F", description: "ການກຽມວັດຖຸດິບ ແລະ ປະສົມສານເຄມີ", input_type: "text" },
      { classified: "sub_head", code: "342G", description: "ການອະນາໄມ-ລ້າງທຳຄວາມສະອາດພື້ນທີ່ການຜະລິດ ແລະ ອື່ນໆ", input_type: "text" },
      { classified: "sub_head", code: "342H", description: "ຫ້ອງປະຕິບັດການວິເຄາະ", input_type: "text" },
      { classified: "sub_head", code: "342I", description: "ອື່ນໆ", input_type: "text" },
    ],
    form350: [
      { classified: "heading", code: "350", description: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
      { classified: "sub_head", code: "350A", description: "ໃບຢັ້ງຢືນກ່ຽວກັບແຫຼ່ງທີ່ມາວັດຖຸດິບ", input_type: "file" },
      { classified: "sub_head", code: "350B", description: "ໃບອະນຸຍາດນຳເຂົ້າ", input_type: "file" },
      { classified: "sub_head", code: "350C", description: "ໃບທະບຽນບັນຊີເຄມີ", input_type: "file" },
      { classified: "sub_head", code: "350D", description: "ເອກະສານຂໍ້ມູນຄວາມປອດໄພເຄມີ (safety data sheet)", input_type: "file" },
      { classified: "sub_head", code: "350E", description: "ໃບຢັ້ງຢືນຜົນການວິເຄາະເຄມີ (ກໍລະນີເປັນທາດປະສົມ)", input_type: "file" },
      { classified: "sub_head", code: "350F", description: "ສະຫຼາກເຄມີ", input_type: "file" },
      { classified: "sub_head", code: "350G", description: "ໃບອະນຸຍາດນຳໃຊ້ນ້ຳໜ້າດິນ", input_type: "file" },
      { classified: "sub_head", code: "350H", description: "ໃບອະນຸຍາດນຳໃຊ້ນ້ຳໃຕ້ດິນ", input_type: "file" },
      { classified: "sub_head", code: "350I", description: "ໃບອະນຸຍາດຂຸດເຈາະ ຫຼື ຊີເຈາະນ້ຳໃຕ້ດິນ", input_type: "file" },
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
          <input type={inputType} placeholder={description} className="form-control ms-4" />
        );
      case 'choice':
        return classified === "title" ? (
          <Select className='react-select-styled ms-3' classNamePrefix='react-select' />
        ) : (
          <Select className='react-select-styled ms-4' classNamePrefix='react-select' />
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
            : <span className='fs-5 ms-4'>{item.code} {item.description}</span>}
          {renderInput(item.input_type, item.description, item.classified, item.column)}
        </div>
      );
    });
  };
  return (
    <div className='' style={{ width: '100%' }}>
      <h2 className='mb-5'>
        300 ຂໍ້ມູນການປະກອບກິດຈະການ
      </h2>
      <div className='accordion' id='kt_accordion_3'>
        {Object.keys(forms).map((formKey, idx) => (
          <div className='accordion-item' key={idx}>
            <h2 className='accordion-header' id={`kt_accordion_3_header_${idx + 1}`}>
              <button
                className='accordion-button fs-4 fw-bold collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={`#kt_accordion_3_body_${idx + 1}`}
                aria-expanded='false'
                aria-controls={`kt_accordion_3_body_${idx + 1}`}
              >
                {formKey.replace('form', '')} {forms[formKey][0]?.description}
              </button>
            </h2>
            <div
              id={`kt_accordion_3_body_${idx + 1}`}
              className='accordion-collapse collapse'
              aria-labelledby={`kt_accordion_3_header_${idx + 1}`}
              data-bs-parent='#kt_accordion_3'
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


export {Step3}
