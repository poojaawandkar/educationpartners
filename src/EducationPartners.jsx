import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo_result.webp'; // Adjust path if needed

// Example data for education partners
const educationPartners = [


  { "id": 1, "name": "Chennai Institute of Technology", "type": "College", "participants": 1791, "logo": "https://ik.imagekit.io/cm3h8exmw/Screenshot%202025-07-18%20123736.png", "country": "India" },
  { "id": 2, "name": "Vardhaman College Of Engineering", "type": "College", "participants": 645, "logo": "https://static.wixstatic.com/media/38f673_059436b7194643eaa902105454ca8782~mv2.jpg", "country": "India" },
  { "id": 3, "name": "St. Joseph's Institute Of Technology", "type": "College", "participants": 204, "logo": "https://static.wixstatic.com/media/5c35f7_a5413494cdc847f2b3787f6cf9c3fb47~mv2.jpg", "country": "India" },
  { "id": 4, "name": "Jyothi Engineering College(Autonomous)", "type": "College", "participants": 59, "logo": "https://static.wixstatic.com/media/3bfef3_c4eb38fe1bf74976bc7057cda338f472~mv2.png", "country": "India" },
  { "id": 5, "name": "Maeer's Mit Arts, Commerce And Science College Alandi Pune", "type": "College", "participants": 54, "logo": "https://static.wixstatic.com/media/39f834_35898f50117343dbbc833f6a85694c0d~mv2.png", "country": "India" },
  { "id": 6, "name": "K S Rangasamy College Of Technology", "type": "College", "participants": 44, "logo": "https://static.wixstatic.com/media/193a7d_189aaadf210c42c694380ecfa2b895a7~mv2.png", "country": "India" },
  { "id": 7, "name": "M O P Vaishnav College For Women", "type": "College", "participants": 38, "logo": "", "country": "India" },
  { "id": 8, "name": "Gniot Group Of Institutions [Greater Noida Institute Of Technology ]", "type": "College", "participants": 26, "logo": "", "country": "India" },
  { "id": 9, "name": "G H Raisoni College Of Engineering And Management Pune", "type": "College", "participants": 20, "logo": "https://static.wixstatic.com/media/6b9f90_613a7a13e576487cb6ebb1bac67957ce~mv2.png", "country": "India" },
  { "id": 10, "name": "Acropolis Institute Of Technology And Research", "type": "College", "participants": 18, "logo": "", "country": "India" },
  { "id": 11, "name": "G.pullaiah College Of Engineering And Technology", "type": "College", "participants": 17, "logo": "https://static.wixstatic.com/media/7f2a62_e268593dbd3547bfbcc44c6648fbbe42~mv2.jpg", "country": "India" },
  { "id": 12, "name": "Vishwakarma Institute Of Technology, Pune", "type": "College", "participants": 17, "logo": "https://static.wixstatic.com/media/caffbc_e8fd1537bc6146e18a5b2cdd57567165~mv2.jpeg", "country": "India" },
  { "id": 13, "name": "Bharati Vidyapeeth College Of Engineering, Lavale", "type": "College", "participants": 13, "logo": "", "country": "India" },
  { "id": 14, "name": "Badruka College Of Commerce And Arts", "type": "College", "participants": 12, "logo": "", "country": "India" },
  { "id": 15, "name": "Rbmi Group Of Institutions Greater Noida", "type": "College", "participants": 12, "logo": "https://static.wixstatic.com/media/2826be_4509c521f4da4979a726fc039237e706~mv2.webp", "country": "India" },
  { "id": 16, "name": "Vishwakarma Institute Of Information Technology", "type": "College", "participants": 11, "logo": "https://static.wixstatic.com/media/caffbc_f1dfea1daef7448996be4417e9ec3459~mv2.jpeg", "country": "India" },
  { "id": 17, "name": "Keystone School Of Engineering", "type": "College", "participants": 10, "logo": "https://static.wixstatic.com/media/6ea833_da6433c85c634014a7b573514f3ceae6~mv2.jpeg", "country": "India" },
  { "id": 18, "name": "Pdea's Seth Govind Raghunath Sable College Of Pharmacy Saswad", "type": "College", "participants": 10, "logo": "https://static.wixstatic.com/media/35b1c2_edb69090d47247f8a98967c1b2fea30b~mv2.jpg", "country": "India" },
  { "id": 19, "name": "Mksss’s Cummins College Of Engineering For Women, Pune-411052", "type": "College", "participants": 9, "logo": "https://static.wixstatic.com/media/efe769_ac9f284c4722421998e44f840522dfb3~mv2.jpeg", "country": "India" },
  { "id": 20, "name": "National Institute Of Technology Raipur", "type": "College", "participants": 7, "logo": "", "country": "India" },
  { "id": 21, "name": "Rakhpal Bahadur Management Institute, Greater Noida", "type": "College", "participants": 7, "logo": "https://static.wixstatic.com/media/2826be_d377921fd0ba4e69be5228ee44ce6c09~mv2.webp", "country": "India" },
  { "id": 22, "name": "Aissms Institute Of Information Technology, Pune", "type": "College", "participants": 6, "logo": "https://static.wixstatic.com/media/b9ef7a_785ddb4265704c32a5f7cf282cc21eb7~mv2.jpg", "country": "India" },
  { "id": 23, "name": "Ananthalakshmi Institute Of Technology And Sciences", "type": "College", "participants": 6, "logo": "", "country": "India" },
  { "id": 24, "name": "Velammal Engineering College", "type": "College", "participants": 6, "logo": "https://static.wixstatic.com/media/abe37f_1bfac430fe164ccb94ccdfc5ed6dfb08~mv2.png", "country": "India" },
  { "id": 25, "name": "Marathwada Mitramandal’s Institute Of Technology, Lohgaon, Pune", "type": "College", "participants": 5, "logo": "https://static.wixstatic.com/media/06933b_407fd2fa37bc47ada7a925d172c2aac0~mv2.jpg", "country": "India" },
  { "id": 26, "name": "St.joseph Dental College", "type": "College", "participants": 5, "logo": "https://static.wixstatic.com/media/c53697_81548c188c494660940b04abc402994b~mv2.jpg", "country": "India" },
  { "id": 27, "name": "Arifa Institution Of Technology", "type": "College", "participants": 3, "logo": "", "country": "India" },
  { "id": 28, "name": "Babu Banarasi Das Northern Indian Institute Of Technology Lucknow", "type": "College", "participants": 3, "logo": "https://static.wixstatic.com/media/ff1068_735e0d2edd8d4337b013f7290ef0c1f3~mv2.jpg", "country": "India" },
  { "id": 29, "name": "D Y Patil College Of Engineering, Akurdi Pune", "type": "College", "participants": 3, "logo": "", "country": "India" },
  { "id": 30, "name": "Iimt University", "type": "College", "participants": 3, "logo": "https://static.wixstatic.com/media/1c9cfc_5f2e8e8ad27f458aad413dd79e2b063d~mv2.png", "country": "India" },
  { "id": 31, "name": "Mes Abasaheb Garware College Pune", "type": "College", "participants": 3, "logo": "", "country": "India" },
  { "id": 32, "name": "Allenhouse Institute Of Technology", "type": "College", "participants": 2, "logo": "https://static.wixstatic.com/media/fab707_09bc4fe5de814ef1b94f7900e8412c6f~mv2.jpg", "country": "India" },
  { "id": 33, "name": "Rajagiri College Of Social Sciences (Autonomous )", "type": "College", "participants": 2, "logo": "https://static.wixstatic.com/media/ec295d_ab72ff18814145e392f16842553cd8e9~mv2.jpg", "country": "India" },
  { "id": 34, "name": "Vishwakarma College Of Arts Commerce And Science", "type": "College", "participants": 2, "logo": "https://static.wixstatic.com/media/caffbc_7b60de22b97146019a8797e98f852431~mv2.jpeg", "country": "India" },
  { "id": 35, "name": "S. K. N. Sinhgad School Of Business Management", "type": "College", "participants": 1, "logo": "", "country": "India" },
  { "id": 36, "name": "Bhivarabai Sawant College Of Engineering And Research, Narhe, Pune", "type": "College", "participants": 0, "logo": "https://static.wixstatic.com/media/a1e044_318fbac8978949c6b6c0c8b6a9f9c4a0~mv2.jpg", "country": "India" },
  { "id": 37, "name": "Anjuman I Islam's Kalsekar Technical Campus", "type": "College", "participants": 0, "logo": "", "country": "India" },
  { "id": 38, "name": "Baburaoji Gholap College", "type": "College", "participants": 0, "logo": "https://static.wixstatic.com/media/697f06_c7626b28dd644f58a3211438c530e4bc~mv2.jpg", "country": "India" },
  { "id": 39, "name": "Global Academy Of Technology, Bangalore", "type": "College", "participants": 0, "logo": "https://static.wixstatic.com/media/0b0797_8ad4d6e25f6349fd9eca5fe8d992f25b~mv2.jpg", "country": "India" },
  { "id": 40, "name": "Guru Gobind Singh Polytechnic Nashik", "type": "College", "participants": 0, "logo": "https://static.wixstatic.com/media/16f8ae_06673656c8504b2caa04b5b49954e3f5~mv2.jpg", "country": "India" },
  { "id": 41, "name": "Haldia Institute Of Technology", "type": "College", "participants": 0, "logo": "https://static.wixstatic.com/media/d5092d_9be87adefdfe4f799cbc156cf5a72d47~mv2.png", "country": "India" },
  { "id": 42, "name": "Kipm Technical Campus Gida, Gorakhpur", "type": "College", "participants": 0, "logo": "https://static.wixstatic.com/media/d4f84b_4f291f5cab7e4046944222e66e29e412~mv2.png", "country": "India" },
  { "id": 43, "name": "Madanapalle Institution Of Technology Science", "type": "College", "participants": 0, "logo": "", "country": "India" },
  { "id": 44, "name": "Mahatma Education Society's Pillai College Of Engineering", "type": "College", "participants": 0, "logo": "https://static.wixstatic.com/media/0f9f1e_c244daa8e5f448fe8a599cb042bd0782~mv2.png", "country": "India" },
  { "id": 45, "name": "Mh Saboo Siddik Polytechnic", "type": "College", "participants": 0, "logo": "", "country": "India" },
  { "id": 46, "name": "Nutan Mahavidyalaya Selu", "type": "College", "participants": 0, "logo": "https://static.wixstatic.com/media/179d6a_a33579472788489982e574ac1194cc47~mv2.jpg", "country": "India" },
  { "id": 47, "name": "Rbmi Group Of Institutions, Bareilly", "type": "College", "participants": 0, "logo": "https://static.wixstatic.com/media/fd1449_26ecb3b5394c418096c192b947b1c7c7~mv2.jpg", "country": "India" },
  { "id": 48, "name": "Scsss’s Sitabai Thite College Of Pharmacy, Shirur", "type": "College", "participants": 0, "logo": "https://static.wixstatic.com/media/f851ef_47e26024c5294faa9dddd319e613daa9~mv2.png", "country": "India" },
  { "id": 49, "name": "Shankarrao Ursal College Of Pharmaceutical Scieces And Research Centre, Kharadi, Pune", "type": "College", "participants": 0, "logo": "https://static.wixstatic.com/media/615311_ff40bc87f83244ef86098ff28886ee9a~mv2.png", "country": "India" },
  { "id": 50, "name": "Smef's Brick School Of Architecture", "type": "College", "participants": 0, "logo": "https://static.wixstatic.com/media/506f23_bdd633fd4e1f4091ad425fbbb714dfc3~mv2.png", "country": "India" },
  { "id": 51, "name": "St. Michael College Of Engineering And Technology", "type": "College", "participants": 0, "logo": "https://static.wixstatic.com/media/847be8_f0b1b7742af3473884c37675ae9410b0~mv2.jpg", "country": "India" },
  { "id": 52, "name": "Vaagdevi Colleges", "type": "College", "participants": 0, "logo": "https://static.wixstatic.com/media/61b310_a42d9848645348da9121446044ab6fca~mv2.jpeg", "country": "India" },
  { "id": 53, "name": "Vishnu Institute Of Pharmaceutical Education And Research", "type": "College", "participants": 0, "logo": "https://static.wixstatic.com/media/73d86f_39128d03449246fea64cc26c796638dd~mv2.png", "country": "India" },
  { "id": 54, "name": "Vivekananda Global University, Jaipur", "type": "College", "participants": 0, "logo": "https://static.wixstatic.com/media/d7681c_5082b8f3d6ea4bdb8d532828b845a8c0~mv2.png", "country": "India" },
  { "id": 55, "name": "Heartfulness International School", "type": "School", "participants": 658, "logo": "https://static.wixstatic.com/media/4c15da_178a1a82c9ce433d9c796de5dd397f51~mv2.jpg", "country": "India" },
  { "id": 56, "name": "Baroda High School Danteswar", "type": "School", "participants": 79, "logo": "", "country": "India" },
  { "id": 57, "name": "Modern Public School Shalimar Bagh Delhi", "type": "School", "participants": 72, "logo": "https://static.wixstatic.com/media/1871ea_376205cdb9154e42804c5c42892a7515~mv2.jpg", "country": "India" },
  { "id": 58, "name": "Sunbeam School Mughalsarai", "type": "School", "participants": 61, "logo": "", "country": "India" },
  { "id": 59, "name": "Army Public School Dhaula Kuan", "type": "School", "participants": 47, "logo": "", "country": "India" },
  { "id": 60, "name": "Lancer’s Convent Senior Secondary School", "type": "School", "participants": 46, "logo": "https://static.wixstatic.com/media/457c36_37ce11d6bc5640bd98d3dea788077d93~mv2.png", "country": "India" },
  { "id": 61, "name": "National Centre For Excellence", "type": "School", "participants": 36, "logo": "https://static.wixstatic.com/media/2a1337_4249357cd98f43dd8dc6639298ff0424~mv2.jpg", "country": "India" },
  { "id": 62, "name": "The Hyderabad Public School, Ramanthapur", "type": "School", "participants": 36, "logo": "https://static.wixstatic.com/media/344e0e_10a22a920e734e40ba26b212b9e7d14b~mv2.jpg", "country": "India" },
  { "id": 63, "name": "Saraswathi Vidya Niketan Public School", "type": "School", "participants": 31, "logo": "https://static.wixstatic.com/media/5e0ca9_32d3b0a617e94a31be449d33e6396119~mv2.jpeg", "country": "India" },
  { "id": 64, "name": "Lakshmipat Singhania Academy", "type": "School", "participants": 27, "logo": "https://static.wixstatic.com/media/9a8819_0a5853243f5548bba68542a19c2b0f60~mv2.jpg", "country": "India" },
  { "id": 65, "name": "St Edmunds School, Jawahar Nagar", "type": "School", "participants": 23, "logo": "https://static.wixstatic.com/media/284246_89debeed79d049c3bd7f4d97cb2d6dbe~mv2.png", "country": "India" },
  { "id": 66, "name": "Seth Anandram Jaipuria School Vasundhara", "type": "School", "participants": 21, "logo": "https://static.wixstatic.com/media/af511f_5947c497385841a785894c29c3b0f4a9~mv2.png", "country": "India" },
  { "id": 67, "name": "Sneh International School", "type": "School", "participants": 20, "logo": "https://static.wixstatic.com/media/80de9f_cea2589ba0b0448b8eb8e5a880a3d617~mv2.jpeg", "country": "India" },
  { "id": 68, "name": "Navrachana Vidyani Vidyalaya", "type": "School", "participants": 19, "logo": "https://static.wixstatic.com/media/91806b_80760ee03f8b4fa087206ac23766572c~mv2.png", "country": "India" },
  { "id": 69, "name": "Baroda High School Alkapuri", "type": "School", "participants": 18, "logo": "https://static.wixstatic.com/media/8c8e3e_eaad777ccbe2449bbc0c9dcc327623e8~mv2.jpg", "country": "India" },
  { "id": 70, "name": "Delhi Public School Bhilai", "type": "School", "participants": 17, "logo": "https://static.wixstatic.com/media/d19705_318b0e47548442b2ab2ac0cc3eb247e5~mv2.jpeg", "country": "India" },
  { "id": 71, "name": "Pmsapthss Kakkove", "type": "School", "participants": 17, "logo": "https://static.wixstatic.com/media/24f741_873a39f4c52b443b9feeb9a7580cd21d~mv2.png", "country": "India" },
  { "id": 72, "name": "Pm Shri Bokial High School", "type": "School", "participants": 15, "logo": "https://static.wixstatic.com/media/7951c5_c16174bdef6842b5b3db31d16092ee62~mv2.png", "country": "India" },
  { "id": 73, "name": "Vidya Nethrra Matric Hr Sec School", "type": "School", "participants": 14, "logo": "https://static.wixstatic.com/media/c85cd6_f7943f57f79b4428b40c04c4b702ee9e~mv2.png", "country": "India" },
  { "id": 74, "name": "M.m. Public School", "type": "School", "participants": 13, "logo": "https://static.wixstatic.com/media/dd40e2_5e4e7f5a081d420d87fad3c6018e2141~mv2.png", "country": "India" },
  { "id": 75, "name": "Baroda High School Ongc", "type": "School", "participants": 12, "logo": "https://static.wixstatic.com/media/8ff3fd_27aeadfae2f646f1b549c170b425c4ee~mv2.png", "country": "India" },
  { "id": 76, "name": "Dr. Kalmadi Shamarao High School", "type": "School", "participants": 11, "logo": "", "country": "India" },
  { "id": 77, "name": "Excel Public School", "type": "School", "participants": 9, "logo": "", "country": "India" },
  { "id": 78, "name": "Johnson Grammar School Icse", "type": "School", "participants": 9, "logo": "", "country": "India" },
  { "id": 79, "name": "Ravindra Vidya Niketan", "type": "School", "participants": 9, "logo": "https://static.wixstatic.com/media/f28585_defb0b3d51594d3d9bcc2aa23332d69a~mv2.png", "country": "India" },
  { "id": 80, "name": "Sanskriti School", "type": "School", "participants": 9, "logo": "https://static.wixstatic.com/media/a4e6f5_751210822bc149749582939c38cd887b~mv2.png", "country": "India" },
  { "id": 81, "name": "The Choice School", "type": "School", "participants": 8, "logo": "https://static.wixstatic.com/media/c69c02_bf0b06373e68447eaa3c3319fa7a48ef~mv2.jpg", "country": "India" },
  { "id": 82, "name": "Army Public School Hisar", "type": "School", "participants": 7, "logo": "https://static.wixstatic.com/media/eb2758_121ea8e8cf854e2eb015217e20acd6dd~mv2.jpg", "country": "India" },
  { "id": 83, "name": "Bhartiya Vidya Mandir Senior Secondary School", "type": "School", "participants": 7, "logo": "https://static.wixstatic.com/media/839eff_27c7b724af6c42a4bd222b63d26b01c3~mv2.jpeg", "country": "India" },
  { "id": 84, "name": "Vidhya Vikashni Matric Higher Secondary School", "type": "School", "participants": 7, "logo": "https://static.wixstatic.com/media/fedd0a_643500e58d0943d2a854b7e8a30cf97a~mv2.png", "country": "India" },
  { "id": 85, "name": "Paramanandapur Jagannath Institution", "type": "School", "participants": 5, "logo": "", "country": "India" },
  { "id": 86, "name": "Saraswati Vidya Mandir, Brajrajnagar", "type": "School", "participants": 5, "logo": "https://static.wixstatic.com/media/bfdcfd_06b7f600c226400b9094d8e2456bd755~mv2.jpg", "country": "India" },
  { "id": 87, "name": "Jnana Prabodhini Navanagar Vidyalaya", "type": "School", "participants": 4, "logo": "https://static.wixstatic.com/media/437991_08a5d6052862412a843b6a0239c430f5~mv2.png", "country": "India" },
  { "id": 88, "name": "Saraswati Vidya Mandir Hss Timarni", "type": "School", "participants": 4, "logo": "https://static.wixstatic.com/media/72d69b_f902265d23634581892fdc65f1213c29~mv2.png", "country": "India" },
  { "id": 89, "name": "St. Antony's Public School", "type": "School", "participants": 4, "logo": "https://static.wixstatic.com/media/c926f6_64ab5a3b20494c47ad4a2a5a6944bb7b~mv2.jpg", "country": "India" },
  { "id": 90, "name": "Apeejay School, Noida", "type": "School", "participants": 3, "logo": "https://static.wixstatic.com/media/7668df_d27b7e5d067f47f18d6a7a99b747f678~mv2.png", "country": "India" },
  { "id": 91, "name": "R C Patel Secondary School And Junior College Shirpur", "type": "School", "participants": 3, "logo": "https://static.wixstatic.com/media/42f50d_9bec9c85e39846a5bc8007d60ccb6f3e~mv2.png", "country": "India" },
  { "id": 92, "name": "Sri Ramana Academy Cbse Secondary School", "type": "School", "participants": 3, "logo": "", "country": "India" },
  { "id": 93, "name": "Afflatus Global School", "type": "School", "participants": 2, "logo": "https://static.wixstatic.com/media/aa3a0b_ea2743ab2c714179a5b9a5397cabfa0f~mv2.jpeg", "country": "India" },
  { "id": 94, "name": "Kokilaben Dhirubhai Ambani Reliance Foundation School", "type": "School", "participants": 2, "logo": "", "country": "India" },
  { "id": 95, "name": "Sir C R Reddy Public School", "type": "School", "participants": 2, "logo": "https://static.wixstatic.com/media/88012d_e010321db6644e3e9bed5df1cd13cdf8~mv2.png", "country": "India" },
  { "id": 96, "name": "Thamarai International School, Thanjavur", "type": "School", "participants": 2, "logo": "https://static.wixstatic.com/media/6018ae_ef12742c0c774452846f112e941272bc~mv2.gif", "country": "India" },
  { "id": 97, "name": "Adarsh Vidhya Mandir School Chhabra Baran", "type": "School", "participants": 1, "logo": "https://static.wixstatic.com/media/7d41da_6a37353b84a84f81a4000e9a8f52024c~mv2.jpeg", "country": "India" },
  { "id": 98, "name": "Amity International School Sec 6 Vasundhara", "type": "School", "participants": 1, "logo": "https://static.wixstatic.com/media/ae6a41_97e9ab2ef2034b82a9a2a2a38ea67ef2~mv2.jpg", "country": "India" },
  { "id": 99, "name": "D.a.v. Model School Durgapur", "type": "School", "participants": 1, "logo": "", "country": "India" },
  { "id": 100, "name": "Dav Centenary Public School Paschim Enclave", "type": "School", "participants": 1, "logo": "https://static.wixstatic.com/media/328a26_289fe76ec33e46c5af7b664f9acb0aea~mv2.jpg", "country": "India" },
  { "id": 101, "name": "Nagarjuna Model School", "type": "School", "participants": 1, "logo": "https://static.wixstatic.com/media/f55f5e_882350f2947f4df88a993cfacc254725~mv2.jpg", "country": "India" },
  { "id": 102, "name": "Pm Shri Kendriya Vidyalaya Rohtak", "type": "School", "participants": 1, "logo": "https://static.wixstatic.com/media/b27786_f5f30b76193740508a964f2d28c2baad~mv2.png", "country": "India" },
  { "id": 103, "name": "Rajagiri Public School", "type": "School", "participants": 1, "logo": "https://static.wixstatic.com/media/d328fd_e608c39a1a1848b1a5273f4d9d4b1925~mv2.jpg", "country": "India" },
  { "id": 104, "name": "Zilla Parishad High School Singapur", "type": "School", "participants": 1, "logo": "https://static.wixstatic.com/media/04ade5_d05cf6bbfa0d455ab717c77e3731ab97~mv2.jpg", "country": "India" },
  { "id": 105, "name": "Abc Public School", "type": "School", "participants": 0, "logo": "", "country": "India" },
  { "id": 106, "name": "Almighty Public School", "type": "School", "participants": 0, "logo": "", "country": "India" },
  { "id": 107, "name": "Amrita Vidyalayam Senior Secondary School", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/5309dc_ff0acc193e7c4f7ea8c4f85d4c7b8b17~mv2.jpg", "country": "India" },
  { "id": 108, "name": "Anand Niketan Shilaj", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/31a123_44999f30040f430bbf2f496b00bc7f2a~mv2.jpeg", "country": "India" },
  { "id": 109, "name": "Anjuman I Islam Saif Tyabji Girls High School", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/2a06b0_eee1d266447d415ca83e8a5dcc075c49~mv2.jpeg", "country": "India" },
  { "id": 110, "name": "Anjuman I Islam's Begum Sharifa Kalsekar Girls' English High School", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/31d243_c85a8ea9682947278f2f252e81c9acfd~mv2.png", "country": "India" },
  { "id": 111, "name": "Anjuman-I-Islam Allana English Secondary School Kurla", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/356419_fc8ec07af4cf4163b36a961f3029d245~mv2.jpg", "country": "India" },
  { "id": 112, "name": "Anjuman-I-Islam's Saif Tyabji Girls' High School", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/273fc9_6055d597b3e147df89a695a98b3bb5b2~mv2.png", "country": "India" },
  { "id": 113, "name": "Bal Vidya Mandir Sr Sec School", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/afd20c_eb8e7ac9c98741bd826fb4493e6544a5~mv2.jpg", "country": "India" },
  { "id": 114, "name": "Bhs Bagikhana, Vadodara, Gujarat", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/269dd3_630cf140abfb453db8b63708f13b046e~mv2.jpeg", "country": "India" },
  { "id": 115, "name": "Cochin Refineries School", "type": "School", "participants": 0, "logo": "", "country": "India" },
  { "id": 116, "name": "Dc Model Sr Sec School, Ferozepur Cantt", "type": "School", "participants": 0, "logo": "", "country": "India" },
  { "id": 117, "name": "Delhi Public School Nacharam", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/fccdce_445d59da51cf42b59606b0d0a2338d4b~mv2.png", "country": "India" },
  { "id": 118, "name": "Delhi Public School Sushant Lok Gurugram", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/1705fa_b4d90a76bba0469490dff9b2d786508a~mv2.jpg", "country": "India" },
  { "id": 119, "name": "Doon Convent School", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/78e9ea_644494037e1e4b269222ba3c31d001a9~mv2.png", "country": "India" },
  { "id": 120, "name": "Gajera International School, Utran", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/573f18_f60eef75f1404cb19e4ec8fb562f7062~mv2.png", "country": "India" },
  { "id": 121, "name": "Gita Niketan Awasiya Vidyalaya", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/8bdca9_cd6516f9f3e441e69eeb25aec08ec7cc~mv2.png", "country": "India" },
  { "id": 122, "name": "Government Chujachen Senior Secondary School", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/1e03dd_4b2a39b7e2ab40e4a3190e122d82529f~mv2.jpeg", "country": "India" },
  { "id": 123, "name": "Government Girls Higher Secondary School_Chatrapatti", "type": "School", "participants": 0, "logo": "", "country": "India" },
  { "id": 124, "name": "Government Higher Secondary School_Sekkarakudi", "type": "School", "participants": 0, "logo": "", "country": "India" },
  { "id": 125, "name": "Govt. Kuldip Nigam Higher Secondary School Narra", "type": "School", "participants": 0, "logo": "", "country": "India" },
  { "id": 126, "name": "Hermann Gmeiner School Bhimtal", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/167943_0685a3ac77734e67b638ccf9bcc993ae~mv2.jpg", "country": "India" },
  { "id": 127, "name": "Hiralal Ramniwas Inter College, Khalilabad ( Sant Kabir Nagar )", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/f7082b_c9be30a4ec634723ab711e38453c4699~mv2.jpg", "country": "India" },
  { "id": 128, "name": "Human Age Urdu High School", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/00579b_5cd5639a468949d8929fdafc78ecfc99~mv2.jpeg", "country": "India" },
  { "id": 129, "name": "Jss Shri Manjunatheshwara Central School", "type": "School", "participants": 0, "logo": "", "country": "India" },
  { "id": 130, "name": "K.r.mangalam World School Gurugram", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/5eb087_c1206044820f4c298ec8d4062fd008aa~mv2.jpg", "country": "India" },
  { "id": 131, "name": "Kerala Samajam Model School, Jamshedpur", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/bcf19a_182c9d780ec54916bd107c0dbaa57e33~mv2.png", "country": "India" },
  { "id": 132, "name": "Mohammedi Urdu High School Tarapur", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/4d1459_9fe4d9e922aa4d96b74b8735e1b8c576~mv2.png", "country": "India" },
  { "id": 133, "name": "Odm Public School", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/7a8bbc_1bc1facd8e434e0992fb2a29fbb28ff9~mv2.jpeg", "country": "India" },
  { "id": 134, "name": "Pm Shri Kendriya Vidyalay Tikamgarh", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/98c56d_a6a7eb6a0bb94d2089637b9109ae5a5c~mv2.png", "country": "India" },
  { "id": 135, "name": "Ramjas International School", "type": "School", "participants": 0, "logo": "", "country": "India" },
  { "id": 136, "name": "Sagar Public School ,gandhi Nagar, Bhopal", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/98a484_84e7077541aa4a3d87b44cf2a0bad615~mv2.webp", "country": "India" },
  { "id": 137, "name": "Sant Kabeer Academy", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/ea9ad3_91cb06ae66404e75846879c4e3aeab2f~mv2.jpg", "country": "India" },
  { "id": 138, "name": "Seth Anandram Jaipuria School Kanpur", "type": "School", "participants": 0, "logo": "", "country": "India" },
  { "id": 139, "name": "Shri Suraj Prasad Daga Saraswati Vidya Mandir Inter College, Kasganj", "type": "School", "participants": 0, "logo": "", "country": "India" },
  { "id": 140, "name": "Svmic Jyotirmath", "type": "School", "participants": 0, "logo": "", "country": "India" },
  { "id": 141, "name": "Swami Vivekanand Government Model School Sarthal ,chippabarod, Baran", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/7d41da_d167a7f680d74f90a608c00a6bbcc525~mv2.jpeg", "country": "India" },
  { "id": 142, "name": "The Gold Public School", "type": "School", "participants": 0, "logo": "", "country": "India" },
  { "id": 143, "name": "Tsirangtoe Central School", "type": "School", "participants": 0, "logo": "https://static.wixstatic.com/media/4005ff_3fde9e479e84451a9831c761f10e44c9~mv2.jpg", "country": "India" },
  { "id": 144, "name": "Vivekanand English High School", "type": "School", "participants": 0, "logo": "", "country": "India" },
  { "id": 145, "name": "Anant National University", "type": "University", "participants": 0, "logo": "", "country": "India" },
  { "id": 146, "name": "Anna University", "type": "University", "participants": 0, "logo": "", "country": "India" },
  { "id": 147, "name": "Anurag University", "type": "University", "participants": 0, "logo": "https://static.wixstatic.com/media/2a70bd_5f24ae19f66145608f476f068efdf26d~mv2.jpg", "country": "India" },
  { "id": 148, "name": "Assam Agricultural University, Jorhat", "type": "University", "participants": 0, "logo": "", "country": "India" },
  { "id": 149, "name": "Avantika University", "type": "University", "participants": 0, "logo": "https://static.wixstatic.com/media/8bec5d_760e1c888e704a468bff9f841273f4b7~mv2.jpg", "country": "India" },
  { "id": 150, "name": "Central University Of Haryana", "type": "University", "participants": 0, "logo": "https://static.wixstatic.com/media/4b3777_f0361a686b3e4dfc8ca2de044f0de76b~mv2.png", "country": "India" },
  { "id": 151, "name": "Dr. D Y Patil Vidyapeeth, Pimpri Pune", "type": "University", "participants": 0, "logo": "", "country": "India" },
  { "id": 152, "name": "Gautam Buddha University", "type": "University", "participants": 0, "logo": "", "country": "India" },
  { "id": 153, "name": "Indian Institute Of Technology (Bhu)", "type": "University", "participants": 0, "logo": "https://static.wixstatic.com/media/8deb57_8003072642cb4aaf8d14bddaa308f73c~mv2.png", "country": "India" },
  { "id": 154, "name": "Lovely Professional University", "type": "University", "participants": 0, "logo": "https://static.wixstatic.com/media/3961c9_d1d76b3a9daf49239f10363c04dc4a48~mv2.png", "country": "India" },
  { "id": 155, "name": "Mats University", "type": "University", "participants": 0, "logo": "https://static.wixstatic.com/media/8f7d85_ebf78bcb623b48e7b6167b3aa59c0597~mv2.png", "country": "India" },
  { "id": 156, "name": "Mit Acedemy Of Engineering", "type": "University", "participants": 0, "logo": "https://static.wixstatic.com/media/fad2ab_1ab6730006354d8cab6b61eb51085f19~mv2.jpg", "country": "India" },
  { "id": 157, "name": "National Institute Of Food Technology Entrepreneurship And Management - Thanjavur", "type": "University", "participants": 0, "logo": "", "country": "India" },
  { "id": 158, "name": "National Institute Of Technology, Rourkela", "type": "University", "participants": 0, "logo": "https://static.wixstatic.com/media/b270ba_bd4cb8e4663e48a1af5f818ce3a88e5c~mv2.png", "country": "India" },
  { "id": 159, "name": "National University Of Study And Research In Law", "type": "University", "participants": 0, "logo": "https://static.wixstatic.com/media/08d50f_0aa00468f11b43038bee282a3c6d9609~mv2.jpeg", "country": "India" },
  { "id": 160, "name": "Rnb Global University, Bikaner", "type": "University", "participants": 0, "logo": "", "country": "India" },
  { "id": 161, "name": "Sgt University", "type": "University", "participants": 0, "logo": "https://static.wixstatic.com/media/4ac490_df12e84005d94916887274ee818fdf14~mv2.png", "country": "India" },
  { "id": 162, "name": "Sharda University, Greater Noida", "type": "University", "participants": 0, "logo": "https://static.wixstatic.com/media/6902e2_ae89ab8bf94347f0b5787182f660150a~mv2.png", "country": "India" },
  { "id": 163, "name": "Shree Guru Gobind Singh Tricentenary University", "type": "University", "participants": 0, "logo": "", "country": "India" },
  { "id": 164, "name": "Veer Bahadur Singh Purvanchal University", "type": "University", "participants": 0, "logo": "", "country": "India" },
  { "id": 165, "name": "Vg Vaze College Of Arts , Science And Commerce", "type": "University", "participants": 0, "logo": "", "country": "India" }
 
  

];

const countries = [
  'All',
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
  'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
  'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
  'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Brazzaville)', 'Congo (Kinshasa)',
  'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador',
  'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France',
  'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau',
  'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
  'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait',
  'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg',
  'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico',
  'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru',
  'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman',
  'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
  'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
  'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia',
  'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria',
  'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan',
  'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
  'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
];

const types = ['All', 'School', 'College', 'University'];

function EducationPartners() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter and sort logic
  const filteredPartners = educationPartners
    .filter(partner => (selectedType === 'All' || partner.type === selectedType))
    .filter(partner => (selectedCountry === 'All' || partner.country === selectedCountry))
    .filter(partner => partner.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => b.participants - a.participants);

  return (
    <div className="App">
      <header className="main-heading">
        <h1>Education Partners</h1>
        <p>Explore our network of schools, colleges, and universities participating in our programs.</p>
        {/* Search bar below subheading */}
        <div className="edu-search-bar-wrapper">
          <input
            className="edu-search-bar"
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      {/* Sticky horizontal filter bar at the top of the card section, with label */}
      <div className="edu-filter-bar-sticky" style={{top: 0}}>
        <div className="edu-filter-row-horizontal">
          <div className="edu-filter-col">
            <div className="edu-filter-label">Select Country</div>
            <div className="edu-country-filter-row">
              <select
                className="edu-country-select"
                value={selectedCountry}
                onChange={e => setSelectedCountry(e.target.value)}
              >
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="edu-filter-col">
            <div className="edu-filter-label">Select Type</div>
            <div className="edu-filter-bar">
              {types.map(type => (
                <button
                  key={type}
                  className={`domain-btn${selectedType === type ? ' selected' : ''}`}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="incubation-section">
        <div className="incubation-content edu-centered-content">
          <div className="incubation-main" style={{width: '100%'}}>
            <div className="incubation-grid edu-grid-4">
              {filteredPartners.length === 0 ? (
                <div style={{ color: '#f5c13b', fontSize: 18, marginTop: 32 }}>No education partners found.</div>
              ) : (
                filteredPartners.map(partner => (
                  <div className="incubation-center" key={partner.id}>
                    <div className="incubation-card-content">
                      {partner.logo ? (
                        <img className="incubation-logo" src={partner.logo} alt={partner.name} />
                      ) : (
                        <div className="incubation-logo no-logo">No Logo</div>
                      )}
                      <div className="incubation-center-name">{partner.name}</div>
                      <div className="incubation-center-country">{partner.type}</div>
                      <button className="participants-btn">
                        Participants: {partner.participants}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer (same as App) */}
      <footer className="footer">
        <div className="footer-left">
          <img src={logo} alt="Footer Logo" className="footer-logo" />
          <p>Startup Nation India, Balewadi Highstreet, Pune. 411045</p>
          <p>
            <span className="contact-label">Contact Us:</span>{' '}
            <a href="mailto:Relationship.Officer@Startupnationindia.Com" className="contact-email">
              Relationship.Officer@Startupnationindia.Com
            </a>
          </p>
        </div>
        <div className="footer-right">
          <a href="https://twitter.com" className="footer-icon with-bg" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" width="24" height="24" fill="black">
              <path d="M682.3 530.3 1145.6 0h-259.5L575.5 397.7 284.6 0H0l491.3 699.9L0 1227h259.5l347.2-424.3L915.4 1227H1200L682.3 530.3Z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/startup-nation-hub/" className="footer-icon with-bg" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
          </a>
          <a href="https://instagram.com" className="footer-icon with-bg" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default EducationPartners; 