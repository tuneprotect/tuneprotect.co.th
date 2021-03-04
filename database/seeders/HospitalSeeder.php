<?php

namespace Database\Seeders;

use App\Enum\ProjectEnum;
use App\Models\Partner;
use App\Models\PartnerLocale;
use Illuminate\Database\Seeder;

class HospitalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $arr[] = [
            'tel' => '02 310 3000', 'cat_id' => '90',
            'website' => 'http://www.bangkokhospital.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/4kBY1g7KJ5cCzTUK6',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพ', 'address' => '2 ซอยศูนย์วิจัย 7 ถ.เพชรบุรีตัดใหม่ ห้วยขวาง กรุงเทพมหานคร 10320'],
            'en' => ['title' => 'BANGKOK GENERAL HOSPITAL', 'address' => '2 Soi Soonvijai7 New Petchburi Rd., Huaykwang Bangkok 10320'],
        ];
        $arr[] = [
            'tel' => '0-2625-9000', 'cat_id' => '90',
            'website' => 'http://www.bangkokchristianhospital.org',
            'province' => '00', 'location' => 'https://goo.gl/maps/evxHFcv2io3LidnNA',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพคริสเตียน', 'address' => '124 ถ.สีลม บางรัก กรุงเทพมหานคร 10500'],
            'en' => ['title' => 'BANGKOK CHRISTIAN HOSPITAL', 'address' => '124 Silom Rd.,  Bangrak Bangkok 10500'],
        ];
        $arr[] = [
            'tel' => '0-2769-2000', 'cat_id' => '90',
            'website' => 'http://www.kluaynamthai.com',
            'province' => '00', 'location' => 'https://g.page/KluaynamthaiHospital?share',
            'th' => ['title' => 'โรงพยาบาลกล้วยน้ำไท 1', 'address' => '80 ซ.โรงพยาบาล 2  ถ.พระราม 4 คลองเตย กรุงเทพมหานคร 10110'],
            'en' => ['title' => 'KLUAYNAMTHAI 1 HOSPITAL', 'address' => '80 Soi Rubia  Rama IV Road Khlong Toei Bangkok 10110'],
        ];
        $arr[] = [
            'tel' => '02 399 4259', 'cat_id' => '90',
            'website' => 'http://www.kluaynamthai.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/1jnLZLcQRznkPsUB6',
            'th' => ['title' => 'โรงพยาบาลกล้วยน้ำไท 2', 'address' => '27 ซ.สุขุมวิท 68 - บางนา กรุงเทพมหานคร 10260'],
            'en' => ['title' => 'KLUAYNAMTHAI2 HOSPITAL', 'address' => '27 Soi Sukhumvit 68 - Bang-na Bangkok 10260'],
        ];
        $arr[] = [
            'tel' => '02 339 0000', 'cat_id' => '90',
            'website' => 'http://www.kasemrad.co.th',
            'province' => '00', 'location' => 'https://goo.gl/maps/u9DNGPnV4cwZPhSg9',
            'th' => ['title' => 'โรงพยาบาลเกษมราษฎร์ รามคำแหง', 'address' => '99/9 ถ.รามคำแหง สะพานสูง กรุงเทพมหานคร 10240'],
            'en' => ['title' => 'KASEMRAD RAMKHAMHAENG HOSPITAL', 'address' => '99/9 Ramkhamhaeng Rd Saphan Sung Bangkok 10240'],
        ];
        $arr[] = [
            'tel' => '02 319 2101', 'cat_id' => '91',
            'website' => 'www.klongtun-hospital.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/G9VWrfcAGVNMTxsR7',
            'th' => ['title' => 'โรงพยาบาลคลองตัน', 'address' => '3284 ถ.เพชรบุรีตัดใหม่ ห้วยขวาง กรุงเทพมหานคร 10320'],
            'en' => ['title' => 'KLONGTUN HOSPITAL', 'address' => '3284 New Petchburi Rd., Huaykwang Bangkok 10320'],
        ];
        $arr[] = [
            'tel' => '02 185 1444', 'cat_id' => '90',
            'website' => 'http://www.camillianhospital.org',
            'province' => '00', 'location' => 'https://goo.gl/maps/R8PNSgu34hzbXX4L7',
            'th' => ['title' => 'โรงพยาบาลคามิลเลียน', 'address' => '423 ถ.สุขุมวิท 55 (ซอยทองหล่อ) วัฒนา กรุงเทพมหานคร 10110'],
            'en' => ['title' => 'CAMILLIAN HOSPITAL', 'address' => '423 Soi Sukhumvit 55 (Soi Thong-Lor) Wattana Bangkok 10110'],
        ];
        $arr[] = [
            'tel' => '02 207 6000', 'cat_id' => '91',
            'website' => 'www.policehospital.org',
            'province' => '00', 'location' => 'https://goo.gl/maps/EKGj4BwjZDE4RjpPA',
            'th' => ['title' => 'โรงพยาบาลตำรวจ', 'address' => '492/1 ถ.พระราม 1 ปทุมวัน กรุงเทพมหานคร 10330'],
            'en' => ['title' => 'POLICE GENERAL HOSPITAL', 'address' => '492/1 Rama I Rd Pathumwan Bangkok 10330'],
        ];
        $arr[] = [
            'tel' => '02 487 2000', 'cat_id' => '90',
            'website' => 'http://www.thonburihospital.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/NzjgmyMcPYB3est78',
            'th' => ['title' => 'โรงพยาบาลธนบุรี 1', 'address' => '34/1 ถ.อิสรภาพ ซอย 44 บางกอกน้อย กรุงเทพมหานคร 10700'],
            'en' => ['title' => 'THONBURI 1 HOSPITAL', 'address' => '34/1 Soi Itsaraphap 44 Bangkok Noi Bangkok 10700'],
        ];
        $arr[] = [
            'tel' => '02 487 2100', 'cat_id' => '90',
            'website' => 'http://www.thonburi2.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/wXgCXkTouSavHRjm7',
            'th' => ['title' => 'โรงพยาบาลธนบุรี 2', 'address' => 'สาขา 1 เลขที่ 43/4 ถ.บรมราชชนนี ทวีวัฒนา กรุงเทพมหานคร 10170'],
            'en' => ['title' => 'THONBURI 2 HOSPITAL', 'address' => 'Branch 1 No. 43/4 Borommaratchachonnani Rd Thawi Watthana Bangkok 10170'],
        ];
        $arr[] = [
            'tel' => '02 450 9999', 'cat_id' => '90',
            'website' => 'http://www.nakornthon.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/pB2YSe8aAT9jL1Jb6',
            'th' => ['title' => 'โรงพยาบาลนครธน', 'address' => '1 พระรามที่2ซอย56 ถ.พระรามที่ 2 บางขุนเทียน กรุงเทพมหานคร 10150'],
            'en' => ['title' => 'NAKORNTHON HOSPITAL', 'address' => '1 Rama 2 Soi 56 Rama 2 Rd Bang Khun Thian Bangkok 10150'],
        ];
        $arr[] = [
            'tel' => '02 918 5080', 'cat_id' => '90',
            'website' => 'http://www.navamin9.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/tJ5ZKS2SyJMaSWJf8',
            'th' => ['title' => 'โรงพยาบาลนวมินทร์ ', 'address' => '47/94 ซ.โรงพยาบาลนวมินทร์  ถ.สีหบุรานุกิจ มีนบุรี กรุงเทพมหานคร 10510'],
            'en' => ['title' => 'NAVAMINTHRA HOSPITAL', 'address' => '47/94 Soi Minburi Square  Sihamburajit Road Minburi Bangkok 10510'],
        ];
        $arr[] = [
            'tel' => '02 518 1818', 'cat_id' => '90',
            'website' => 'http://www.navamin9.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/51w1UdUqx5mmty4V9',
            'th' => ['title' => 'โรงพยาบาลนวมินทร์ 9', 'address' => '599  หมู่ 13 ถ.สีหบุรานุกิจ มีนบุรี กรุงเทพมหานคร 10510'],
            'en' => ['title' => 'NAVAMINTHRA 9 HOSPITAL', 'address' => '599  Moo 13 Sihamburajit Road Minburi Bangkok 10510'],
        ];
        $arr[] = [
            'tel' => '02 746 8630', 'cat_id' => '90',
            'website' => '-',
            'province' => '00', 'location' => 'https://goo.gl/maps/hrQ2ukHF2DDUZ3kG6',
            'th' => ['title' => 'โรงพยาบาลบางนา 1', 'address' => '1302  หมู่ 11 ถ.บางนา-ตราด บางนา กรุงเทพมหานคร 10260'],
            'en' => ['title' => 'BANGNA 1 HOSPITAL', 'address' => '1302 Moo 11 Bang Na-Trat Rd Bang-na Bangkok 10260'],
        ];
        $arr[] = [
            'tel' => '02 109 1111', 'cat_id' => '90',
            'website' => 'http://www.bangpakokhospital.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/tZHr73zWc6EJbTC38',
            'th' => ['title' => 'โรงพยาบาลบางปะกอก 1', 'address' => '2   ซ.สุขสวัสดิ์ 25/1 ถ. สุขสวัสดิ์ ราษฎร์บูรณะ กรุงเทพมหานคร 10140'],
            'en' => ['title' => 'BANGPAKOK 1 HOSPITAL', 'address' => '2  Suk Sawat 25/1 Alley Suk Sawat Rd Rat Burana Bangkok 10140'],
        ];
        $arr[] = [
            'tel' => '02 109 8111', 'cat_id' => '90',
            'website' => 'http://www.bangpakokhospital.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/SiatHbTMrAE7kGhg8',
            'th' => ['title' => 'โรงพยาบาลบางปะกอก 8', 'address' => '115/524 หมู่ 4  ถ.เอกชัย บางบอน กรุงเทพมหานคร 10110'],
            'en' => ['title' => 'BANGPAKOK 8', 'address' => '115/524 Moo 4  Ekkachai Rd Bang Bon Bangkok 10110'],
        ];
        $arr[] = [
            'tel' => '02 109 9111', 'cat_id' => '90',
            'website' => 'http://www.bangpakokhospital.com',
            'province' => '00', 'location' => 'https://g.page/BPK9HOSPITAL?share',
            'th' => ['title' => 'โรงพยาบาลบางปะกอก 9 อินเตอร์เนชั่นแนล', 'address' => '362 ถ.พระราม 2 จอมทอง กรุงเทพมหานคร 10150'],
            'en' => ['title' => 'BANGKOK 9 INTERNATIONAL HOSPITAL', 'address' => '362 Rama 2 Rd Chom Thong Bangkok 10150'],
        ];
        $arr[] = [
            'tel' => '02 587 0144', 'cat_id' => '90',
            'website' => 'http://www.bangpo-hospital.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/qZ5LoLVGdVXGMLNE6',
            'th' => ['title' => 'โรงพยาบาลบางโพ', 'address' => '95 ถ.ประชาราษฎร์ 2 บางซื่อ กรุงเทพมหานคร 10800'],
            'en' => ['title' => 'BANGPO HOSPITAL', 'address' => '95 Pracha Rat Sai 2 Rd Bang Sue Bangkok 10800'],
        ];
        $arr[] = [
            'tel' => ' 02 066 8888', 'cat_id' => '90',
            'website' => 'http://www.bumrungrad.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/BwpigCjFryb9mmn88',
            'th' => ['title' => 'โรงพยาบาลบำรุงราษฎร์', 'address' => '33 ซ.สุขุมวิท (นานาเหนือ)  ถ.สุขุมวิท วัฒนา กรุงเทพมหานคร 10110'],
            'en' => ['title' => 'BUMRUNGRAD HOSPITAL', 'address' => '33 Soi Sukhumvit 3(Nana Nuea)  Sukhumvit Rd Wattana Bangkok 10110'],
        ];
        $arr[] = [
            'tel' => '02 022 0700', 'cat_id' => '90',
            'website' => 'http://www.bnhhospital.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/aKzi4hkEtKbXHxZ37',
            'th' => ['title' => 'โรงพยาบาลบีเอ็นเอช', 'address' => '9/1 ถ.คอนแวนต์ บางรัก กรุงเทพมหานคร 10500'],
            'en' => ['title' => 'BNH HOSPITAL', 'address' => '9/1 Convent Rd Bang Rak Bangkok 10500'],
        ];
        $arr[] = [
            'tel' => '02 994 8200', 'cat_id' => '90',
            'website' => 'http://www.bcaremedicalcenter.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/DGYaCii4To14zCwP9',
            'th' => ['title' => 'โรงพยาบาลบีแคร์เมดิคอลเซ็นเตอร์', 'address' => '29 หมู่ 6 ถ.พหลโยธิน สายไหม กรุงเทพมหานคร 10210'],
            'en' => ['title' => 'B.CARE MEDICAL CENTER HOSPITAL', 'address' => '29 Moo 6 Phahonyothin Alley Sai Mai Bangkok 10210'],
        ];
        $arr[] = [
            'tel' => '02 427 9966', 'cat_id' => '90',
            'website' => 'www.prachapat.com',
            'province' => '00', 'location' => 'https://g.page/prachapat-hospital?share',
            'th' => ['title' => 'โรงพยาบาลประชาพัฒน์', 'address' => '146 หมู่ 4 ถ.สุขสวัสดิ์ ราษฎร์บูรณะ กรุงเทพมหานคร 10140'],
            'en' => ['title' => 'PRACHAPAT HOSPITAL', 'address' => '146 Moo 4 Suk Sawat Rd Rat Burana Bangkok 10140'],
        ];
        $arr[] = [
            'tel' => '02 129 5555', 'cat_id' => '90',
            'website' => 'http://www.piyavate.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/iQjskwotdmEf1Umt8',
            'th' => ['title' => 'โรงพยาบาลปิยะเวท', 'address' => '988 อาคารปิยะเวท ถ.ริมคลองสามเสน ห้วยขวาง กรุงเทพมหานคร 10320'],
            'en' => ['title' => 'PIYAVATE  HOSPITAL', 'address' => '988 Piyavate Building Rim Khlong Sam Sen Road Huaykwang Bangkok 10320'],
        ];
        $arr[] = [
            'tel' => '02 201 4600', 'cat_id' => '90',
            'website' => 'http://www.phyathai.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/8rCfaVokcUK96DoS6',
            'th' => ['title' => 'โรงพยาบาลพญาไท 1', 'address' => '364/1 ถ.ศรีอยุธยา ราชเทวี กรุงเทพมหานคร 10400'],
            'en' => ['title' => 'PHYATHAI 1 HOSPITAL', 'address' => '364/1 Si Ayutthaya Rd Ratchathewi Bangkok 10400'],
        ];
        $arr[] = [
            'tel' => '02 271 6700', 'cat_id' => '90',
            'website' => 'http://www.phyathai.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/bVyt5NYP8HBb6Esh8',
            'th' => ['title' => 'โรงพยาบาลพญาไท 2', 'address' => '943-943/1 ถ.พหลโยธิน พญาไท กรุงเทพมหานคร 10400'],
            'en' => ['title' => 'PHYATHAI 2 HOSPITAL', 'address' => '943-943/1  Phahonyothin Alley Phaya Thai Bangkok 10400'],
        ];
        $arr[] = [
            'tel' => '02 467 1111', 'cat_id' => '90',
            'website' => 'http://www.phyathai.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/oRB9ksh1kPPxU168A',
            'th' => ['title' => 'โรงพยาบาลพญาไท 3', 'address' => '111 ถ.เพชรเกษม ภาษีเจริญ กรุงเทพมหานคร 10160'],
            'en' => ['title' => 'PHYATHAI 3 HOSPITAL', 'address' => '111 Phet Kasem Rd Phasi Charoen Bangkok 10160'],
        ];
        $arr[] = [
            'tel' => ' 02 944 7111', 'cat_id' => '90',
            'website' => 'https://www.phyathai.com/branch/PYTN/',
            'province' => '00', 'location' => 'https://g.page/PhyathaiNawamin?share',
            'th' => ['title' => 'โรงพยาบาลพญาไท นวมินทร์', 'address' => '44/505 หมู่ 10 ถ.นวมินทร์ บึงกุ่ม กรุงเทพมหานคร 10240'],
            'en' => ['title' => 'PHAYATHAI NAWAMIN HOSPITAL', 'address' => '44/505 Moo 10 Nawamin Rd Bueng Kum Bangkok 10240'],
        ];
        $arr[] = [
            'tel' => '02 451 4920', 'cat_id' => '90',
            'website' => 'http://praram2hospital.com/',
            'province' => '00', 'location' => 'https://goo.gl/maps/dSkoxqYYf23fwCcf8',
            'th' => ['title' => 'โรงพยาบาลพระราม 2', 'address' => '280 พระราม 2 บางขุนเทียน กรุงเทพมหานคร 10150'],
            'en' => ['title' => 'PRARAM2 HOSPITAL', 'address' => '280 Rama 2 Rd Bang Khun Thian Bangkok 10150'],
        ];
        $arr[] = [
            'tel' => '02 202 9999', 'cat_id' => '90',
            'website' => 'http://www.praram9.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/2BramqC4oFKNBiau7',
            'th' => ['title' => 'โรงพยาบาลพระรามเก้า', 'address' => '99 ซ.แสงแจ่ม   ถ. พระราม 9 ห้วยขวาง กรุงเทพมหานคร 10320'],
            'en' => ['title' => 'PRARAM 9 HOSPITAL', 'address' => '99 Rama 9 Rd Huaykwang Bangkok 10320'],
        ];
        $arr[] = [
            'tel' => '02 282 1100', 'cat_id' => '90',
            'website' => 'http://www.mission-hospital.org',
            'province' => '00', 'location' => 'https://goo.gl/maps/HG6yXSRvGvoWffXs8',
            'th' => ['title' => 'โรงพยาบาลมิชชั่น', 'address' => '430 ถ.พิษณุโลก ดุสิต กรุงเทพมหานคร 10300'],
            'en' => ['title' => 'MISSION HOSPITAL', 'address' => '430 Phitsanulok Rd Dusit Bangkok 10300'],
        ];
        $arr[] = [
            'tel' => '02 879 0300', 'cat_id' => '90',
            'website' => 'https://th.yanhee.net/',
            'province' => '00', 'location' => 'https://goo.gl/maps/P2dTjkD7SrpzsVHx8',
            'th' => ['title' => 'โรงพยาบาลยันฮี', 'address' => '454 ถ.จรัญสนิทวงศ์ บางพลัด กรุงเทพมหานคร 10700'],
            'en' => ['title' => 'YANHEE INTERNATIONAL HOSPITAL', 'address' => '454 Charan Sanitwong Rd Bang Phlat Bangkok 10700'],
        ];
        $arr[] = [
            'tel' => '02 743 9999', 'cat_id' => '90',
            'website' => 'http://www.ram-hosp.co.th',
            'province' => '00', 'location' => 'https://g.page/ramhospital?share',
            'th' => ['title' => 'โรงพยาบาลรามคำแหง', 'address' => '436 ถ.รามคำแหง บางกะปิ กรุงเทพมหานคร 10240'],
            'en' => ['title' => 'RAMKHAMHAENG HOSPITAL', 'address' => '436 Ramkhamhaeng Rd Bang Kapi Bangkok 10240'],
        ];
        $arr[] = [
            'tel' => '02 872 1001', 'cat_id' => '90',
            'website' => 'http://www.rajburana.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/v9aQU9TbiwppTYst6',
            'th' => ['title' => 'โรงพยาบาลราษฎร์บูรณะ', 'address' => '377 ถ.ราษฏร์พัฒนา (สุขสวัสดิ์ 27) ราษฎร์บูรณะ กรุงเทพมหานคร 10140'],
            'en' => ['title' => 'RAJBURANA HOSPITAL', 'address' => '377 Suk Sawat 27 Rd Rat Burana Bangkok 10140'],
        ];
        $arr[] = [
            'tel' => ' 02 530 2556', 'cat_id' => '90',
            'website' => 'http://www.ladpraohospital.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/x5VciSV8Ai2Efj9v7',
            'th' => ['title' => 'โรงพยาบาลลาดพร้าว', 'address' => '2699 ถ.ลาดพร้าว วังทองหลาง กรุงเทพมหานคร 10230'],
            'en' => ['title' => 'LADPRAO HOSPITAL', 'address' => '2699  Lat Phrao Rd Wang Thonglang Bangkok 10230'],
        ];
        $arr[] = [
            'tel' => '02 265 7777', 'cat_id' => '90',
            'website' => 'http://www.vichaiyut.co.th',
            'province' => '00', 'location' => 'https://goo.gl/maps/ua4QRSkQr6s1jXyv5',
            'th' => ['title' => 'โรงพยาบาลวิชัยยุทธ', 'address' => '53 เศรษฐศิริ พญาไท กรุงเทพมหานคร 10400'],
            'en' => ['title' => 'VICHAIYUT HOSPITAL', 'address' => '53 Setsiri Phaya Thai Bangkok 10400'],
        ];
        $arr[] = [
            'tel' => '02 412 0055', 'cat_id' => '90',
            'website' => 'https://www.vichaivej.com/yaekfaichai',
            'province' => '00', 'location' => 'https://goo.gl/maps/1Bcpzp1erizWme8r9',
            'th' => ['title' => 'โรงพยาบาลวิชัยเวช แยกไฟฉาย', 'address' => '240/2-7 ถ.จรัญสนิทวงศ์ บางกอกน้อย กรุงเทพมหานคร 10700'],
            'en' => ['title' => 'VICHAIVEJ YAEKFAICHAI HOSPITAL', 'address' => '240/2-7 Charan Sanitwong Rd Bangkok Noi Bangkok 10700'],
        ];
        $arr[] = [
            'tel' => '02 441 6999', 'cat_id' => '90',
            'website' => 'https://www.vichaivej.com/nongkhaem',
            'province' => '00', 'location' => 'https://g.page/vichaivej-nongkhaem?share',
            'th' => ['title' => 'โรงพยาบาลวิชัยเวชอินเตอร์เนชั่นแนลหนองแขม (ศรีวิชัย2)', 'address' => '15/38-43 หมู่ 7 ถ.เพชรเกษม หนองแขม กรุงเทพมหานคร 10160'],
            'en' => ['title' => 'VICHAIVEJ INTERNATIONAL HOSPITAL NONGKHAM', 'address' => '15/38-43 Moo 7 Phet Kasem Rd Nong Khaem Bangkok 10160'],
        ];
        $arr[] = [
            'tel' => '0-2722-2500', 'cat_id' => '90',
            'website' => 'http://www.vibharam.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/3AKANJ9oc7xA3RbK7',
            'th' => ['title' => 'โรงพยาบาลวิภาราม', 'address' => '2677 ถ.พัฒนาการ สวนหลวง กรุงเทพมหานคร 10250'],
            'en' => ['title' => 'VIBHARAM HOSPITAL', 'address' => '2677 Phatthanakan Rd Suan Luang Bangkok 10250'],
        ];
        $arr[] = [
            'tel' => '2 561 1111', 'cat_id' => '90',
            'website' => 'http://www.vibhavadi.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/DW76i5iTsBZtQNsx9',
            'th' => ['title' => 'โรงพยาบาลวิภาวดี', 'address' => '51/3 ถ.งามวงศ์วาน จตุจักร กรุงเทพมหานคร 10900'],
            'en' => ['title' => 'VIBHAVADI 1 HOSPITAL', 'address' => '51/3 Ngamwongwan Rd Chatuchak Bangkok 10900'],
        ];
        $arr[] = [
            'tel' => '02 366 9900', 'cat_id' => '90',
            'website' => 'http://www.sikarin.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/RCS2wQtaum9wCASz6',
            'th' => ['title' => 'โรงพยาบาลศิครินทร์', 'address' => '4/29 หมู่ 10 ถ.ศรีนครินทร์ บางนา กรุงเทพมหานคร 10260'],
            'en' => ['title' => 'SIKARIN HOSPITAL', 'address' => '4/29 Moo 10 Srinakarin Road Bang-na Bangkok 10260'],
        ];
        $arr[] = [
            'tel' => '02 419 1474', 'cat_id' => '91',
            'website' => 'www.si.mahidol.ac.th/th',
            'province' => '00', 'location' => 'https://goo.gl/maps/n1EkP4xxfKdqNr1o8',
            'th' => ['title' => 'โรงพยาบาลศิริราชพยาบาล', 'address' => '2 ถ.พรานนก บางกอกน้อย กรุงเทพมหานคร 10700'],
            'en' => ['title' => 'SIRIRAJ HOSPITAL', 'address' => '2 Wanglang Road Bangkok Noi Bangkok 10700'],
        ];
        $arr[] = [
            'tel' => '02 438 9000', 'cat_id' => '90',
            'website' => 'https://www.samitivejhospitals.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/RmBFjUs2uTfg2yRG7',
            'th' => ['title' => 'โรงพยาบาลสมิติเวชธนบุรี', 'address' => '337 ถ.สมเด็จพระเจ้าตากสิน ธนบุรี กรุงเทพมหานคร 10600'],
            'en' => ['title' => 'SAMITIVEJ THONBURI HOSPITAL', 'address' => '337 Somdet Phra Chao Tak Sin Rd Thon Buri Bangkok 10600'],
        ];
        $arr[] = [
            'tel' => '02 022 2222', 'cat_id' => '90',
            'website' => 'https://www.samitivejhospitals.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/pucmp5mNK7t4G7Vj7',
            'th' => ['title' => 'โรงพยาบาลสมิติเวชศรีนครินทร์', 'address' => '133 - สวนหลวง กรุงเทพมหานคร 10110'],
            'en' => ['title' => 'SAMITIVEJ SRINAKARIN HOSPITAL', 'address' => '133 - Suan Luang Bangkok 10110'],
        ];
        $arr[] = [
            'tel' => '02 022 2222', 'cat_id' => '90',
            'website' => 'https://www.samitivejhospitals.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/dkDNscLdeqxAPv4aA',
            'th' => ['title' => 'โรงพยาบาลสมิติเวชสุขุมวิท', 'address' => '133 ซอยสุขุมวิท 49 - วัฒนา กรุงเทพมหานคร 10110'],
            'en' => ['title' => 'SAMITIVEJ HOSPITAL', 'address' => '133 Soi Sukhumvit 49 - Wattana Bangkok 10110'],
        ];
        $arr[] = [
            'tel' => '02 118 7888', 'cat_id' => '90',
            'website' => 'http://www.bangkokhospital.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/wF9R4rAjhpNWHS3L9',
            'th' => ['title' => 'โรงพยาบาลสมิติเวชไชน่าทาวน์', 'address' => '624 ถ.เยาวราช สัมพันธวงศ์ กรุงเทพมหานคร 10100'],
            'en' => ['title' => 'SAMITIVEJ CHINATOWN', 'address' => '624 Yaowarat Rd Samphanthawong Bangkok 10100'],
        ];
        $arr[] = [
            'tel' => '02 991 8999', 'cat_id' => '90',
            'website' => 'http://www.saimai.co.th',
            'province' => '00', 'location' => 'https://goo.gl/maps/ieXRDzeYSxvMTxTY6',
            'th' => ['title' => 'โรงพยาบาลสายไหม', 'address' => '91 หมู่ 1 ถ.เฉลิมพงษ์ สายไหม กรุงเทพมหานคร 10220'],
            'en' => ['title' => 'SAIMAI HOSPITAL', 'address' => '91 Moo 1 Chaloem Phong Rd Sai Mai Bangkok 10220'],
        ];
        $arr[] = [
            'tel' => '02 793 5000', 'cat_id' => '90',
            'website' => 'http://www.synphaet.co.th',
            'province' => '00', 'location' => 'https://g.page/SynphaetRamintra?share',
            'th' => ['title' => 'โรงพยาบาลสินแพทย์', 'address' => '9/99 ถ.รามอินทรา กม.8.5 คันนายาว กรุงเทพมหานคร 10230'],
            'en' => ['title' => 'SYNPHEAT HOSPITAL', 'address' => '9/99 Ram Inthra Road  Km. 8.5 Khan Na Yao Bangkok 10230'],
        ];
        $arr[] = [
            'tel' => '02 874 6766', 'cat_id' => '90',
            'website' => 'http://suksawathospital.com/en',
            'province' => '00', 'location' => 'https://goo.gl/maps/WWnTbSCXYnyAZdvK6',
            'th' => ['title' => 'โรงพยาบาลสุขสวัสดิ์', 'address' => '272 ถ.สุขสวัสดิ์ ราษฎร์บูรณะ กรุงเทพมหานคร 10140'],
            'en' => ['title' => 'SUKSAWAT HOSPITAL', 'address' => '272 Suk Sawat Rd Rat Burana Bangkok 10140'],
        ];
        $arr[] = [
            'tel' => '02 391 0011', 'cat_id' => '90',
            'website' => 'http://www.sukumvithospital.com',
            'province' => '00', 'location' => 'https://g.page/sukumvithospital?share',
            'th' => ['title' => 'โรงพยาบาลสุขุมวิท', 'address' => '1411 ถ.สุขุมวิท วัฒนา กรุงเทพมหานคร 10110'],
            'en' => ['title' => 'SUKUMVIT HOSPITAL', 'address' => '1411 Sukhumvit Rd Wattana Bangkok 10110'],
        ];
        $arr[] = [
            'tel' => '02 223 1351', 'cat_id' => '90',
            'website' => 'http://www.huachiewhospital.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/Hxo5RKiMrHX94bQm6',
            'th' => ['title' => 'โรงพยาบาลหัวเฉียว', 'address' => '665 ถ.บำรุงเมือง ป้อมปราบศัตรูพ่าย กรุงเทพมหานคร 10100'],
            'en' => ['title' => 'HUACHEAW HOSPITAL', 'address' => '665 Bamrung Mueang Rd Pom Prap Sattru Phai Bangkok 10100'],
        ];
        $arr[] = [
            'tel' => '02 804 8959', 'cat_id' => '90',
            'website' => 'http://www.kasemrad.co.th',
            'province' => '00', 'location' => 'https://goo.gl/maps/QkqHCk268tJz7tTc8',
            'th' => ['title' => 'โรงพยาบาลเกษมราษฎร์บางแค', 'address' => '240/24- 25 หมู่ 1 ถ.เพชรเกษม บางแค กรุงเทพมหานคร 10160'],
            'en' => ['title' => 'KASEMRAD BANGKAE HOSPITAL', 'address' => '240/24- 25 Moo 1 Phet Kasem Rd Bang Khae Bangkok 10160'],
        ];
        $arr[] = [
            'tel' => '02 910 1600', 'cat_id' => '90',
            'website' => 'http://www.kasemrad.co.th',
            'province' => '00', 'location' => 'https://goo.gl/maps/VeW1z8EHhoQqbLwd8',
            'th' => ['title' => 'โรงพยาบาลเกษมราษฎร์ประชาชื่น', 'address' => '950 ถ.ประชาชื่น บางซื่อ กรุงเทพมหานคร 10800'],
            'en' => ['title' => 'KASEMRAD PRACHACHUEN HOSPITAL', 'address' => '950 Pracha Chuen Rd Bang Sue Bangkok 10800'],
        ];
        $arr[] = [
            'tel' => '02 434 1111', 'cat_id' => '90',
            'website' => 'http://www.chaophya.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/5yRXgZcXuPfW7fPP8',
            'th' => ['title' => 'โรงพยาบาลเจ้าพระยา', 'address' => '113/44 ถ.ปิ่นเกล้า-นครไชยศรี บางกอกน้อย กรุงเทพมหานคร 10700'],
            'en' => ['title' => 'CHAO PHYA HOSPITAL', 'address' => '113/44 Borommaratchachonnani Road Bangkok Noi Bangkok 10700'],
        ];
        $arr[] = [
            'tel' => '02 552 8777', 'cat_id' => '90',
            'website' => 'www.cgh.co.th',
            'province' => '00', 'location' => 'https://goo.gl/maps/guBZeozQq6pXfud27',
            'th' => ['title' => 'โรงพยาบาลเซ็นทรัลเยนเนอรัล', 'address' => '290 ถ.พหลโยธิน บางเขน กรุงเทพมหานคร 10220'],
            'en' => ['title' => 'CENTRAL GENERAL HOSPITAL', 'address' => '290  Phahonyothin Alley Bang Khen Bangkok 10220'],
        ];
        $arr[] = [
            'tel' => '02 348 7000', 'cat_id' => '90',
            'website' => 'http://www.theptarin.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/GufidjrcY8UXesmk7',
            'th' => ['title' => 'โรงพยาบาลเทพธารินทร์', 'address' => '3850 ถ.พระราม 4 คลองเตย กรุงเทพมหานคร 10250'],
            'en' => ['title' => 'THEPTHARIN HOSPITAL', 'address' => '3850 Rama 4 Rd Khlong Toei Bangkok 10250'],
        ];
        $arr[] = [
            'tel' => '02 279 7000', 'cat_id' => '90',
            'website' => 'http://www.paolohealthcare.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/bLuaUn5THaMqrd1h7',
            'th' => ['title' => 'โรงพยาบาลเปาโล เมโมเรียล', 'address' => '670/1 ถ.พหลโยธิน พญาไท กรุงเทพมหานคร 10400'],
            'en' => ['title' => 'PAOLO MEMORIAL HOSPITAL', 'address' => '670/1  Phahonyothin Alley Phaya Thai Bangkok 10400'],
        ];
        $arr[] = [
            'tel' => '02 150 0900', 'cat_id' => '90',
            'website' => 'http://www.paolohealthcare.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/qzngD1RxKad1b787A',
            'th' => ['title' => 'โรงพยาบาลเปาโลเกษตร', 'address' => '2012/5-6 ถ.พหลโยธิน จตุจักร กรุงเทพมหานคร 10900'],
            'en' => ['title' => 'PAOLOKASET HOSPITAL', 'address' => '2012/5-6  Phahonyothin Alley Chatuchak Bangkok 10900'],
        ];
        $arr[] = [
            'tel' => '02 514 4140', 'cat_id' => '90',
            'website' => 'http://www.paolohealthcare.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/HHWzDgETbisj4wn9A',
            'th' => ['title' => 'โรงพยาบาลเปาโลเมโมเรียล โชคชัย4', 'address' => '1 ถ.โชคชัย 4 ลาดพร้าว กรุงเทพมหานคร 10230'],
            'en' => ['title' => 'PAOLO SIAM HOSPITAL', 'address' => '1 Chok Chai 4 Rd Lat Phrao Bangkok 10230'],
        ];
        $arr[] = [
            'tel' => '02 455 5599', 'cat_id' => '90',
            'website' => 'http://www.petkasem2hospital.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/NgqfcTtRX85aq7Lj6',
            'th' => ['title' => 'โรงพยาบาลเพชรเกษม 2', 'address' => '675 ถ.เพชรเกษม ภาษีเจริญ กรุงเทพมหานคร 10160'],
            'en' => ['title' => 'PETKASEM 2 HOSPITAL', 'address' => '675 Phet Kasem Rd Phasi Charoen Bangkok 10160'],
        ];
        $arr[] = [
            'tel' => '02 718 1515', 'cat_id' => '90',
            'website' => 'http://www.petcharavejhospital.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/HDbs362bynMcfRmQ7',
            'th' => ['title' => 'โรงพยาบาลเพชรเวช', 'address' => '2469/15 ถ.เพชรบุรีตัดใหม่ ห้วยขวาง กรุงเทพมหานคร 10320'],
            'en' => ['title' => 'PETCHARAVEJ HOSPITAL', 'address' => '2469/15 New Petchburi Rd., Huaykwang Bangkok 10320'],
        ];
        $arr[] = [
            'tel' => '02 734 0000', 'cat_id' => '90',
            'website' => 'http://www.vejthani.com',
            'province' => '00', 'location' => 'https://g.page/Vejthani-Hospital?share',
            'th' => ['title' => 'โรงพยาบาลเวชธานี', 'address' => '1 ถ.ลาดพร้าว 111 บางกะปิ กรุงเทพมหานคร 10310'],
            'en' => ['title' => 'VEJTHANI HOSPITAL', 'address' => '1  Lat Phrao 111 Rd Bang Kapi Bangkok 10310'],
        ];
        $arr[] = [
            'tel' => '02 761 9888', 'cat_id' => '90',
            'website' => 'http://www.seriruk.co.th',
            'province' => '00', 'location' => 'https://goo.gl/maps/oKiwnEjb71fAAXP59',
            'th' => ['title' => 'โรงพยาบาลเสรีรักษ์', 'address' => '44 ถ.เสรีไทย มีนบุรี กรุงเทพมหานคร 10510'],
            'en' => ['title' => 'SERIPUK HOSPITAL', 'address' => '44 Seri Thai Rd Minburi Bangkok 10510'],
        ];
        $arr[] = [
            'tel' => '02 314 0726', 'cat_id' => '90',
            'website' => 'www.phaetpanya.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/XmSrJwWm4unSqQix8',
            'th' => ['title' => 'โรงพยาบาลแพทย์ปัญญา', 'address' => '124-126 ซ.รามคำแหง 4 - สวนหลวง กรุงเทพมหานคร 10250'],
            'en' => ['title' => 'PHAET PANYA HOSPITAL', 'address' => '124-126 Soi Ramkhamhaeng 4 - Suan Luang Bangkok 10250'],
        ];
        $arr[] = [
            'tel' => '02 361 2727', 'cat_id' => '90',
            'website' => 'http://www.thainakarin.co.th',
            'province' => '00', 'location' => 'https://goo.gl/maps/oQvvjkY1Yu2BD6Jp8',
            'th' => ['title' => 'โรงพยาบาลไทยนครินทร์', 'address' => '345 หมู่ 11 ถ.บางนา-ตราด บางนา กรุงเทพมหานคร 10260'],
            'en' => ['title' => 'THAI NAKARIN HOSPITAL', 'address' => '345 Moo 11 Bang Na-Trat Rd Bang-na Bangkok 10260'],
        ];
        $arr[] = [
            'tel' => '02 244 3000', 'cat_id' => '91',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/EP99k22icZidxj7RA',
            'th' => ['title' => 'คณะแพทยศาสตร์วชิรพยาบาล มหาวิทยาลัยนวมินทราธิราช', 'address' => '681 สามเสน  วชิรพยาบาล กรุงเทพมหานคร 10300'],
            'en' => ['title' => 'WACHIRA HOSPITAL', 'address' => '681 Samsen Rd Wachira Phayaban Bangkok 10300'],
        ];
        $arr[] = [
            'tel' => '034 270 080', 'cat_id' => '90',
            'website' => 'https://www.bch.in.th',
            'province' => '18', 'location' => 'https://goo.gl/maps/Trzykq9LytPxRQpq9',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพคริสเตียน นครปฐม', 'address' => '173 ถ.25 มกรา เมืองนครปฐม นครปฐม 73000'],
            'en' => ['title' => 'BANGKOK CHRISTIAN NAKORNPATHOM HOSPITAL', 'address' => '173 Yee-Sib-Ha Makara Rd Amphoe Mueang Nakhon Pathom Nakhon Pathom 73000'],
        ];
        $arr[] = [
            'tel' => '034 219 600', 'cat_id' => '90',
            'website' => 'https://www.bangkokhospital.com',
            'province' => '18', 'location' => 'https://goo.gl/maps/FciY3Gun6UGoKR1H9',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพสนามจันทร์', 'address' => '1194 ถ.เพชรเกษม เมืองนครปฐม นครปฐม 73000'],
            'en' => ['title' => 'BANGKOK SANAMCHAN HOSPITAL', 'address' => '1194 Phet Kasem Rd Amphoe Mueang Nakhon Pathom Nakhon Pathom 73000'],
        ];
        $arr[] = [
            'tel' => '02 889 2601', 'cat_id' => '90',
            'website' => 'www.salayahospital.co.th',
            'province' => '18', 'location' => 'https://goo.gl/maps/Rwof31XGwz5i6kYh9',
            'th' => ['title' => 'โรงพยาบาลศาลายา', 'address' => '95 ถ.ศาลายา-นครชัยศรี พุทธมณฑล นครปฐม 73170'],
            'en' => ['title' => 'SARAYA  HOSPITAL', 'address' => '95 Salaya-Nakhon Chai Si Road Phutthamonthon Nakhon Pathom 73170'],
        ];
        $arr[] = [
            'tel' => '034 273 463', 'cat_id' => '90',
            'website' => '-',
            'province' => '18', 'location' => 'https://goo.gl/maps/G2GuFXsrD3LDgkM67',
            'th' => ['title' => 'โรงพยาบาลเทพากร', 'address' => '24 ซ.1 ถ.เทศา เมืองนครปฐม นครปฐม 73000'],
            'en' => ['title' => 'THEPAKORN HOSPITAL', 'address' => '24 Tesa Soi 1 Amphoe Mueang Nakhon Pathom Nakhon Pathom 73000'],
        ];
        $arr[] = [
            'tel' => '02 582 2299', 'cat_id' => '90',
            'website' => 'http://www.krungthaihospital.com',
            'province' => '23', 'location' => 'https://goo.gl/maps/q6Z8NzS6SJ5DVHbB9',
            'th' => ['title' => 'โรงพยาบาลกรุงไทย', 'address' => '78/30 หมู่ 8 ถ.ติวานนท์ ปากเกร็ด นนทบุรี 11120'],
            'en' => ['title' => 'KRUNGTHAI HOSPITAL', 'address' => '78/30 Moo 8 Tiwanon Road Pak Kret Nonthaburi 11120'],
        ];
        $arr[] = [
            'tel' => '02 596 7888', 'cat_id' => '90',
            'website' => 'http://www.nonthavej.co.th',
            'province' => '23', 'location' => 'https://g.page/nonthavej-hospital?share',
            'th' => ['title' => 'โรงพยาบาลนนทเวช', 'address' => '432 งามวงศ์วาน เมืองนนทบุรี นนทบุรี 11000'],
            'en' => ['title' => 'NONTHAVEJ HOSPITAL', 'address' => '432 Ngamwongwan Mueang Nonthaburi Nonthaburi 11000'],
        ];
        $arr[] = [
            'tel' => '02 092 4900', 'cat_id' => '90',
            'website' => 'www.vibharampakkred.com',
            'province' => '23', 'location' => 'https://goo.gl/maps/NKkmAntTzNGWByrFA',
            'th' => ['title' => 'โรงพยาบาลวิภารามปากเกร็ด', 'address' => '135/215 ถ.แจ้งวัฒนะ ปากเกร็ด นนทบุรี 11120'],
            'en' => ['title' => 'VIBHARAM PAKKRED HOSPITAL', 'address' => '135/215 Chaeng Watthana Rd Pak Kret Nonthaburi 11120'],
        ];
        $arr[] = [
            'tel' => '02 921 3400', 'cat_id' => '90',
            'website' => 'http://www.kasemrad.co.th',
            'province' => '23', 'location' => 'https://goo.gl/maps/Y9sQYAXNBLsDosv69',
            'th' => ['title' => 'โรงพยาบาลเกษมราษฎร์รัตนาธิเบศร์', 'address' => '58 หมู่ 15 - บางบัวทอง นนทบุรี 11110'],
            'en' => ['title' => 'KASEMRAD  RATTANATIBETH HOSPITAL', 'address' => '58 Moo 15 - Bang Bua Thong Nonthaburi 11110'],
        ];
        $arr[] = [
            'tel' => '02 594 0020', 'cat_id' => '90',
            'website' => 'http://www.kasemrad.co.th',
            'province' => '23', 'location' => 'https://goo.gl/maps/BbdEioHo5CpQAU6p8',
            'th' => ['title' => 'โรงพยาบาลเกษมราษฎร์อินเตอร์เนชั่นแนลรัตนาธิเบศร์', 'address' => '60 หมู่ 6 ถ.กรุงเทพ-สุพรรณบุรี บางบัวทอง นนทบุรี 11110'],
            'en' => ['title' => 'KASEMRAD  INTERNATIONAL RATTANATIBETH HOSPITAL', 'address' => '60 Moo 6 Kanchanaphisek Rd Bang Bua Thong Nonthaburi 11110'],
        ];
        $arr[] = [
            'tel' => '02 836 9999', 'cat_id' => '90',
            'website' => 'http://www.theworldmedicalcenter.com',
            'province' => '23', 'location' => 'https://goo.gl/maps/EX5xiq1a43ztbNfW8',
            'th' => ['title' => 'โรงพยาบาลเวิลด์เมดิคอล', 'address' => '44 หมู่ 4 ถ.แจ้งวัฒนะ ปากเกร็ด นนทบุรี 11120'],
            'en' => ['title' => 'WORLD MEDICAL HOSPITAL', 'address' => '44 Moo 4 Chaeng Watthana Rd Pak Kret Nonthaburi 11120'],
        ];
        $arr[] = [
            'tel' => '02 975 6700', 'cat_id' => '90',
            'website' => 'http://www.stcarlos.com',
            'province' => '27', 'location' => 'https://goo.gl/maps/DKXE4QiemaRAdUAV8',
            'th' => ['title' => 'โรงพยาบาลกรุงสยามเซนต์คาร์ลอส', 'address' => '5/84 หมู่ 2 ถ.ติวานนท์ เมืองปทุมธานี ปทุมธานี 12000'],
            'en' => ['title' => 'KRUNG SIAM ST.CARLOS HOSPITAL', 'address' => '5/84 Moo 2 Tiwanon Road Mueang Pathumthani Pathumthani 12000'],
        ];
        $arr[] = [
            'tel' => '02 529 4533', 'cat_id' => '90',
            'website' => 'www.karunvej.com',
            'province' => '27', 'location' => 'https://goo.gl/maps/7vdq5daUwQ7DuQFb6',
            'th' => ['title' => 'โรงพยาบาลการุญเวชปทุมธานี', 'address' => '98  หมู่ 13 ถ.พหลโยธิน คลองหลวง ปทุมธานี 13180'],
            'en' => ['title' => 'KARUNVEJ PATHUMTHANI HOSPITAL', 'address' => '98  Moo 13  Phahonyothin Rd Khlong Luang Pathumthani 13180'],
        ];
        $arr[] = [
            'tel' => '02 996 2211', 'cat_id' => '90',
            'website' => 'www.bangpakokrangsit.com',
            'province' => '27', 'location' => 'https://goo.gl/maps/3Lu21ntg2ymf1t5y7',
            'th' => ['title' => 'โรงพยาบาลบางปะกอก-รังสิต 2', 'address' => '757 ถ.รังสิต-นครนายก ธัญบุรี ปทุมธานี 12130'],
            'en' => ['title' => 'BANGPAKOK-RANGSIT 2 HOSPITAL', 'address' => '757 Rangsit-Nakhon Nayok 53 Alley Thanyaburi Pathumthani 12130'],
        ];
        $arr[] = [
            'tel' => '02 567 1991', 'cat_id' => '90',
            'website' => 'http://www.pathumvech.com',
            'province' => '27', 'location' => 'https://goo.gl/maps/6S73Exbfjd8VpoGAA',
            'th' => ['title' => 'โรงพยาบาลปทุมเวช', 'address' => '1 ถ.รังสิต-ปทุมธานี6 ธัญบุรี ปทุมธานี 12130'],
            'en' => ['title' => 'PATHUMVECH HOSPITAL', 'address' => '1 Rangsit-Pathum Thani Road Thanyaburi Pathumthani 12130'],
        ];
        $arr[] = [
            'tel' => '02 901 8400', 'cat_id' => '90',
            'website' => 'http://www.phatara-thonburi.com',
            'province' => '27', 'location' => 'https://goo.gl/maps/GqUbDdhis2RXkwMv5',
            'th' => ['title' => 'โรงพยาบาลภัทรธนบุรี', 'address' => '32/410 หมู่ 6 - คลองหลวง ปทุมธานี 13180'],
            'en' => ['title' => 'PATTARA-THONBURI HOSPITAL', 'address' => '32/410 Moo 6 - Khlong Luang Pathumthani 13180'],
        ];
        $arr[] = [
            'tel' => '02 998 9888', 'cat_id' => '90',
            'website' => 'www.patrangsit.com',
            'province' => '27', 'location' => 'https://goo.gl/maps/PqNtxgiRSfeZEYgCA',
            'th' => ['title' => 'โรงพยาบาลเฉพาะทางแม่และเด็กแพทย์รังสิต', 'address' => '733/347 หมู่ 8 ถ.พหลโยธิน ลำลูกกา ปทุมธานี 12130'],
            'en' => ['title' => 'RANGSIT MOTHER&CHILD HOSPITAL', 'address' => '733/347 Moo 8  Phahonyothin Rd Lam Luk Ka Pathumthani 12130'],
        ];
        $arr[] = [
            'tel' => '02 577 8111', 'cat_id' => '90',
            'website' => 'http://www.paolohospital.com/rangsit',
            'province' => '27', 'location' => 'https://goo.gl/maps/Rase4WvcMykvCjs26',
            'th' => ['title' => 'โรงพยาบาลเปาโลเมโมเรียล รังสิต', 'address' => '11/1 ถ.รังสิต-นครนายก ธัญบุรี ปทุมธานี 12130'],
            'en' => ['title' => 'PAOLO MEMORIAL RANGSIT HOSPITAL', 'address' => '11/1 Rangsit - Nakhon Nayok Rd Thanyaburi Pathumthani 12130'],
        ];
        $arr[] = [
            'tel' => '02 998 9999', 'cat_id' => '90',
            'website' => 'www.patrangsit.com',
            'province' => '27', 'location' => 'https://goo.gl/maps/ncDcErsd4XDGuyMN9',
            'th' => ['title' => 'โรงพยาบาลแพทย์รังสิต', 'address' => '733/345 หมู่ 8 ถ.พหลโยธิน ลำลูกกา ปทุมธานี 12130'],
            'en' => ['title' => 'RANGSIT GENERAL HOSPITAL', 'address' => '733/345 Moo 8  Phahonyothin Rd Lam Luk Ka Pathumthani 12130'],
        ];
        $arr[] = [
            'tel' => '2 033 2900', 'cat_id' => '90',
            'website' => 'www.chularat.com',
            'province' => '56', 'location' => 'https://goo.gl/maps/eYXTYw1AwbpRByuQ7',
            'th' => ['title' => 'โรงพยาบาลจุฬารัตน์ 3', 'address' => '88/8 หมู่ 11 ถ.เทพารักษ์ บางพลี สมุทรปราการ 10540'],
            'en' => ['title' => 'CHULARAT 3 HOSPITAL', 'address' => '88/8 Moo 11 Thepharak Road Km. 14.5 Bang Phli  Samut Prakan 10540'],
        ];
        $arr[] = [
            'tel' => ' 02 115 2111', 'cat_id' => '90',
            'website' => 'www.chularat.com',
            'province' => '56', 'location' => 'https://goo.gl/maps/THNHKs54UB3DFp6m9',
            'th' => ['title' => 'โรงพยาบาลจุฬารัตน์ 9', 'address' => '90/5 หมู่ 13 ซ.สุทธาราม  ถ.เจริญนคร บางพลี สมุทรปราการ 10540'],
            'en' => ['title' => 'CHULARAT 9 HOSPITAL', 'address' => '90/5 Moo 13 King Kaeo Rd Bang Phli  Samut Prakan 10540'],
        ];
        $arr[] = [
            'tel' => '02 330 3030', 'cat_id' => '90',
            'website' => 'www.bangna2.com',
            'province' => '56', 'location' => 'https://goo.gl/maps/bAqXRnWuHyUKvibw6',
            'th' => ['title' => 'โรงพยาบาลบางนา 2', 'address' => '9/9 หมู่ 3 ถ.บางนา-ตราด กม.23 กิ่งอำเภอบางเสาธง สมุทรปราการ 10540'],
            'en' => ['title' => 'BANGNA 2 HOSPITAL', 'address' => '9/9 Moo 3 Bangna - Trad. Km 23 Bang Sao Thong Samut Prakan 10540'],
        ];
        $arr[] = [
            'tel' => '02 138 1155', 'cat_id' => '90',
            'website' => 'http://bangna.co.th/home_bangna5.html',
            'province' => '56', 'location' => 'https://goo.gl/maps/pdsuugH8kTGnMy6KA',
            'th' => ['title' => 'โรงพยาบาลบางนา 5', 'address' => '55 หมู่ 4 ถ.เทพารักษ์ กม.11 บางพลี สมุทรปราการ 10540'],
            'en' => ['title' => 'BANGNA 5 HOSPITAL', 'address' => '55 Moo 4 Thepharak Road Km. 11 Bang Phli  Samut Prakan 10540'],
        ];
        $arr[] = [
            'tel' => '02 109 3111', 'cat_id' => '90',
            'website' => 'www.bangpakok3.com',
            'province' => '56', 'location' => 'https://goo.gl/maps/pgVRLJYx7zpJnCB38',
            'th' => ['title' => 'โรงพยาบาลบางปะกอก 3 พระประแดง', 'address' => '27/14 หมู่ 10 ถ.สุขสวัสดิ์ พระประแดง สมุทรปราการ 10130'],
            'en' => ['title' => 'BANGPAKOK 3 HOSPITAL', 'address' => '27/14 Moo 10 Suksawat Road Phra Pradaeng Samut Prakan 10130'],
        ];
        $arr[] = [
            'tel' => '02 109 3222', 'cat_id' => '90',
            'website' => '-',
            'province' => '56', 'location' => 'https://goo.gl/maps/rjCr9GKyQkgqALjQA',
            'th' => ['title' => 'โรงพยาบาลบางปะกอกสมุทรปราการ', 'address' => '99 หมู่ 7 ถ.สุขสวัสดิ์ พระประแดง สมุทรปราการ 10130'],
            'en' => ['title' => 'BANGKOK SAMUTPRAKARN', 'address' => '99 Moo 7 Suksawat Road Phra Pradaeng Samut Prakan 10130'],
        ];
        $arr[] = [
            'tel' => '02 080 5999', 'cat_id' => '90',
            'website' => 'http://princhospital.com',
            'province' => '56', 'location' => 'https://goo.gl/maps/eDCSRSrmCpNeMMv79',
            'th' => ['title' => 'โรงพยาบาลพริ้นซ์ ฮอสพิทอล', 'address' => '35/2 ถ.บางนา-ตราด บางพลี สมุทรปราการ 10540'],
            'en' => ['title' => 'PRINC HOSPITAL', 'address' => '35/2 Bangna - Trad. Rd Bang Phli  Samut Prakan 10540'],
        ];
        $arr[] = [
            'tel' => '02 708 7503', 'cat_id' => '90',
            'website' => 'www.ruamchai-hos.com',
            'province' => '56', 'location' => 'https://goo.gl/maps/aS2SPnoCQtA3dM3w9',
            'th' => ['title' => 'โรงพยาบาลรวมชัยประชารักษ์', 'address' => '168/26 ถ.บางนา-ตราด กม.29 บางบ่อ สมุทรปราการ 10560'],
            'en' => ['title' => 'RUAMCHAI PRACHARAK HOSPITAL', 'address' => '168/26 Bangna - Trad. Km 29 Bang Bo Samut Prakan 10560'],
        ];
        $arr[] = [
            'tel' => '02 323 2995', 'cat_id' => '90',
            'website' => '-',
            'province' => '56', 'location' => 'https://goo.gl/maps/xpLUBzuAoFQteTCa7',
            'th' => ['title' => 'โรงพยาบาลรัทรินทร์', 'address' => '999/23-29 ถ.สุขุมวิท เมืองสมุทรปราการ สมุทรปราการ 10280'],
            'en' => ['title' => 'RATTARIN HOSPITAL', 'address' => '999/23-29 Sukhumvit Rd Amphoe Mueang Samut Prakan Samut Prakan 10280'],
        ];
        $arr[] = [
            'tel' => '02 363 9222', 'cat_id' => '90',
            'website' => 'www.vibharamchaiprakarn.com',
            'province' => '56', 'location' => 'https://goo.gl/maps/EpmvVYr9WKoGKzbCA',
            'th' => ['title' => 'โรงพยาบาลวิภาราม-ชัยปราการ', 'address' => '555 ถ.ปู่เจ้าสมิงพราย พระประแดง สมุทรปราการ 10130'],
            'en' => ['title' => 'VIBHARAM CHAIPRAKAN', 'address' => '555 Phuchao Saming Phray Rd Phra Pradaeng Samut Prakan 10130'],
        ];
        $arr[] = [
            'tel' => '02 709 8016', 'cat_id' => '90',
            'website' => '-',
            'province' => '56', 'location' => 'https://goo.gl/maps/G4ua9xgF1ZBaY65c9',
            'th' => ['title' => 'โรงพยาบาลศิวเวช', 'address' => '586/412-419  ถ.พัฒนา1 - สมุทรปราการ 10270'],
            'en' => ['title' => 'SIVAVEJ HOSPITAL', 'address' => '586/412-419  Phatthana 1 Rd - Samut Prakan 10270'],
        ];
        $arr[] = [
            'tel' => '02 361 1111', 'cat_id' => '90',
            'website' => 'http://www.samrong-hosp.com',
            'province' => '56', 'location' => 'https://goo.gl/maps/GuRoSaF8qzvsxv5i6',
            'th' => ['title' => 'โรงพยาบาลสำโรงการแพทย์', 'address' => '1748 สุขุมวิท 78 เมืองสมุทรปราการ สมุทรปราการ 10270'],
            'en' => ['title' => 'SAMRONG GENERAL HOSPITAL', 'address' => '1748 Sukhumvit 78 Rd Amphoe Mueang Samut Prakan Samut Prakan 10270'],
        ];
        $arr[] = [
            'tel' => '02 761 5999', 'cat_id' => '90',
            'website' => 'https://www.synphaet.co.th',
            'province' => '56', 'location' => 'https://goo.gl/maps/kCCu7DfpJnwR6icx8',
            'th' => ['title' => 'โรงพยาบาลสินแพทย์ เทพารักษ์', 'address' => '9/99  ถ.เทพารักษ์ เมืองสมุทรปราการ สมุทรปราการ 10270'],
            'en' => ['title' => 'SYNPHAET THEPARAK HOSPITAL', 'address' => '9/99  Thepharak Road  Amphoe Mueang Samut Prakan Samut Prakan 10270'],
        ];
        $arr[] = [
            'tel' => '0-2334-2555', 'cat_id' => '90',
            'website' => '-',
            'province' => '56', 'location' => 'https://goo.gl/maps/9mTKLdCxp3YPgGQf8',
            'th' => ['title' => 'โรงพยาบาลอรวรรณ', 'address' => 'ซอยมังกร ขันดี - เมืองสมุทรปราการ สมุทรปราการ 10280'],
            'en' => ['title' => 'ORAWAN HOSPITAL', 'address' => 'Soi Mungkorn - Khan Dee - Amphoe Mueang Samut Prakan Samut Prakan 10280'],
        ];
        $arr[] = [
            'tel' => '02 818 9000', 'cat_id' => '90',
            'website' => 'http://www.paolophrapradaeng.com/',
            'province' => '56', 'location' => 'https://goo.gl/maps/GP9dfWtPfyJcNUBz5',
            'th' => ['title' => 'โรงพยาบาลเปาโล พระประแดง', 'address' => '288 ถ.สุขสวัสดิ์ พระสมุทรเจดีย์ สมุทรปราการ 10290'],
            'en' => ['title' => 'PAOLO PRAPADANG HOSPITAL', 'address' => '288 Suksawat Road Phra Samut Chedi Samut Prakan 10290'],
        ];
        $arr[] = [
            'tel' => '02 363 2000', 'cat_id' => '90',
            'website' => 'http://www.paolohospital.com',
            'province' => '56', 'location' => 'https://goo.gl/maps/eKkX7B5uednWd7yMA',
            'th' => ['title' => 'โรงพยาบาลเปาโลเมโมเรียล สมุทรปราการ', 'address' => '123 ถ.ศรีนครินทร์ เมืองสมุทรปราการ สมุทรปราการ 10270'],
            'en' => ['title' => 'PAOLO MEMORIAL SAMUTPRAKARN HOSPITAL', 'address' => '123 Srinagarindra Rd Amphoe Mueang Samut Prakan Samut Prakan 10270'],
        ];
        $arr[] = [
            'tel' => '02 173 7766', 'cat_id' => '90',
            'website' => 'http://www.muangsamut.net',
            'province' => '56', 'location' => 'https://goo.gl/maps/j8uxTWGqazHsYoPP7',
            'th' => ['title' => 'โรงพยาบาลเมืองสมุทรบางปู', 'address' => '1-1/1 ถ.สุขุมวิท เมืองสมุทรปราการ สมุทรปราการ 10280'],
            'en' => ['title' => 'MUANGSAMUT BANGPOO HOSPITAL', 'address' => '1-1/1 Sukhumvit Rd Amphoe Mueang Samut Prakan Samut Prakan 10280'],
        ];
        $arr[] = [
            'tel' => '02 173 7766', 'cat_id' => '90',
            'website' => 'http://www.muangsamut.net',
            'province' => '56', 'location' => 'https://goo.gl/maps/YWeurM8AFT1jxFxM9',
            'th' => ['title' => 'โรงพยาบาลเมืองสมุทรปากน้ำ', 'address' => '156 ถ.เทศบาล 12 เมืองสมุทรปราการ สมุทรปราการ 10270'],
            'en' => ['title' => 'MUANGSAMUT PARKNUM HOSPITAL', 'address' => '156 Municipal Road 12 Amphoe Mueang Samut Prakan Samut Prakan 10270'],
        ];
        $arr[] = [
            'tel' => '02 754 2800', 'cat_id' => '90',
            'website' => 'http://www.muangsamut.net',
            'province' => '56', 'location' => 'https://goo.gl/maps/bzy9Yhrm5hunmCsv5',
            'th' => ['title' => 'โรงพยาบาลเมืองสมุทรปู่เจ้าฯ', 'address' => '83/16 ถ.ปู่เจ้าสมิงพราย พระประแดง สมุทรปราการ 10130'],
            'en' => ['title' => 'MUANGSAMUT POOCHAO SAMING PRI HOSPITAL', 'address' => '83/16 Phuchao Saming Phray Rd  Phra Pradaeng Samut Prakan 10130'],
        ];
        $arr[] = [
            'tel' => ' 055 716 100', 'cat_id' => '90',
            'website' => 'http://www.akchhospital.com',
            'province' => '04', 'location' => 'https://goo.gl/maps/SfUpkDvYp2Q3GW7z6',
            'th' => ['title' => 'โรงพยาบาลเอกชนเมืองกำแพง', 'address' => '68 ถ.เลี่ยงเมือง เมืองกำแพงเพชร กำแพงเพชร 62000'],
            'en' => ['title' => 'EAKCHON MUNGKUMPANG HOSPITAL', 'address' => '68 Soi Liang Mueang 4 Amphoe Mueang Kamphaeng Phet Kamphaeng Phet 62000'],
        ];
        $arr[] = [
            'tel' => '056 413 018', 'cat_id' => '90',
            'website' => 'www.rpchainat.com',
            'province' => '09', 'location' => 'https://goo.gl/maps/eFGKRYdQUetUMTKZ7',
            'th' => ['title' => 'โรงพยาบาลรวมแพทย์ชัยนาท', 'address' => '170  หมู่ 4 ถ.ชัยนาท-สุพรรณบุรี เมืองชัยนาท ชัยนาท 17000'],
            'en' => ['title' => 'RUAMPHAET CHAINAT HOSPITAL', 'address' => '170  Moo 4 Chainat-Suphan Rd Amphoe Mueang Chainat Chai Nat 17000'],
        ];
        $arr[] = [
            'tel' => '037 395 085', 'cat_id' => '91',
            'website' => 'http://medicine.swu.ac.th/imsmc/',
            'province' => '17', 'location' => 'https://goo.gl/maps/KyukgBy2VaaJadQR6',
            'th' => ['title' => 'ศูนย์การแพทย์สมเด็จพระเทพรัตนราชสุดาฯ', 'address' => '62 ม. 7 - องครักษ์ นครนายก 26120'],
            'en' => ['title' => 'HRH PRINCESS MAHA CHAKRI SIRINDHORN MEDICAL CENTER', 'address' => '62 Moo 7 - Ongkharak Nakhon Nayok 26120'],
        ];
        $arr[] = [
            'tel' => '056 000 111', 'cat_id' => '90',
            'website' => '-',
            'province' => '22', 'location' => 'https://goo.gl/maps/9v32UvPwfvzaqLmW7',
            'th' => ['title' => 'โรงพยาบาลปากน้ำโพ', 'address' => '96/12 หมู่ 9 ถ.สายเอเชีย เมืองนครสวรรค์ นครสวรรค์ 60000'],
            'en' => ['title' => 'PAKNAMPO HOSPITAL', 'address' => '96/12 Moo 9  Phahonyothin Rd Amphoe Mueang Nakhon Sawan Nakhon Sawan 60000'],
        ];
        $arr[] = [
            'tel' => '056 000 111', 'cat_id' => '90',
            'website' => '-',
            'province' => '22', 'location' => 'https://goo.gl/maps/u3zu4WRhzrWXELmn8',
            'th' => ['title' => 'โรงพยาบาลปากน้ำโพ 2', 'address' => '62 ถ.อรรถกวี เมืองนครสวรรค์ นครสวรรค์ 60000'],
            'en' => ['title' => 'PAKNAMPO 2 HOSPITAL', 'address' => '62 Attakawee Road Amphoe Mueang Nakhon Sawan Nakhon Sawan 60000'],
        ];
        $arr[] = [
            'tel' => '056 223 600', 'cat_id' => '90',
            'website' => '-',
            'province' => '22', 'location' => 'https://goo.gl/maps/H3nzAKUMfgamCjh5A',
            'th' => ['title' => 'โรงพยาบาลรวมแพทย์นครสวรรค์', 'address' => '276,276/2 ถ.สวรรค์วิถี เมืองนครสวรรค์ นครสวรรค์ 60000'],
            'en' => ['title' => 'RUAM PHAET NAKORNSAWAN HOSPITAL', 'address' => '276,276/2 Sawanvitee Rd Amphoe Mueang Nakhon Sawan Nakhon Sawan 60000'],
        ];
        $arr[] = [
            'tel' => '056 224 266', 'cat_id' => '90',
            'website' => '-',
            'province' => '22', 'location' => 'https://goo.gl/maps/A49oXyMKk15erQFPA',
            'th' => ['title' => 'โรงพยาบาลร่มฉัตร', 'address' => '748/1 ถ.โกสีย์ เมืองนครสวรรค์ นครสวรรค์ 60000'],
            'en' => ['title' => 'ROMCHAT HOSPITAL', 'address' => '748/1 Kosi Rd Amphoe Mueang Nakhon Sawan Nakhon Sawan 60000'],
        ];
        $arr[] = [
            'tel' => '056 221 222', 'cat_id' => '90',
            'website' => 'www.srisawan.com',
            'province' => '22', 'location' => 'https://goo.gl/maps/EFUvo3fRzQVwvMTc8',
            'th' => ['title' => 'โรงพยาบาลศรีสวรรค์', 'address' => '33/64 ถ.ดาวดึงส์ เมืองนครสวรรค์ นครสวรรค์ 60000'],
            'en' => ['title' => 'SRI SAWAN HOSPITAL', 'address' => '33/64 Dao Dung Road Amphoe Mueang Nakhon Sawan Nakhon Sawan 60000'],
        ];
        $arr[] = [
            'tel' => '035 315 195', 'cat_id' => '90',
            'website' => 'http://www.navahospital.com',
            'province' => '31', 'location' => 'https://goo.gl/maps/ytgsTuYKYkoWgCqk8',
            'th' => ['title' => 'โรงพยาบาลการุญเวชอยุธยา', 'address' => '61/9 ถ.สายเอเชีย กม.56 บางปะอิน พระนครศรีอยุธยา 13160'],
            'en' => ['title' => 'KARUNVEJ AYUTTHAYA HOSPITAL', 'address' => '61/9 Sai Asia Road Km. 56 Bang Pa-in Amphoe Phra Nakhon Si Ayutthaya Ayutthaya 13160'],
        ];
        $arr[] = [
            'tel' => '035 801 555', 'cat_id' => '90',
            'website' => 'http://peravech.com/map.html',
            'province' => '31', 'location' => 'https://goo.gl/maps/dtGgjzstq7PSqjgTA',
            'th' => ['title' => 'โรงพยาบาลพีรเวช', 'address' => '55/5 ถ.สายเอเซีย พระนครศรีอยุธยา พระนครศรีอยุธยา 13000'],
            'en' => ['title' => 'PERAVECH HOSPITAL', 'address' => '55/5 Sai Asia Road  Phra Nakhon Si Ayutthaya Ayutthaya 13000'],
        ];
        $arr[] = [
            'tel' => '035 335 555', 'cat_id' => '90',
            'website' => 'http://www.rajthanee.com',
            'province' => '31', 'location' => 'https://goo.gl/maps/psuy1QstR6gsf9aX9',
            'th' => ['title' => 'โรงพยาบาลราชธานี', 'address' => '111 หมู่ 3 ถ.โรจนะ พระนครศรีอยุธยา พระนครศรีอยุธยา 13000'],
            'en' => ['title' => 'RAJTHANEE HOSPITAL', 'address' => '111 Moo 3 Rojana Road Phra Nakhon Si Ayutthaya Ayutthaya 13000'],
        ];
        $arr[] = [
            'tel' => '035 249 249', 'cat_id' => '90',
            'website' => 'www.rajthanee-rojana.com',
            'province' => '31', 'location' => 'https://goo.gl/maps/jy1DcbBZp53FSwBCA',
            'th' => ['title' => 'โรงพยาบาลราชธานีโรจนะ', 'address' => '78 หมู่ 3   ถ.โรจนะ บางปะอิน พระนครศรีอยุธยา 13160'],
            'en' => ['title' => 'RAJTHANEE ROJANAVEJ HOSPITAL', 'address' => '78 Moo 3   Rojana Road Bang Pa-in Ayutthaya 13160'],
        ];
        $arr[] = [
            'tel' => '035 289 572', 'cat_id' => '90',
            'website' => 'http://www.supamitrhospital.com',
            'province' => '31', 'location' => 'https://g.page/SuphmitrSena?share',
            'th' => ['title' => 'โรงพยาบาลศุภมิตรเสนา', 'address' => '34/4 หมู่ 5 - เสนา พระนครศรีอยุธยา 13110'],
            'en' => ['title' => 'SUPAMITR-SENA HOSPITAL', 'address' => '34/4 Moo 5 - Sena Ayutthaya 13110'],
        ];
        $arr[] = [
            'tel' => '056 611 407', 'cat_id' => '90',
            'website' => 'www.chaiaroonhos.com',
            'province' => '34', 'location' => 'https://goo.gl/maps/Usm7gi71WNh8UdFw6',
            'th' => ['title' => 'โรงพยาบาลชัยอรุณเวชการ', 'address' => '31/12 ถ.สระหลวง เมืองพิจิตร พิจิตร 66000'],
            'en' => ['title' => 'CHAIAROONVECHAKARN', 'address' => '31/12 Sra Luang Road Mueang Phichit Pi Chit 66000'],
        ];
        $arr[] = [
            'tel' => '056 613 316', 'cat_id' => '90',
            'website' => 'www.sahavej.com',
            'province' => '34', 'location' => 'https://goo.gl/maps/dVXvTTJwwsZfY9LU7',
            'th' => ['title' => 'โรงพยาบาลพิษณุเวช พิจิตร', 'address' => '2/158 ถ.ศรีมาลา เมืองพิจิตร พิจิตร 66000'],
            'en' => ['title' => 'SAHAVEJ HOSPITAL', 'address' => '2/158 Sri Mala Road Mueang Phichit Pi Chit 66000'],
        ];
        $arr[] = [
            'tel' => '055 212 222', 'cat_id' => '90',
            'website' => 'https://bangkokhospitalphitsanulok.com',
            'province' => '35', 'location' => 'https://goo.gl/maps/fB7ZFRmTrWT5dMTN7',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพพิษณุโลก', 'address' => '138 ถ.พระองค์ดำ เมืองพิษณุโลก พิษณุโลก 65000'],
            'en' => ['title' => 'BANGKOK PHITSANULOK HOSPITAL', 'address' => '138 Pra Ong Dam Rd Amphoe Mueang Phitsanulok Phitsanulok 65000'],
        ];
        $arr[] = [
            'tel' => '055 909 000', 'cat_id' => '90',
            'website' => 'www.pitsanuvej.com',
            'province' => '35', 'location' => 'https://goo.gl/maps/2pQVXiabLRgK9Jao6',
            'th' => ['title' => 'โรงพยาบาลพิษณุเวช พิษณุโลก', 'address' => '211 ถ.ขุนพิเรนทรเทพ เมืองพิษณุโลก พิษณุโลก 65000'],
            'en' => ['title' => 'PITSANUVEJ HOSPITAL', 'address' => '211 Khun Phirenthorathep Road Amphoe Mueang Phitsanulok Phitsanulok 65000'],
        ];
        $arr[] = [
            'tel' => '055 909 888', 'cat_id' => '90',
            'website' => '-',
            'province' => '35', 'location' => 'https://g.page/PhitsanulokHospital?share',
            'th' => ['title' => 'โรงพยาบาลพิษณุโลก ฮอสพิทอล ', 'address' => '262/55 ถ.บรมไตรโลกนารถ เมืองพิษณุโลก พิษณุโลก 65000'],
            'en' => ['title' => 'PHITSANULOK HOSPITAL', 'address' => '262/55 Boromtrilokkanart Rd Amphoe Mueang Phitsanulok Phitsanulok 65000'],
        ];
        $arr[] = [
            'tel' => '055 219 307', 'cat_id' => '90',
            'website' => 'www.ruamphat.com',
            'province' => '35', 'location' => 'https://goo.gl/maps/oQ6ooK6U343YN1oq9',
            'th' => ['title' => 'โรงพยาบาลรวมแพทย์พิษณุโลก', 'address' => '224/30 ถ.บรมไตรโลกนารถ เมืองพิษณุโลก พิษณุโลก 65000'],
            'en' => ['title' => 'RUAM PHAET PISANULOKE HOSPITAL', 'address' => '224/30 Boromtrilokkanart Rd Amphoe Mueang Phitsanulok Phitsanulok 65000'],
        ];
        $arr[] = [
            'tel' => '056 720 680', 'cat_id' => '90',
            'website' => 'www.phetcharathospital.com',
            'province' => '37', 'location' => 'https://goo.gl/maps/R6AVo3n7duNyEk1o9',
            'th' => ['title' => 'โรงพยาบาลเพชรรัตน์ เพชรบูรณ์', 'address' => '2/1 ถ.สามัคคีชัย เมืองเพชรบูรณ์ เพชรบูรณ์ 67000'],
            'en' => ['title' => 'PETCHARAT(PETCHABOON) HOSPITAL', 'address' => '2/1 Soi Samakkhi Chai 1 Amphoe Mueang Phetchabun Phetchabun 67000'],
        ];
        $arr[] = [
            'tel' => '056 702 015', 'cat_id' => '90',
            'website' => '-',
            'province' => '37', 'location' => 'https://goo.gl/maps/Z6Yja3mqMUr7yWLy5',
            'th' => ['title' => 'โรงพยาบาลทั่วไปขนาดเล็กนครหล่ม', 'address' => '163/75 ถ.คชเสนีย์ หล่มสัก เพชรบูรณ์ 67110'],
            'en' => ['title' => 'NAKORNRHOM HOSPITAL', 'address' => '163/75 Khachaseni Road Lom Sak Phetchabun 67110'],
        ];
        $arr[] = [
            'tel' => '036 412 160', 'cat_id' => '90',
            'website' => 'www.benjarom.com',
            'province' => '48', 'location' => 'https://goo.gl/maps/Y58rv3v76WDUjcRAA',
            'th' => ['title' => 'โรงพยาบาลเบญจรมย์', 'address' => '116 - เมืองลพบุรี ลพบุรี 15000'],
            'en' => ['title' => 'BENJAROM', 'address' => '116 - Mueang Lop Buri Lobburi 15000'],
        ];
        $arr[] = [
            'tel' => '036 420 666', 'cat_id' => '90',
            'website' => 'www.mueangnarai.com',
            'province' => '48', 'location' => 'https://goo.gl/maps/XhrRmvjrqz57NrYk6',
            'th' => ['title' => 'โรงพยาบาลเมืองนารายณ์', 'address' => '84 หมู่ 4 ถ.พหลโยธิน เมืองลพบุรี ลพบุรี 15000'],
            'en' => ['title' => 'MEUNG NARAI GENERAL HOSPITAL', 'address' => '84 Moo 4  Phahonyothin Rd Mueang Lop Buri Lobburi 15000'],
        ];
        $arr[] = [
            'tel' => '034 419 555', 'cat_id' => '91',
            'website' => 'www.bphosp.or.th',
            'province' => '58', 'location' => 'https://goo.gl/maps/QqhPzfn7HqBFTfEPA',
            'th' => ['title' => 'โรงพยาบาลบ้านแพ้ว', 'address' => '198 หมู่ 1 - บ้านแพ้ว สมุทรสาคร 74120'],
            'en' => ['title' => 'BANPHEAW HOSPITAL', 'address' => '198 Moo 1 - Ban Phaeo Samut Sakhon 74120'],
        ];
        $arr[] = [
            'tel' => '034 424 990', 'cat_id' => '90',
            'website' => 'www.mahachaihospital.com',
            'province' => '58', 'location' => 'https://goo.gl/maps/HuRi18AJm9fW5g6m9',
            'th' => ['title' => 'โรงพยาบาลมหาชัย 1', 'address' => '927/43ค. ถ.เศรษฐกิจ 1 เมืองสมุทรสาคร สมุทรสาคร 74000'],
            'en' => ['title' => 'MAHACHAI 1 HOSPITAL', 'address' => '927/43  Setthakit 1 Road Mueang Samut Sakhon Samut Sakhon 74000'],
        ];
        $arr[] = [
            'tel' => '02 431 0054', 'cat_id' => '90',
            'website' => 'www.mahachai2.com',
            'province' => '58', 'location' => 'https://goo.gl/maps/eRYMajvfmYvn8cgv6',
            'th' => ['title' => 'โรงพยาบาลมหาชัย 2', 'address' => '301/1  ถ.เพชรเกษม กระทุ่มแบน สมุทรสาคร 74130'],
            'en' => ['title' => 'MAHACHAI 2 HOSPITAL', 'address' => '301/1  Phetkasem Rd Krathum Baen Samut Sakhon 74130'],
        ];
        $arr[] = [
            'tel' => '034 410 700', 'cat_id' => '90',
            'website' => 'http://www.vichaivejnongkhaem.com',
            'province' => '58', 'location' => 'https://goo.gl/maps/bcRaFJq9hB3uGG4L6',
            'th' => ['title' => 'โรงพยาบาลวิชัยเวชอินเตอร์เนชั่นแนลสมุทรสาคร', 'address' => '93/256  หมู่ 7 ถ.เศรษฐกิจ 1 เมืองสมุทรสาคร สมุทรสาคร 74000'],
            'en' => ['title' => 'VICHAIVEJ INTERNATIONAL HOSPITAL SAMUTSAKHON', 'address' => '93/256  Moo 7 Setthakit 1 Road Mueang Samut Sakhon Samut Sakhon 74000'],
        ];
        $arr[] = [
            'tel' => '02 441 7899', 'cat_id' => '90',
            'website' => 'http://www.vichaivejnongkhaem.com',
            'province' => '58', 'location' => 'https://goo.gl/maps/bcRaFJq9hB3uGG4L6',
            'th' => ['title' => 'โรงพยาบาลวิชัยเวชอินเตอร์เนชั่นแนลอ้อมน้อย (ศรีวิชัย3)', 'address' => '74/5 หมู่ 4 ถ.เพชรเกษม กระทุ่มแบน สมุทรสาคร 74130'],
            'en' => ['title' => 'VICHAIVEJ INTERNATIONAL HOSPITAL OM-NOI', 'address' => '74/5 Moo 4 Phetkasem Rd Krathum Baen Samut Sakhon 74130'],
        ];
        $arr[] = [
            'tel' => '034 116 999', 'cat_id' => '90',
            'website' => 'www.vibharamsamutsakhon.com',
            'province' => '58', 'location' => 'https://goo.gl/maps/Hfr7fL3GSStymEyA6',
            'th' => ['title' => 'โรงพยาบาลวิภารามสมุทรสาคร', 'address' => '9/19 หมู่ 2 - เมืองสมุทรสาคร สมุทรสาคร 74000'],
            'en' => ['title' => 'VIBHARAM SAMUTSAKORN', 'address' => '9/19 Moo 2 - Mueang Samut Sakhon Samut Sakhon 74000'],
        ];
        $arr[] = [
            'tel' => '034 417 999', 'cat_id' => '90',
            'website' => 'http://www.ekachaihospital.com',
            'province' => '58', 'location' => 'https://g.page/ekachaihospital?share',
            'th' => ['title' => 'โรงพยาบาลเอกชัย', 'address' => '99/9 หมู่ 4 ถ.เอกชัย เมืองสมุทรสาคร สมุทรสาคร 74000'],
            'en' => ['title' => 'EKACHAI HOSPITAL', 'address' => '99/9 Moo 4 Ekachai Road Mueang Samut Sakhon Samut Sakhon 74000'],
        ];
        $arr[] = [
            'tel' => '034 715 001', 'cat_id' => '90',
            'website' => '-',
            'province' => '57', 'location' => 'https://goo.gl/maps/TM5DtvZpGBq11Qjh7',
            'th' => ['title' => 'โรงพยาบาลมหาชัยแม่กลอง', 'address' => '158/1 ถ.ราษฎร์ประสิทธิ์ เมืองสมุทรสงคราม สมุทรสงคราม 75000'],
            'en' => ['title' => 'MAHACHAI MAE KLONG  HOSPITAL', 'address' => '158/1 Ratpasit Rd Amphoe Mueang Samut Songkhram Samut Songkhram 75000'],
        ];
        $arr[] = [
            'tel' => '034 714 314', 'cat_id' => '91',
            'website' => '',
            'province' => '57', 'location' => 'https://goo.gl/maps/xfVat8F8fzg2uBo46',
            'th' => ['title' => 'โรงพยาบาลสมเด็จพระพุทธเลิศหล้า', 'address' => '708 ถ.ประสิทธิพัฒนา เมืองสมุทรสงคราม สมุทรสงคราม 75000'],
            'en' => ['title' => 'SOMDEJPHRAPHUTTHALERTLA HOSPITAL', 'address' => '708 Prasit Phatthana Road Amphoe Mueang Samut Songkhram Samut Songkhram 75000'],
        ];
        $arr[] = [
            'tel' => '036 315 555', 'cat_id' => '90',
            'website' => 'www.kasemrad.co.th/Saraburi/',
            'province' => '59', 'location' => 'https://goo.gl/maps/rTZoKKxeyhG1MdFC7',
            'th' => ['title' => 'โรงพยาบาลเกษมราษฎร์สระบุรี', 'address' => '2/22 ถ.มิตรภาพ เมืองสระบุรี สระบุรี 18000'],
            'en' => ['title' => 'KASEMRAD SARABURI HOSPITAL', 'address' => '2/22 Mittraphap Rd Mueang Saraburi Saraburi 18000'],
        ];
        $arr[] = [
            'tel' => '037 243 018', 'cat_id' => '91',
            'website' => 'www.skn.moph.go.th',
            'province' => '73', 'location' => 'https://goo.gl/maps/Y99kNVUuXFm6Fgnb6',
            'th' => ['title' => 'โรงพยาบาลสมเด็จพระยุพราชสระแก้ว', 'address' => '283 ถนนสุวรรณศร  ตำบลสระแก้ว สระแก้ว  27000'],
            'en' => ['title' => 'SINGBURI VESCHAKARN HOSPITAL', 'address' => '80/1 Moo 6 Sing Buri-Ang Thong Road Mueang Sing Buri Singburi 27000'],
        ];
        $arr[] = [
            'tel' => '036 522 555', 'cat_id' => '90',
            'website' => '-',
            'province' => '60', 'location' => 'https://goo.gl/maps/EfXu8UKZjyEnsn7W9',
            'th' => ['title' => 'โรงพยาบาลสิงห์บุรีเวชชการ (หมอประเจิด)', 'address' => '80/1 หมู่ 6 ถ.สิงห์บุรี-อ่างทอง เมืองสิงห์บุรี สิงห์บุรี 16000'],
            'en' => ['title' => 'SAKAEO CROWN PRINCE HOSPITAL  ', 'address' => ' SAKAEO  Amphoe Mueang SAKAEO  Sakaeo 16000'],
        ];
        $arr[] = [
            'tel' => '055 621 502', 'cat_id' => '90',
            'website' => '-',
            'province' => '61', 'location' => 'https://goo.gl/maps/jNCDa5kTob3X8BRK6',
            'th' => ['title' => 'โรงพยาบาลพัฒนเวชสุโขทัย', 'address' => '89/9 ถ.สิงหวัฒน์ เมืองสุโขทัย สุโขทัย 64000'],
            'en' => ['title' => 'PATTANAVEJSUKHOTHAI', 'address' => '89/9 Singhawat Rd Amphoe Mueang Sukhothai Sukhothai 64000'],
        ];
        $arr[] = [
            'tel' => '055 612 189-90', 'cat_id' => '90',
            'website' => '-',
            'province' => '61', 'location' => 'https://goo.gl/maps/95vPBxkShd7bRT6B8',
            'th' => ['title' => 'โรงพยาบาลรวมแพทย์สุโขทัย', 'address' => '151 หมู่ 1 ถ.จรดวิถีถ่อง เมืองสุโขทัย สุโขทัย 64000'],
            'en' => ['title' => 'RAUMPATE SUKHOTHAI HOSPITAL', 'address' => '151 Moo 1 Charot Withi Thong Road Mueang Sukhothai Sukhothai 64000'],
        ];
        $arr[] = [
            'tel' => '035 551 673', 'cat_id' => '90',
            'website' => 'http://www.thonburi-uthong.com/',
            'province' => '62', 'location' => 'https://goo.gl/maps/tG7FuUkY54u4geym9',
            'th' => ['title' => 'โรงพยาบาลธนบุรีอู่ทอง', 'address' => '2000/22  ถ.มาลัยแมน อู่ทอง สุพรรณบุรี 72160'],
            'en' => ['title' => 'THONBURI U-THONG HOSPITAL', 'address' => '2000/22  Malai Man Road U Thong Suphan Buri 72160'],
        ];
        $arr[] = [
            'tel' => '035 552 724', 'cat_id' => '90',
            'website' => 'https://www.piyarasd.com/',
            'province' => '62', 'location' => 'https://goo.gl/maps/C83Sn1VWGoSRasjx6',
            'th' => ['title' => 'โรงพยาบาลวิภาวดีปิยราษฎร์', 'address' => '1618/1 - อู่ทอง สุพรรณบุรี 72160'],
            'en' => ['title' => 'VIBHAVADEE  PIYARASD HOSPITAL', 'address' => '1618/1 - U Thong Suphan Buri 72160'],
        ];
        $arr[] = [
            'tel' => '035 523 777', 'cat_id' => '90',
            'website' => 'www.supamitrhospital.com',
            'province' => '62', 'location' => 'https://goo.gl/maps/uZPqL4SGoB6dhusN9',
            'th' => ['title' => 'โรงพยาบาลศุภมิตร สุพรรณบุรี', 'address' => '76 ถ.เณรแก้ว เมืองสุพรรณบุรี สุพรรณบุรี 72000'],
            'en' => ['title' => 'SUPAMITR (SUPANBURI) HOSPITAL', 'address' => '76 NaenKaew Rd Amphoe Mueang Suphan Buri Suphan Buri 72000'],
        ];
        $arr[] = [
            'tel' => '035 612 361', 'cat_id' => '90',
            'website' => '-',
            'province' => '66', 'location' => 'https://goo.gl/maps/EzeFGaasA3sTpW576',
            'th' => ['title' => 'โรงพยาบาลอ่างทองเวชการ2', 'address' => '29/9 หมู่ 2 ถ.อ่างทอง-สุพรรณบุรี เมืองอ่างทอง อ่างทอง 14000'],
            'en' => ['title' => 'ANGTHONG MEDICAL 2 HOSPITAL', 'address' => '29/9 Moo 2 Bypass Road Amphoe Mueang Ang Thong Ang Thong 14000'],
        ];
        $arr[] = [
            'tel' => '034 520 911', 'cat_id' => '90',
            'website' => 'http://www.kanchanaburihealthcare.com',
            'province' => '02', 'location' => 'https://goo.gl/maps/ZpeX2duQ9vXe33YRA',
            'th' => ['title' => 'โรงพยาบาลกาญจนบุรี เมโมเรียล', 'address' => '111 ม. 5 ถ.แสงชูโต เมืองกาญจนบุรี กาญจนบุรี 71000'],
            'en' => ['title' => 'KANJANABURI MEMORIAL HOSPITAL', 'address' => '111 ม. 5 Sangchuto Rd Mueang Kanchanaburi Kanchanaburi 71000'],
        ];
        $arr[] = [
            'tel' => '035 340 002', 'cat_id' => '90',
            'website' => '-',
            'province' => '02', 'location' => 'https://goo.gl/maps/XX6qXn8AhDeJrtc97',
            'th' => ['title' => 'โรงพยาบาลท่าเรือ', 'address' => '456 - ท่ามะกา กาญจนบุรี 71120'],
            'en' => ['title' => 'THARUEA HOSPITAL', 'address' => '456 - Tha Maka Kanchanaburi 71120'],
        ];
        $arr[] = [
            'tel' => '034 540 601', 'cat_id' => '90',
            'website' => '-',
            'province' => '02', 'location' => 'https://goo.gl/maps/iYhDtyD6njMwDAZB8',
            'th' => ['title' => 'โรงพยาบาลธนกาญจน์', 'address' => '20/20 ถ.แสงชูโต เมืองกาญจนบุรี กาญจนบุรี 71000'],
            'en' => ['title' => 'THANAKARN HOSPITAL', 'address' => '20/20 Sangchuto Rd Mueang Kanchanaburi Kanchanaburi 71000'],
        ];
        $arr[] = [
            'tel' => '034 611 033', 'cat_id' => '91',
            'website' => '-',
            'province' => '02', 'location' => 'https://goo.gl/maps/NSL8MUJVEkRQGG8u7',
            'th' => ['title' => 'โรงพยาบาลสมเด็จพระสังฆราชองค์ที่ 19', 'address' => '978/1 หมู่ 3 - ท่าม่วง กาญจนบุรี 71110'],
            'en' => ['title' => 'SOMDEJPRASANGKHARACH19 HOSPITAL', 'address' => '978/1 Moo 3 - Tha Muang Kanchanaburi 71110'],
        ];
        $arr[] = [
            'tel' => '055 518 200', 'cat_id' => '90',
            'website' => 'www.msihospital.com',
            'province' => '16', 'location' => 'https://goo.gl/maps/iKFpCfCry5snwDhj8',
            'th' => ['title' => 'โรงพยาบาลนครแม่สอดอินเตอร์เนชั่นแนล', 'address' => '222 หมู่ 9 - แม่สอด ตาก 63110'],
            'en' => ['title' => 'NAKORN MAESOT INTERNATIONAL HOSPITAL', 'address' => '222 Moo 9 - Mae Sot Tak 63110'],
        ];
        $arr[] = [
            'tel' => '055 533 912', 'cat_id' => '90',
            'website' => 'www.maesotram.com',
            'province' => '16', 'location' => 'https://goo.gl/maps/fMQE4cS3UyXoqWhF9',
            'th' => ['title' => 'โรงพยาบาลแม่สอด-ราม', 'address' => '3/24 ถ.ราษฎร์อุทิศ แม่สอด ตาก 63110'],
            'en' => ['title' => 'MAESOD-RAM HOSPITAL', 'address' => '3/24 Raj Uthit Road Mae Sot Tak 63110'],
        ];
        $arr[] = [
            'tel' => '032 616 800', 'cat_id' => '90',
            'website' => 'http://www.bangkokhospital.com',
            'province' => '28', 'location' => 'https://g.page/Bangkokhospitalhuahin?share',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพหัวหิน', 'address' => '888 ถ.เพชรเกษม หัวหิน ประจวบคีรีขันธ์ 77110'],
            'en' => ['title' => 'BANGKOK HOSPITAL HUA HIN', 'address' => '888 Phet Kasem Rd Hua-Hin Prachuap Khiri Khan 77110'],
        ];
        $arr[] = [
            'tel' => '032 532 576', 'cat_id' => '90',
            'website' => 'http://www.sanpaulo.co.th',
            'province' => '28', 'location' => 'https://goo.gl/maps/AekzFCd3AxCYEyRw6',
            'th' => ['title' => 'โรงพยาบาลซานเปาโลหัวหิน', 'address' => '222 ถ.เพชรเกษม หัวหิน ประจวบคีรีขันธ์ 77110'],
            'en' => ['title' => 'SAN PAOLO HUAHIN HOSPITAL', 'address' => '222 Phet Kasem Rd Hua-Hin Prachuap Khiri Khan 77110'],
        ];
        $arr[] = [
            'tel' => '032 897 888', 'cat_id' => '90',
            'website' => 'www.bangkokhospital.com',
            'province' => '36', 'location' => 'https://goo.gl/maps/yu6NGBpkpMseSt8H8',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพเพชรบุรี', 'address' => '150 หมู่ 6 ถ.เพชรเกษม เมืองเพชรบุรี เพชรบุรี 76000'],
            'en' => ['title' => 'BANGKOK PHETCHABURI HOSPITAL', 'address' => '150 Moo 6 Phet Kasem Rd Mueang Phetchaburi Petchburi 76000'],
        ];
        $arr[] = [
            'tel' => '032 417 070', 'cat_id' => '90',
            'website' => 'www.petcharat-hospital.com',
            'province' => '36', 'location' => 'https://goo.gl/maps/mxHtQn26hJuPy7Ep7',
            'th' => ['title' => 'โรงพยาบาลมหาชัยเพชรรัชต์', 'address' => '99/9 หมู่ 6 - เมืองเพชรบุรี เพชรบุรี 76000'],
            'en' => ['title' => 'MAHACHAI PETCHARAT HOSPITAL', 'address' => '99/9 Moo 6 - Mueang Phetchaburi Petchburi 76000'],
        ];
        $arr[] = [
            'tel' => '032 322 274', 'cat_id' => '90',
            'website' => 'www.muangraj.com',
            'province' => '47', 'location' => 'https://goo.gl/maps/BF5jCKgksETCtViy6',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพเมืองราช', 'address' => '59/3 ถ.เพชรเกษมสายเก่า เมืองราชบุรี ราชบุรี 70000'],
            'en' => ['title' => 'MUANGRAJ HOSPITAL', 'address' => '59/3 Petchkasem Old Road Mueang Ratchaburi Ratchburi 70000'],
        ];
        $arr[] = [
            'tel' => '032 246 000', 'cat_id' => '91',
            'website' => 'www.dnhospital.go.th',
            'province' => '47', 'location' => 'https://g.page/dnhosp?share',
            'th' => ['title' => 'โรงพยาบาลดำเนินสะดวก', 'address' => '146 หมู่ 4 - ดำเนินสะดวก ราชบุรี 70130'],
            'en' => ['title' => 'DUMNGUENSADUAG HOSPITAL', 'address' => '146 Moo 4 - Damnoen Saduak Ratchburi 70130'],
        ];
        $arr[] = [
            'tel' => '032 222 841', 'cat_id' => '91',
            'website' => 'www.bph.moph.go.th',
            'province' => '47', 'location' => 'https://goo.gl/maps/vEKKvreVQV1fdW2c6',
            'th' => ['title' => 'โรงพยาบาลบ้านโป่ง', 'address' => '12 ถ.แสงชูโต อ.บ้านโป่ง ราชบุรี 70110'],
            'en' => ['title' => 'BANPONG HOSPITAL', 'address' => '12 Sangchuto Rd Amphoe Ban Pong Ratchburi 70110'],
        ];
        $arr[] = [
            'tel' => '032 328 521', 'cat_id' => '90',
            'website' => 'www.prompathyahospital.com',
            'province' => '47', 'location' => 'https://goo.gl/maps/Dp5XqrmWuNHmTTDN8',
            'th' => ['title' => 'โรงพยาบาลพร้อมแพทย์', 'address' => '77/4 ถ.คฑาธร เมืองราชบุรี ราชบุรี 70000'],
            'en' => ['title' => 'PROMPHEAT HOSPITAL', 'address' => '77/4 Khatha Thorn Rd Mueang Ratchaburi Ratchburi 70000'],
        ];
        $arr[] = [
            'tel' => '039 319 888', 'cat_id' => '90',
            'website' => 'www.chanthaburihospital.com',
            'province' => '06', 'location' => 'https://g.page/bdmschanthaburi?share',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพจันทบุรี', 'address' => '25/14 - เมืองจันทบุรี จันทบุรี 22000'],
            'en' => ['title' => 'BANGKOK CHANTHABURI HOSPITAL', 'address' => '25/14 - Mueang Chanthaburi Chantaburi 22000'],
        ];
        $arr[] = [
            'tel' => '039 319 666', 'cat_id' => '91',
            'website' => 'www.ppkhosp.go.th',
            'province' => '06', 'location' => 'https://goo.gl/maps/Zw1gTYEESZTspRv47',
            'th' => ['title' => 'โรงพยาบาลพระปกเกล้า', 'address' => '38 ถ.เลียบเนิน เมืองจันทบุรี จันทบุรี 22000'],
            'en' => ['title' => 'PHRAPOKLAO HOSPITAL', 'address' => '38 Leab Noen Rd Mueang Chanthaburi Chantaburi 22000'],
        ];
        $arr[] = [
            'tel' => '039 605 666', 'cat_id' => '90',
            'website' => 'www.sirivejhospital.com',
            'province' => '06', 'location' => 'https://goo.gl/maps/b8hEGKrkVnqq7jjB6',
            'th' => ['title' => 'โรงพยาบาลสิริเวช', 'address' => '151 หมู่ 7 ถ.ตรีรัตน์ เมืองจันทบุรี จันทบุรี 22000'],
            'en' => ['title' => 'SIRIVEJ HOSPITAL', 'address' => '151 Moo 7 Chanthanimit Mueang Chanthaburi Chantaburi 22000'],
        ];
        $arr[] = [
            'tel' => '038 500 300', 'cat_id' => '90',
            'website' => 'www.chularat.com',
            'province' => '07', 'location' => 'https://goo.gl/maps/7SgpCw4ZMHeegPLf9',
            'th' => ['title' => 'โรงพยาบาลจุฬารัตน์ 11', 'address' => '185/1 หมู่ 1 ถ.บางนา-ตราด  กม.42 บางปะกง ฉะเชิงเทรา 24180'],
            'en' => ['title' => 'CHULARAT 11 HOSPITAL', 'address' => '185/1 Moo 1 Bangna - Trad. Km 42 Bang Pakong Chachoengsao 24180'],
        ];
        $arr[] = [
            'tel' => '038 551 444', 'cat_id' => '91',
            'website' => 'www.phanomsarakhamhospital.com',
            'province' => '07', 'location' => 'https://goo.gl/maps/4o2K36HzeY9nfx8T6',
            'th' => ['title' => 'โรงพยาบาลพนมสารคาม', 'address' => '490 หมู่ 4 ต.ท่าถ่าน - พนมสารคาม ฉะเชิงเทรา 24120'],
            'en' => ['title' => 'PHANOMSARAKHAM', 'address' => '490 Moo 4 Tha Than Subdistrict - Phanom Sarakham Chachoengsao 24120'],
        ];
        $arr[] = [
            'tel' => '038 812 702', 'cat_id' => '90',
            'website' => 'www.kasemrad.co.th',
            'province' => '07', 'location' => 'https://g.page/Kasemrad-Ch?share',
            'th' => ['title' => 'โรงพยาบาลเกษมราษฎร์ฉะเชิงเทรา', 'address' => 'เลขที่ 29 ถ.สุวินทวงศ์ เมืองฉะเชิงเทรา ฉะเชิงเทรา 24000'],
            'en' => ['title' => 'KASEMRAD CHACHOENGSAO', 'address' => '29 Suwinthawong Rd Amphoe Mueang Chachoengsao Chachoengsao 24000'],
        ];
        $arr[] = [
            'tel' => '033 050 600', 'cat_id' => '90',
            'website' => 'https://www.chularat.com/index.php?lang=th',
            'province' => '07', 'location' => 'https://goo.gl/maps/oCMhmENiFX53edZu6',
            'th' => ['title' => 'โรงพยาบาลรวมแพทย์ฉะเชิงเทรา', 'address' => '88/122-123 ถ.ฉะเชิงเทรา-พนมสารคาม เมืองฉะเชิงเทรา, ฉะเชิงเทรา 24000'],
            'en' => ['title' => 'RUMPAT CHACHOENGSAO HOSPITAL', 'address' => '88/122-123 Chachoengsao-Phanom Sarakham Road Amphoe Mueang Chachoengsao Chachoengsao 24000'],
        ];
        $arr[] = [
            'tel' => '038 259 999', 'cat_id' => '90',
            'website' => 'www.bangkokpattayahospital.com',
            'province' => '08', 'location' => 'https://goo.gl/maps/WmApnjjsu6hSHCSN9',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพพัทยา ', 'address' => '301 หมู่ 6 ถ.สุขุมวิท กม.143 บางละมุง ชลบุรี 20150'],
            'en' => ['title' => 'BANGKOK PATTAYA HOSPITAL', 'address' => '301 Moo 6 Sukhumvit KM 143 บางละมุง Chonburi 20150'],
        ];
        $arr[] = [
            'tel' => '038 931 000', 'cat_id' => '91',
            'website' => 'http://www.cbh.moph.go.th',
            'province' => '08', 'location' => 'https://goo.gl/maps/gSPMqfR95mJz1hCX9',
            'th' => ['title' => 'โรงพยาบาลชลบุรี', 'address' => '69 หมู่ 2 ถ.สุขุมวิท เมืองชลบุรี ชลบุรี 20000'],
            'en' => ['title' => 'CHONBURI HOSPITAL', 'address' => '69 Moo 2 Sukhumvit Rd Amphoe Chon Buri Chonburi 20000'],
        ];
        $arr[] = [
            'tel' => '038 345 111', 'cat_id' => '90',
            'website' => '-',
            'province' => '08', 'location' => 'https://goo.gl/maps/dBPoJ3UAWnnfzqhq5',
            'th' => ['title' => 'โรงพยาบาลปิยะเวชช์ บ่อวิน', 'address' => '28/8  หมู่ 8 ถนน 331 ศรีราชา ชลบุรี 20210'],
            'en' => ['title' => 'PIYAVEJJ BOWIN HOSPITAL', 'address' => '28/8  Moo 8 Tambon Bo Win Amphoe Si Racha Chonburi 20210'],
        ];
        $arr[] = [
            'tel' => '038 317 333', 'cat_id' => '90',
            'website' => 'www.phyathai-sriracha.com',
            'province' => '08', 'location' => 'https://g.page/PTShospital?share',
            'th' => ['title' => 'โรงพยาบาลพญาไท ศรีราชา', 'address' => '90 ถ.ศรีราชานคร 3 ศรีราชา ชลบุรี 20110'],
            'en' => ['title' => 'PHYATHAI SRIRACHA HOSPITAL', 'address' => '90  Si Racha Nakhon 3 Si Racha Chonburi 20110'],
        ];
        $arr[] = [
            'tel' => '038 488 777', 'cat_id' => '90',
            'website' => 'www.pattayamemorial.com',
            'province' => '08', 'location' => 'https://goo.gl/maps/XPVVAhE9PXtmiz4fA',
            'th' => ['title' => 'โรงพยาบาลพัทยาเมโมเรียล', 'address' => '328/1  ถ.พัทยากลาง บางละมุง ชลบุรี 20260'],
            'en' => ['title' => 'PATTAYA MEMORIAL HOSPITAL', 'address' => '328/1  Central Pattaya Rd Bang Lamung Chonburi 20260'],
        ];
        $arr[] = [
            'tel' => '038 316 999', 'cat_id' => '90',
            'website' => 'www.vibharamamata.com',
            'province' => '08', 'location' => 'https://goo.gl/maps/qZyQcJnpJ9gqS7RD6',
            'th' => ['title' => 'โรงพยาบาลวิภารามอมตะนคร', 'address' => '700/888 - เมืองชลบุรี ชลบุรี 20000'],
            'en' => ['title' => 'VIBHARAM AMATANAKORN', 'address' => '700/888 - Amphoe Chon Buri Chonburi 20000'],
        ];
        $arr[] = [
            'tel' => '033 009 800', 'cat_id' => '90',
            'website' => 'www.vibharamlcb.com',
            'province' => '08', 'location' => 'https://goo.gl/maps/21y2rCEzuLsT1kKRA',
            'th' => ['title' => 'โรงพยาบาลวิภารามแหลมฉบัง', 'address' => '107 - ศรีราชา ชลบุรี 20210'],
            'en' => ['title' => 'VIBHARAMLAEMCHABANG HOSPITAL', 'address' => '107 - Amphoe Si Racha Chonburi 20210'],
        ];
        $arr[] = [
            'tel' => '0-3839-0580', 'cat_id' => '91',
            'website' => '-',
            'province' => '08', 'location' => 'https://goo.gl/maps/sVgCLyN9KFUkXtS89',
            'th' => ['title' => 'ศูนย์วิทยาศาสตร์สุขภาพมหาวิทยาลัยบูรพา', 'address' => '169 ถ.ลงหาดบางแสน เมืองชลบุรี ชลบุรี 20130'],
            'en' => ['title' => 'HEALTH SCIENCE CENTER', 'address' => '169 Long Had Bangsaen Rd Amphoe Chon Buri Chonburi 20130'],
        ];
        $arr[] = [
            'tel' => '038 320 300', 'cat_id' => '90',
            'website' => 'www.samitivejhospitals.com',
            'province' => '08', 'location' => 'https://g.page/samitivejsriracha?share',
            'th' => ['title' => 'โรงพยาบาลสมิติเวชศรีราชา ', 'address' => '8 ซ.แหลมเกตุ - ศรีราชา ชลบุรี 20110'],
            'en' => ['title' => 'SAMITIVEJ SRIRACHA HOSPITAL', 'address' => '8 Soi Lamkaet - Si Racha Chonburi 20110'],
        ];
        $arr[] = [
            'tel' => '038 245 700', 'cat_id' => '91',
            'website' => '-',
            'province' => '08', 'location' => 'https://goo.gl/maps/hXL8w6ksCUzkaFFA7',
            'th' => ['title' => 'โรงพยาบาลสมเด็จพระนางเจ้าสิริกิติ์', 'address' => '163 หมู่ 1 ก.ม.10 สัตหีบ ชลบุรี 20180'],
            'en' => ['title' => 'QUEEN SIRIKIT HOSPITAL', 'address' => '163 Moo 1 KM.10 Sattahip Chonburi 20180'],
        ];
        $arr[] = [
            'tel' => '038 320 200', 'cat_id' => '91',
            'website' => '-',
            'province' => '08', 'location' => 'https://goo.gl/maps/q1qhjonYt6WM7n89A',
            'th' => ['title' => 'โรงพยาบาลสมเด็จพระบรมราชเทวี ณ ศรีราชา', 'address' => '290 ถ.เจิมจอมพล ศรีราชา ชลบุรี 20110'],
            'en' => ['title' => 'QUEEN SAWANGWATTANA HOSPITAL', 'address' => '290 Jerm Jom Phon Road Si Racha Chonburi 20110'],
        ];
        $arr[] = [
            'tel' => '038 939 999', 'cat_id' => '90',
            'website' => 'www.aikchol.com',
            'province' => '08', 'location' => 'https://goo.gl/maps/ov1GeWWSKZ6p4eec6',
            'th' => ['title' => 'โรงพยาบาลเอกชล', 'address' => '68/3 หมู่ 2 ถ.พระยาสัจจา เมืองชลบุรี ชลบุรี 20130'],
            'en' => ['title' => 'AIKCHOL HOSPITAL', 'address' => '68/3 Moo 2 Phraya Satcha Road Amphoe Chon Buri Chonburi 20130'],
        ];
        $arr[] = [
            'tel' => '038 939 888', 'cat_id' => '90',
            'website' => 'www.aikchol.com',
            'province' => '08', 'location' => 'https://goo.gl/maps/xkNhAEDtrju9v2wQ8',
            'th' => ['title' => 'โรงพยาบาลเอกชล 2', 'address' => '31/2 หมู่ 3 ถ.อ่างศิลา เมืองชลบุรี ชลบุรี 20130'],
            'en' => ['title' => 'AIKCHOL2 HOSPITAL', 'address' => '31/2 Moo 3 Ang Sila Road Amphoe Chon Buri Chonburi 20130'],
        ];
        $arr[] = [
            'tel' => '033 038 888', 'cat_id' => '90',
            'website' => 'www.samitivejhospitals.com',
            'province' => '08', 'location' => 'https://g.page/dr-samitchon?share',
            'th' => ['title' => 'โรงพยาบาลสมิติเวชชลบุรี', 'address' => '888หมู่3 บ้านสวน เมืองชลบุรี ชลบุรี 20000'],
            'en' => ['title' => 'SAMITIVEJ CHONBURI  HOSPITAL', 'address' => '888 Moo 3 Ban Suan Amphoe Chon Buri Chonburi 20000'],
        ];
        $arr[] = [
            'tel' => '039 612 000', 'cat_id' => '90',
            'website' => 'www.bangkoktrathospital.com',
            'province' => '15', 'location' => 'https://goo.gl/maps/1Hin8BffvSh3svkPA',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพตราด ', 'address' => '376 หมู่ 2 - เมืองตราด ตราด 23000'],
            'en' => ['title' => 'BANGKOK TRAD HOSPITAL', 'address' => '376 Moo 2 - Mueang Trat Trat 23000'],
        ];
        $arr[] = [
            'tel' => '039 511 040', 'cat_id' => '91',
            'website' => 'www.trathospital.go.th',
            'province' => '15', 'location' => 'https://goo.gl/maps/kAUDpoMJkj8Wsn7p6',
            'th' => ['title' => 'โรงพยาบาลตราด', 'address' => '108 ถ.สุขุมวิท เมืองตราด ตราด 23000'],
            'en' => ['title' => 'TRAD HOSPITAL', 'address' => '108 Sukhumvit Rd Mueang Trat Trat 23000'],
        ];
        $arr[] = [
            'tel' => '039 597 040', 'cat_id' => '91',
            'website' => 'www.laemngophos.org',
            'province' => '15', 'location' => 'https://goo.gl/maps/abem574zQEkgqA5S8',
            'th' => ['title' => 'โรงพยาบาลแหลมงอบ', 'address' => '5/5 หมู่ 1 ถ.ตราด - แหลมงอบ แหลมงอบ ตราด 23120'],
            'en' => ['title' => 'LAEMNGOB HOSPITAL', 'address' => '5/5 Moo 1 Trat-Laem Ngop Rd Laem Ngop Trat 23120'],
        ];
        $arr[] = [
            'tel' => '037 239 665', 'cat_id' => '90',
            'website' => '',
            'province' => '29', 'location' => 'https://goo.gl/maps/NP6wn3fMsz2XJKzG9',
            'th' => ['title' => 'โรงพยาบาลจุฬารัตน์ 304 อินเตอร์', 'address' => '151 หมู่ 4  กรอกสมบูรณ์ ศรีมหาโพธิ ปราจีนบุรี 25140'],
            'en' => ['title' => 'CHULARAT 304 INTER', 'address' => '151 Moo 4  Soi Industrial Estate Soi 304 Tha Tum Amphoe Si Maha Phot Prachin Buri 25140'],
        ];
        $arr[] = [
            'tel' => '037 211 088', 'cat_id' => '91',
            'website' => 'www.cpa.go.th',
            'province' => '29', 'location' => 'https://goo.gl/maps/xmJQU8nL2kNLpSwy7',
            'th' => ['title' => 'โรงพยาบาลเจ้าพระยาอภัยภูเบศร', 'address' => '32/7 ซอย เทศบาลดำริ 7 - เมืองปราจีนบุรี ปราจีนบุรี 25000'],
            'en' => ['title' => 'CHAOPRAYA ABHAIPHUBEJHR HOSPITAL', 'address' => '32/7  Prachin Anuson Rd Mueang Prachinburi Prachin Buri 25000'],
        ];
        $arr[] = [
            'tel' => '038 921 999', 'cat_id' => '90',
            'website' => 'www.bangkokrayong.com',
            'province' => '46', 'location' => 'https://goo.gl/maps/weXkvKENEBQQei3L9',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพระยอง ', 'address' => '8 หมู่ 2 ถ.แสงจันทร์เนรมิตร เมืองระยอง ระยอง 21000'],
            'en' => ['title' => 'BANGKOK RAYONG HOSPITAL', 'address' => '8 Moo 2 Sangchan Neramit Road Amphoe Mueang Rayong Rayong 21000'],
        ];
        $arr[] = [
            'tel' => '038 860 890', 'cat_id' => '90',
            'website' => 'www.chularat.com',
            'province' => '46', 'location' => 'https://goo.gl/maps/D8X4zehaPyvRAGp76',
            'th' => ['title' => 'โรงพยาบาลจุฬารัตน์ระยอง', 'address' => '65/28 ถ.จันทอุดม เมืองระยอง ระยอง 21000'],
            'en' => ['title' => 'CHULARAT RAYONG HOSPITAL', 'address' => '65/28 Chanthaudom Rd Amphoe Mueang Rayong Rayong 21000'],
        ];
        $arr[] = [
            'tel' => '038 020 100', 'cat_id' => '90',
            'website' => '-',
            'province' => '46', 'location' => 'https://goo.gl/maps/nQsa7MgLXPAci81bA',
            'th' => ['title' => 'โรงพยาบาลปิยะเวชช์ ระยอง', 'address' => '288 หมู่ 3 - ปลวกแดง ระยอง 21140'],
            'en' => ['title' => 'PIYAVEJ RAYONG HOSPITAL', 'address' => '288 Moo 3 - Pluak Daeng Rayong 21140'],
        ];
        $arr[] = [
            'tel' => '038 682 136', 'cat_id' => '90',
            'website' => 'www.mongkutrayong.com',
            'province' => '46', 'location' => 'https://goo.gl/maps/Tqhvq6VsPYfPtTJz6',
            'th' => ['title' => 'โรงพยาบาลมงกุฏระยอง', 'address' => '149/1 ถ.มาบยา เมืองระยอง ระยอง 21150'],
            'en' => ['title' => 'MONG KUT RAYONG HOSPITAL', 'address' => '149/1 Map Ya Rd Amphoe Mueang Rayong Rayong 21150'],
        ];
        $arr[] = [
            'tel' => '038 611 104', 'cat_id' => '91',
            'website' => 'www.rayonghospital.net',
            'province' => '46', 'location' => 'https://goo.gl/maps/jPaz3wjepxs5fHK19',
            'th' => ['title' => 'โรงพยาบาลระยอง', 'address' => '138 ถ.สุขุมวิท เมืองระยอง ระยอง 21000'],
            'en' => ['title' => 'RAYONG HOSPITAL', 'address' => '138 Sukhumvit Rd Amphoe Mueang Rayong Rayong 21000'],
        ];
        $arr[] = [
            'tel' => '038 998 555', 'cat_id' => '90',
            'website' => 'www.bangkokrayong.com',
            'province' => '46', 'location' => 'https://goo.gl/maps/cJhxMvq3RgSgYDh47',
            'th' => ['title' => 'โรงพยาบาลศรีระยอง', 'address' => '8 หมู่ 2 ถ.แสงจันทร์เนรมิต เมืองระยอง ระยอง 21000'],
            'en' => ['title' => 'SRIRAYONG HOSPITAL', 'address' => '8 Moo 2 Sangchan Neramit Road Amphoe Mueang Rayong Rayong 21000'],
        ];
        $arr[] = [
            'tel' => '02 664 2295', 'cat_id' => '91',
            'website' => '-',
            'province' => '09', 'location' => 'https://goo.gl/maps/SSMfMWaUzGiti15q6',
            'th' => ['title' => 'โรงพยาบาลมหาวิทยาลัยแม่ฟ้าหลวง', 'address' => '333 หมู่ 1 - เมืองเชียงราย เชียงราย 57000'],
            'en' => ['title' => 'MAE FAN LUANG UNIVERSITY HOSPITAL', 'address' => '333 Moo 1 - Mueang Chiang Rai Chai Nat 57000'],
        ];
        $arr[] = [
            'tel' => '053 910 999', 'cat_id' => '90',
            'website' => 'www.kasemrad.co.th',
            'province' => '09', 'location' => 'https://goo.gl/maps/zeZBYqe5PsK2fadT8',
            'th' => ['title' => 'โรงพยาบาลเกษมราษฎร์ศรีบุรินทร์', 'address' => '111/5 หมู่ 13 ถ.เอเชีย 1 เมืองเชียงราย เชียงราย 57000'],
            'en' => ['title' => 'KASEMRAD SRIBURIN HOSPITAL', 'address' => '111/5 Moo 13 Asia 1 Road Mueang Chiang Rai Chai Nat 57000'],
        ];
        $arr[] = [
            'tel' => '053 910 600', 'cat_id' => '91',
            'website' => 'www.crhospital.org',
            'province' => '09', 'location' => 'https://goo.gl/maps/ubLgiKgqM9dGdgCU8',
            'th' => ['title' => 'โรงพยาบาลเชียงรายประชานุเคราะห์', 'address' => 'อ.เมือง ถ.สถานพยาบาล เมืองเชียงราย เชียงราย 57000'],
            'en' => ['title' => 'CHIANGHAI PRACHANUKROH HOSPITAL', 'address' => '1039 Satharn Payabarn Rd Mueang Chiang Rai Chai Nat 57000'],
        ];
        $arr[] = [
            'tel' => '053 719 719', 'cat_id' => '90',
            'website' => 'http://www.chiangraiinter.com',
            'province' => '09', 'location' => 'https://goo.gl/maps/pRVUpPNvEdF7x6jw6',
            'th' => ['title' => 'โรงพยาบาลเชียงรายอินเตอร์', 'address' => '123 ถ.พหลโยธิน เมืองเชียงราย เชียงราย 57000'],
            'en' => ['title' => 'CHIANGRAI INTER HOSPITAL', 'address' => '123  Phahonyothin Rd Mueang Chiang Rai Chai Nat 57000'],
        ];
        $arr[] = [
            'tel' => '052 051 800', 'cat_id' => '90',
            'website' => 'https://www.bangkokhospital-chiangrai.com/',
            'province' => '09', 'location' => 'https://goo.gl/maps/Lsg8kZid3nnuVrAe9',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพเชียงราย', 'address' => '369 , หมู่ 13 ถ.พหลโยธิน เมืองเชียงราย เชียงราย 57100'],
            'en' => ['title' => 'BANGKOK HOSPITAL CHIANGRAI', 'address' => '369 , Moo 13  Phahonyothin Rd Mueang Chiang Rai Chai Nat 57100'],
        ];
        $arr[] = [
            'tel' => '053 711 366', 'cat_id' => '90',
            'website' => 'www.overbrook-hospital.com',
            'province' => '09', 'location' => 'https://goo.gl/maps/VtCYu7z5gQttC3QdA',
            'th' => ['title' => 'โรงพยาบาลโอเวอร์บรุ๊ค', 'address' => '17 ถ.สิงหไคล เมืองเชียงราย เชียงราย 57000'],
            'en' => ['title' => 'OVERBROOK HOSPITAL', 'address' => '17 Singhaclai Rd Mueang Chiang Rai Chai Nat 57000'],
        ];
        $arr[] = [
            'tel' => '052 089 888', 'cat_id' => '90',
            'website' => 'www.bangkokhospital-chiangmai.com',
            'province' => '13', 'location' => 'https://goo.gl/maps/x6UUdYQnkvA2QVpG6',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพเชียงใหม่', 'address' => '88/8 หมู่ 6 - เมืองเชียงใหม่ เชียงใหม่ 50000'],
            'en' => ['title' => 'BANGKOK HOSPITAL CHIANGMAI', 'address' => '88/8 Moo 6 - Mueang Chiang Mai Chiang Mai 50000'],
        ];
        $arr[] = [
            'tel' => '053 801 999', 'cat_id' => '90',
            'website' => 'www.rajavejchiangmai.com',
            'province' => '13', 'location' => 'https://goo.gl/maps/TmqNUX2RGAobLaUL9',
            'th' => ['title' => 'โรงพยาบาลราชเวชเชียงใหม่', 'address' => '316/1 ถ.เชียงใหม่ - ลำพูน เมืองเชียงใหม่ เชียงใหม่ 50100'],
            'en' => ['title' => 'RAJAVEJ CHIANGMAI HOSPITAL', 'address' => '316/1 Chiang Mai-Lamphun Rd Mueang Chiang Mai Chiang Mai 50100'],
        ];
        $arr[] = [
            'tel' => '052 134 777', 'cat_id' => '90',
            'website' => 'www.lanna-hospital.com',
            'province' => '13', 'location' => 'https://g.page/lannahospital?share',
            'th' => ['title' => 'โรงพยาบาลลานนา', 'address' => '1 ถ.สุขเกษม เมืองเชียงใหม่ เชียงใหม่ 50300'],
            'en' => ['title' => 'LANNA HOSPITAL', 'address' => '1 Sookasam Rd Mueang Chiang Mai Chiang Mai 50300'],
        ];
        $arr[] = [
            'tel' => '053 969 600', 'cat_id' => '91',
            'website' => 'www.cmed.cmu.ac.th',
            'province' => '13', 'location' => 'https://goo.gl/maps/Ub233xyqZ2b2kuis9',
            'th' => ['title' => 'ศูนย์ศรีพัฒน์ คณะแพทย์ศาสตร์ มหาวิทยาลัยเชียงใหม่', 'address' => '110/392 อาคารศรีพัฒน์ ถ.อินทวโรรส เมืองเชียงใหม่ เชียงใหม่ 50200'],
            'en' => ['title' => 'SRIPHAT MEDICAL CENTER FACULTY OF MEDICINE,CHIANG MAI UNIVERSITY', 'address' => '110/392 Sriphat Intarawororot Building Intawarorot Road Mueang Chiang Mai Chiang Mai 50200'],
        ];
        $arr[] = [
            'tel' => '053 411 234', 'cat_id' => '90',
            'website' => 'www.chiangmaihospital.co.th',
            'province' => '13', 'location' => 'https://g.page/ChiangmaiHospital?share',
            'th' => ['title' => 'โรงพยาบาลเชียงใหม่ ฮอสพิทอล (สยามราษฎร์ เชียงใหม่)', 'address' => '84/3 ถ.เชียงใหม่-ลำปาง เมืองเชียงใหม่ เชียงใหม่ 50300'],
            'en' => ['title' => 'CHIANGMAI HOSPITAL', 'address' => '84/3 Chiang Mai-Lampang Road Mueang Chiang Mai Chiang Mai 50300'],
        ];
        $arr[] = [
            'tel' => '053 270 145', 'cat_id' => '90',
            'website' => 'http://cmc-hospital.com',
            'province' => '13', 'location' => 'https://goo.gl/maps/VVtW79Ccm2JGXjXY6',
            'th' => ['title' => 'โรงพยาบาลเชียงใหม่ เมดิคอลเซ็นเตอร์', 'address' => '21 ถ.นันทาราม เมืองเชียงใหม่ เชียงใหม่ 50100'],
            'en' => ['title' => 'CHIANGMAI MEDICAL CENTER HOSPITAL', 'address' => '21 Nantaram Rd Mueang Chiang Mai Chiang Mai 50100'],
        ];
        $arr[] = [
            'tel' => '053 920 300', 'cat_id' => '90',
            'website' => 'www.chiangmairam.com',
            'province' => '13', 'location' => 'https://goo.gl/maps/ww5oH6MKPZ6pUHVY6',
            'th' => ['title' => 'โรงพยาบาลเชียงใหม่ราม', 'address' => '8 ถ.บุญเรืองฤทธิ์ เมืองเชียงใหม่ เชียงใหม่ 50200'],
            'en' => ['title' => 'CHIANGMAI RAM HOSPITAL', 'address' => '8 Bunrueang Rit Rd Mueang Chiang Mai Chiang Mai 50200'],
        ];
        $arr[] = [
            'tel' => '053 200 002', 'cat_id' => '90',
            'website' => 'www.chiangmaiklaimor-hosp.com',
            'province' => '13', 'location' => 'https://goo.gl/maps/eFv78QJfSytPMv6u5',
            'th' => ['title' => 'โรงพยาบาลเชียงใหม่ใกล้หมอ', 'address' => '158 หมู่ 10 ถ.เชียงใหม่-ฮอด เมืองเชียงใหม่ เชียงใหม่ 50100'],
            'en' => ['title' => 'CHIANGMAI KLAIMOR HOSPITAL', 'address' => '158 Moo 10 Chiang Mai-Hot Road Mueang Chiang Mai Chiang Mai 50100'],
        ];
        $arr[] = [
            'tel' => '053 819 333', 'cat_id' => '90',
            'website' => 'www.centralchiangmaihospital.com',
            'province' => '13', 'location' => 'https://goo.gl/maps/yczfyTwM1se8bxXRA',
            'th' => ['title' => 'โรงพยาบาลเซ็นทรัลเชียงใหม่ เมโมเรียล', 'address' => '186/2 ถ.ช้างคลาน เมืองเชียงใหม่ เชียงใหม่ 50100'],
            'en' => ['title' => 'CENTRAL CHIANGMAI MEMORIAL HOSPITAL', 'address' => '186/2 Changklan Rd Mueang Chiang Mai Chiang Mai 50100'],
        ];
        $arr[] = [
            'tel' => '053 852 592', 'cat_id' => '90',
            'website' => 'www.theppanya.com',
            'province' => '13', 'location' => 'https://goo.gl/maps/2sNhkfyY9kk1ZqX89',
            'th' => ['title' => 'โรงพยาบาลเทพปัญญา', 'address' => '99 หมู่ 5 ถ.เชียงใหม่-ลำปาง เมืองเชียงใหม่ เชียงใหม่ 50000'],
            'en' => ['title' => 'THEPPANYA HOSPITAL', 'address' => '99 Moo 5 Chiang Mai-Lampang Road Mueang Chiang Mai Chiang Mai 50000'],
        ];
        $arr[] = [
            'tel' => '053 220 022', 'cat_id' => '90',
            'website' => 'www.theppanya2-hospital.com',
            'province' => '13', 'location' => 'https://goo.gl/maps/THsLLgmzsqKZfmVF8',
            'th' => ['title' => 'โรงพยาบาลเทพปัญญา 2 (เดิมชื่อรพ.ช้างเผือก) ', 'address' => '1/7 ซอย 2 ถ.ช้างเผือก เมืองเชียงใหม่ เชียงใหม่ 50000'],
            'en' => ['title' => 'THEPPANYA 2  HOSPITAL', 'address' => '1/7 Soi 2 Chang Phueak Road Mueang Chiang Mai Chiang Mai 50000'],
        ];
        $arr[] = [
            'tel' => '0-5392-1777', 'cat_id' => '90',
            'website' => 'www.mccormick.in.th',
            'province' => '13', 'location' => 'https://goo.gl/maps/29xj9vyvUQM2THhi8',
            'th' => ['title' => 'โรงพยาบาลแมคคอร์มิค', 'address' => '133 ถ.แก้วนวรัฐ เมืองเชียงใหม่ เชียงใหม่ 50000'],
            'en' => ['title' => 'MCCORMICK CHIANGMAI HOSPITAL', 'address' => '133 Kaeonawarat Rd Mueang Chiang Mai Chiang Mai 50000'],
        ];
        $arr[] = [
            'tel' => '054 411 111', 'cat_id' => '90',
            'website' => 'www.phayaoram.com',
            'province' => '71', 'location' => 'https://goo.gl/maps/sLovZ3QyajBFraSTA',
            'th' => ['title' => 'โรงพยาบาลพะเยา ราม', 'address' => '660 หมู่ 3 ถ.พหลโยธิน เมืองพะเยา พะเยา 56000'],
            'en' => ['title' => 'PHAYAO RAM HOSPITAL', 'address' => '660 Moo 3  Phahonyothin Rd Mueang Phayao Pa Yao 56000'],
        ];
        $arr[] = [
            'tel' => '054 511 494', 'cat_id' => '90',
            'website' => 'www.phraechristian.com',
            'province' => '38', 'location' => 'https://goo.gl/maps/YWC3Wcgk37HYFkHk8',
            'th' => ['title' => 'โรงพยาบาลแพร่คริสเตียน', 'address' => '7 ถ.ยันตรกิจโกศล เมืองแพร่ แพร่ 54000'],
            'en' => ['title' => 'PHREACHRISTIAN HOSPITAL', 'address' => '7 Yantrakit Kosol Rd Amphoe Mueang Phrae Phrae 54000'],
        ];
        $arr[] = [
            'tel' => '054 522 911', 'cat_id' => '90',
            'website' => '-',
            'province' => '38', 'location' => 'https://goo.gl/maps/PHXhTiwvQ7omMeov7',
            'th' => ['title' => 'โรงพยาบาลแพร่ราม', 'address' => '3 ตรอกยันตรกิจโกศล 1 ถ.ยันตรกิจโกศล เมืองแพร่ แพร่ 54000'],
            'en' => ['title' => 'PHRAE- RAM HOSPITAL', 'address' => '3 Yantrakit Kosol 1 Alley Yantrakit Kosol Rd Amphoe Mueang Phrae Phrae 54000'],
        ];
        $arr[] = [
            'tel' => '054 533 500', 'cat_id' => '91',
            'website' => 'www.phraehospital.co.th ',
            'province' => '38', 'location' => 'https://goo.gl/maps/GZyxEnmQrKTf6fpf6',
            'th' => ['title' => 'โรงพยาบาลแพร่', 'address' => '144 ถนนซ่อแฮ  ถนนซ่อแฮ ต.เวียงใน  เมืองแพร่ แพร่ 54000'],
            'en' => ['title' => 'KERANGNAKORN RAM HOSPITAL', 'address' => '79/12  Phahonyothin Rd Amphoe Mueang Lampang Phrae 54000'],
        ];
        $arr[] = [
            'tel' => '054 019 619', 'cat_id' => '90',
            'website' => '-',
            'province' => '38', 'location' => 'https://goo.gl/maps/U33AyjJ5LDCjaizu9',
            'th' => ['title' => 'โรงพยาบาลเขลางค์นคร - ราม', 'address' => '79/12 ถ.พหลโยธิน เมืองลำปาง ลำปาง 52220'],
            'en' => ['title' => 'SIRIVEJ LUMPHUN HOSPITAL BY PRINCIPAL HEALTHCARE COMPANY', 'address' => ' - mphoe Mueang Lamphun Phrae 52220'],
        ];
        $arr[] = [
            'tel' => '053 096 440', 'cat_id' => '90',
            'website' => 'www.sirivejlamphunhospital.com',
            'province' => '38', 'location' => 'https://goo.gl/maps/1BKVutxtv7pYeDL19',
            'th' => ['title' => 'โรงพยาบาลศิริเวชลำพูน โดย พริ้นซิเพิล เฮลท์แคร์ จำกัด', 'address' => ' - เมืองลำพูน ลำพูน 51000'],
            'en' => ['title' => 'HARIPHUNCHAI MEMORAL HOSPITAL', 'address' => '109/111 Lamphun-Banthi Road mphoe Mueang Lamphun Phrae 51000'],
        ];
        $arr[] = [
            'tel' => '053 581 600', 'cat_id' => '90',
            'website' => 'www.hariphunchai.net',
            'province' => '38', 'location' => 'https://goo.gl/maps/aYPpjcfRG9X7Qmp39',
            'th' => ['title' => 'โรงพยาบาลหริภุญชัยเมโมเรียล', 'address' => '109/111 ถ.ลำพูน-บ้านธิ เมืองลำพูน ลำพูน 51000'],
            'en' => ['title' => 'PISANUVEJ UTTARADIT HOSPITAL', 'address' => '888 Moo 5    Mueang Uttaradit UTTARADIT 51000'],
        ];
        $arr[] = [
            'tel' => '055 409 000', 'cat_id' => '90',
            'website' => '',
            'province' => '68', 'location' => 'https://goo.gl/maps/q2quxcrhi6hzJYnp9',
            'th' => ['title' => 'โรงพยาบาลพิษณุเวช อุตรดิตถ์', 'address' => '888 หมู่ 5    เมืองอุตรดิตถ์ อุตรดิตถ์ 53000'],
            'en' => ['title' => 'THIRAWAT HOSPITAL', 'address' => '269/3 Thanaphon Road Amphoe Mueang Kalasin Kalasin 53000'],
        ];
        $arr[] = [
            'tel' => '043 811 757', 'cat_id' => '90',
            'website' => '-',
            'province' => '03', 'location' => 'https://goo.gl/maps/W8jaL1UFQXg1JPvG6',
            'th' => ['title' => 'โรงพยาบาลธีรวัฒน์', 'address' => '269/3 ถ.ธนะผล เมืองกาฬสินธุ์ กาฬสินธุ์ 46000'],
            'en' => ['title' => 'BANGKOK KHON KAEN HOSPITAL', 'address' => '888 Moo 16 - Amphoe Mueang Khon Kaen Khoan Kaen 46000'],
        ];
        $arr[] = [
            'tel' => '043 042 888', 'cat_id' => '90',
            'website' => 'www.bangkokhospitalkhonkaen.com',
            'province' => '05', 'location' => 'https://goo.gl/maps/cTAWp97BduvJt2Ba6',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพขอนแก่น', 'address' => '888 หมู่ 16 - เมืองขอนแก่น ขอนแก่น 40000'],
            'en' => ['title' => 'KHON KAEN HOSPITAL', 'address' => '54 Srichand Road Amphoe Mueang Khon Kaen Khoan Kaen 40000'],
        ];
        $arr[] = [
            'tel' => '043 009 900', 'cat_id' => '91',
            'website' => 'www.kkh.go.th',
            'province' => '05', 'location' => 'https://goo.gl/maps/odkykJNS73E2JQZF6',
            'th' => ['title' => 'โรงพยาบาลขอนแก่น', 'address' => '54 ถ.ศรีจันทร์ เมืองขอนแก่น ขอนแก่น 40000'],
            'en' => ['title' => 'KHON KAEN - RAM HOSPITAL', 'address' => '193 Srichand Road Amphoe Mueang Khon Kaen Khoan Kaen 40000'],
        ];
        $arr[] = [
            'tel' => '043 002 002', 'cat_id' => '90',
            'website' => 'www.khonkaenram.com',
            'province' => '05', 'location' => 'https://g.page/KKRAM?share',
            'th' => ['title' => 'โรงพยาบาลขอนแก่นราม', 'address' => '193 ถ.ศรีจันทร์ เมืองขอนแก่น ขอนแก่น 40000'],
            'en' => ['title' => 'RAJCHAPRUK HOSPITAL', 'address' => '150/18 Mittraphap Road Amphoe Mueang Khon Kaen Khoan Kaen 40000'],
        ];
        $arr[] = [
            'tel' => '043 333 555', 'cat_id' => '90',
            'website' => 'www.rph.co.th',
            'province' => '05', 'location' => 'https://goo.gl/maps/Usz7ZpXfu3i4XuBw9',
            'th' => ['title' => 'โรงพยาบาลราชพฤกษ์', 'address' => '150/18 ถ.มิตรภาพ เมืองขอนแก่น ขอนแก่น 40000'],
            'en' => ['title' => 'SRINAKARIN HOSPITAL KHONKAEN UNIVERSITY', 'address' => '123 Mittraphap Road Amphoe Mueang Khon Kaen Khoan Kaen 40000'],
        ];
        $arr[] = [
            'tel' => '043 348 888', 'cat_id' => '91',
            'website' => 'www.srinagarind.md.kku.ac.th',
            'province' => '05', 'location' => 'https://goo.gl/maps/P1oHajf8SjA8H7Y5A',
            'th' => ['title' => 'โรงพยาบาลศรีนครินทร์ มหาวิทยาลัยขอนแก่น
(เฉพาะหอผู้ป่วยพิเศษชั้น 14 อาคารสมเด็จพระศรีนครินทราบรมราชชนนีอนุสรณ์)', 'address' => '123 ถ.มิตรภาพ เมืองขอนแก่น ขอนแก่น 40000'],
            'en' => ['title' => 'CHAIYAPHUM HOSPITAL', 'address' => '12  Tribunal Road Chaiyaphum  Chaiyaphum 40000'],
        ];
        $arr[] = [
            'tel' => '044 811 005', 'cat_id' => '91',
            'website' => 'https://cph.moph.go.th',
            'province' => '10', 'location' => 'https://goo.gl/maps/uoPAm9HiYU5mCAVQ7',
            'th' => ['title' => 'โรงพยาบาลชัยภูมิ', 'address' => '12 ถ.บรรณาการ เมืองชัยภูมิ ชัยภูมิ 36000'],
            'en' => ['title' => 'CHAIYAPHUMRUAMPHEAT', 'address' => '6/9 Niwet Rat Rd Chaiyaphum  Chaiyaphum 36000'],
        ];
        $arr[] = [
            'tel' => '044 813 222', 'cat_id' => '90',
            'website' => '-',
            'province' => '10', 'location' => 'https://goo.gl/maps/KbUVCGM8urAa54NY6',
            'th' => ['title' => 'โรงพยาบาลชัยภูมิรวมแพทย์', 'address' => '6/9 ถ.ชัยประสิทธิ์ เมืองชัยภูมิ ชัยภูมิ 36000'],
            'en' => ['title' => 'CHAIYAPHUM RAM', 'address' => '290/42 Ban Nong Sang Village Moo 6 Chaiyaphum -Sikhio Road Chaiyaphum  Chaiyaphum 36000'],
        ];
        $arr[] = [
            'tel' => '044 813 666', 'cat_id' => '90',
            'website' => '-',
            'province' => '10', 'location' => 'https://goo.gl/maps/mqwrsHNy67zVCuwE8',
            'th' => ['title' => 'โรงพยาบาลชัยภูมิราม', 'address' => '290/42 บ้านหนองสังข์ หมู่ 6 ถ.ชัยภูมิ - สีคิ้ว เมืองชัยภูมิ ชัยภูมิ 36000'],
            'en' => ['title' => 'BANGKOK HOSPITAL PAKCHONG', 'address' => '5/1 Mittraphap Rd Amphoe Pak Chong Nakhon Sawan 36000'],
        ];
        $arr[] = [
            'tel' => '044 316 611', 'cat_id' => '90',
            'website' => '-',
            'province' => '20', 'location' => 'https://goo.gl/maps/TPmBdbaqs3qUKSFm9',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพ ปากช่อง', 'address' => '5/1 ถ.มิตรภาพ ปากช่อง นครราชสีมา 30130'],
            'en' => ['title' => 'BANGKOK RATCHASIMA HOSPITAL', 'address' => '1308/9 Mittraphap Rd Amphoe Mueang Nakhon Ratchasima Nakhon Sawan 30130'],
        ];
        $arr[] = [
            'tel' => '044 429 999', 'cat_id' => '90',
            'website' => 'www.bkh.co.th',
            'province' => '20', 'location' => 'https://goo.gl/maps/PPQv6X3KuW8BL6Ms6',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพราชสีมา', 'address' => '1308/9 ถ.มิตรภาพ เมืองนครราชสีมา นครราชสีมา 30000'],
            'en' => ['title' => 'BUAYAIRUAMPHET HOSPITAL', 'address' => '5/1 Thetsaban Road 12 Bua Yai Nakhon Sawan 30000'],
        ];
        $arr[] = [
            'tel' => '081 718 3781', 'cat_id' => '90',
            'website' => '-',
            'province' => '20', 'location' => 'https://goo.gl/maps/nxBEVfcwUAdYwmeJ8',
            'th' => ['title' => 'โรงพยาบาลบัวใหญ่รวมแพทย์', 'address' => '5/1 ถ.เทศบาล 5 บัวใหญ่ นครราชสีมา 30120'],
            'en' => ['title' => 'RIM LIVING', 'address' => '256 Moo 3 Ratchasima-Pak Thong Chai Rd. Amphoe Mueang Nakhon Ratchasima Nakhon Sawan 30120'],
        ];
        $arr[] = [
            'tel' => '044 756 313', 'cat_id' => '90',
            'website' => '-',
            'province' => '20', 'location' => 'https://goo.gl/maps/qkcLm3X6JocJgv5u7',
            'th' => ['title' => 'โรงพยาบาลริม ลิฟวิ่ง', 'address' => '256 หมู่ 3 ถ.ราชสีมา-ปักธงชัย เมืองนครราชสีมา นครราชสีมา 3000'],
            'en' => ['title' => 'SAINT MARYS HOSPITAL', 'address' => '307 Mittraphap-Nongkhai Road Amphoe Mueang Nakhon Ratchasima Nakhon Sawan 3000'],
        ];
        $arr[] = [
            'tel' => '044 240 240', 'cat_id' => '90',
            'website' => 'www.smhkorat.com',
            'province' => '20', 'location' => 'https://g.page/smhkorat?share',
            'th' => ['title' => 'โรงพยาบาลเซนต์เมรี่', 'address' => '307 ถ.มิตรภาพ-หนองคาย เมืองนครราชสีมา นครราชสีมา 30000'],
            'en' => ['title' => 'SURANAREE UNIVERSITY OF TECHNOLOGY HOSPITAL', 'address' => '111 University Road Mueang Nakhon Ratchasima Nakhon Sawan 30000'],
        ];
        $arr[] = [
            'tel' => '044 376 555', 'cat_id' => '91',
            'website' => '-',
            'province' => '20', 'location' => 'https://goo.gl/maps/HiJPECazPPRGCiAL7',
            'th' => ['title' => 'โรงพยาบาลมหาวิทยาลัยเทคโนโลยีสุรนารี', 'address' => '111 ถ.มหาวิทยาลัย เมืองนครราชสีมา นครราชสีมา 30000'],
            'en' => ['title' => 'OEKKACHONBURERUM', 'address' => '197 Moo 2 Buriram -Phutthaisong Road Amphoe Mueang Buriram Buri Ram 30000'],
        ];
        $arr[] = [
            'tel' => '044 614 100', 'cat_id' => '90',
            'website' => '-',
            'province' => '26', 'location' => 'https://goo.gl/maps/RzPLetgrsXaM9r9S8',
            'th' => ['title' => 'โรงพยาบาลเอกชนบุรีรัมย์', 'address' => '197 หมู่ 2 ถ.บุรีรัมย์-พุทไธสง เมืองบุรีรัมย์ บุรีรัมย์ 31000'],
            'en' => ['title' => 'MAHASARAKHAM INTERNATIONAL HOSPITAL', 'address' => '112 Thetsaban Archa Road Mueang Maha Sarakham Maha Sarakham 31000'],
        ];
        $arr[] = [
            'tel' => '043 721 770', 'cat_id' => '90',
            'website' => 'www.mahasarakhaminternational.com',
            'province' => '40', 'location' => 'https://goo.gl/maps/CXLJqB1aD87nMngx8',
            'th' => ['title' => 'โรงพยาบาลมหาสารคามอินเตอร์เนชั่นแนล', 'address' => '112 เทศบาลอาชา เมืองมหาสารคาม มหาสารคาม 44000'],
            'en' => ['title' => 'MOKDAHAN INTERNATIONAL HOSPITAL', 'address' => '87 Mukdahan-Dontan Road Amphoe Mueang Mukdahan Mukdahan 44000'],
        ];
        $arr[] = [
            'tel' => '042 611 222', 'cat_id' => '90',
            'website' => 'www.mukinter.com',
            'province' => '72', 'location' => 'https://goo.gl/maps/dW9xcPXv9S9L9srM9',
            'th' => ['title' => 'โรงพยาบาลมุกดาหารอินเตอร์เนชั่นแนล', 'address' => '87 ถ.มุกดาหาร-ดอนตาล เมืองมุกดาหาร มุกดาหาร 49000'],
            'en' => ['title' => 'DOCTOR HANN HOSPITAL', 'address' => '160-164 Witthaya Thamrong Rd Amphoe Mueang Yasothon Yasothorn 49000'],
        ];
        $arr[] = [
            'tel' => '045 711 356', 'cat_id' => '90',
            'website' => 'www.drhann.com',
            'province' => '42', 'location' => 'https://goo.gl/maps/jXYps59524VvsQLZ7',
            'th' => ['title' => 'โรงพยาบาลนายแพทย์หาญ', 'address' => '160-164 ถ.วิทยาธำรงค์ เมืองยโสธร ยโสธร 35000'],
            'en' => ['title' => 'RUMPHAT YASOTHON HOSPITAL', 'address' => '29 Mongkolboorapha Rd Amphoe Mueang Yasothon Yasothorn 35000'],
        ];
        $arr[] = [
            'tel' => '045 711 356', 'cat_id' => '90',
            'website' => 'www.drhann.com',
            'province' => '42', 'location' => 'https://goo.gl/maps/Px4ZbmqBWLEQKGvh7',
            'th' => ['title' => 'โรงพยาบาลรวมแพทย์ ยโสธร (หาญอินเตอร์เนชั่นแนล เดิม)', 'address' => '29 ถ.มงคลบูรพา เมืองยโสธร ยโสธร 35000'],
            'en' => ['title' => 'CHUREEVEJ HOSPITAL', 'address' => '368 Deva Governance Rd Amphoe Mueang Roi Et Roi Et 35000'],
        ];
        $arr[] = [
            'tel' => '043 518 019', 'cat_id' => '90',
            'website' => '-',
            'province' => '44', 'location' => 'https://goo.gl/maps/b1Upe6wePADNw2Tb8',
            'th' => ['title' => 'โรงพยาบาลจุรีเวช', 'address' => '368 ถ.เทวาภิบาล เมืองร้อยเอ็ด ร้อยเอ็ด 45000'],
            'en' => ['title' => 'ROI-ET THONBURI HOSPITAL', 'address' => '166 Pattamaon Road Mueang Roi Et Roi Et 45000'],
        ];
        $arr[] = [
            'tel' => '043 515 191', 'cat_id' => '90',
            'website' => 'http://roietthonburi.com',
            'province' => '44', 'location' => 'https://goo.gl/maps/Mq1uwnv3rGEkEAop7',
            'th' => ['title' => 'โรงพยาบาลร้อยเอ็ดธนบุรี', 'address' => '166 ถ.ปัทมานนท์ เมืองร้อยเอ็ด ร้อยเอ็ด 45000'],
            'en' => ['title' => 'MUANG LOEY RAM HOSPITAL', 'address' => '546 Moo 1 Maliwan Road Mueang Loei Loei 45000'],
        ];
        $arr[] = [
            'tel' => '042 870 000', 'cat_id' => '90',
            'website' => '-',
            'province' => '51', 'location' => 'https://goo.gl/maps/LNhp3T2PzmnZN2ym6',
            'th' => ['title' => 'โรงพยาบาลเมืองเลยราม', 'address' => '546 หมู่ 1 ถ.มลิวรรณ เมืองเลย เลย 42000'],
            'en' => ['title' => 'PRACHARAK HOSPITAL', 'address' => '872 Ubon Road Amphoe Mueang Si Sa Ket Si Sa Ket 42000'],
        ];
        $arr[] = [
            'tel' => '045 613 342', 'cat_id' => '90',
            'website' => '-',
            'province' => '52', 'location' => 'https://goo.gl/maps/Bz7GFPkEmXV7TKE29',
            'th' => ['title' => 'โรงพยาบาลประชารักษ์เวชการ', 'address' => '872 ถ.อุบล เมืองศรีสะเกษ ศรีสะเกษ 33000'],
            'en' => ['title' => 'SAKONNAKHON HOSPITAL', 'address' => '1041 Charoen Mueang Road Mueang Sakon Nakhon Sakon Nakhon 33000'],
        ];
        $arr[] = [
            'tel' => '042 176 000', 'cat_id' => '90',
            'website' => 'www.sknhospital.go.th',
            'province' => '53', 'location' => 'https://goo.gl/maps/CvRp6WhDuFfRRifS7',
            'th' => ['title' => 'โรงพยาบาลสกลนคร', 'address' => '1041 ถ.เจริญเมือง เมืองสกลนคร สกลนคร 47000'],
            'en' => ['title' => 'RAKSAKOL HOSPITAL', 'address' => '1446/47 Rob Mueang Road Mueang Sakon Nakhon Sakon Nakhon 47000'],
        ];
        $arr[] = [
            'tel' => '042 712 588', 'cat_id' => '90',
            'website' => 'https://raksakol.com',
            'province' => '53', 'location' => 'https://goo.gl/maps/W3BfZpQR1k4fYbqK6',
            'th' => ['title' => 'โรงพยาบาลรักษ์สกล', 'address' => '1446/47 ถ.รอบเมือง เมืองสกลนคร สกลนคร 47000'],
            'en' => ['title' => 'RUAMPHEAT SURIN', 'address' => '312/1 Thetsaban 1 Rd Amphoe Mueang Surin Surin 47000'],
        ];
        $arr[] = [
            'tel' => '042 973 411', 'cat_id' => '90',
            'website' => '',
            'province' => '53', 'location' => 'https://goo.gl/maps/4jnhBf6E94qJ9vDg8',
            'th' => ['title' => 'โรงพยาบาลวานรนิวาส', 'address' => '1 หมู่ 9  ถ.พังโคน-บึงกาฬ ตำบล คอนสวรรค์ อำเภอ วานรนิวาส  สกลนคร 47120'],
            'en' => ['title' => 'WANON NIWAT', 'address' => '1 Moo 9 Khon Sawan Amphoe WANON NIWAT Sakon Nakhon 47120'],
        ];
        $arr[] = [
            'tel' => '044 535 001', 'cat_id' => '90',
            'website' => '-',
            'province' => '64', 'location' => 'https://goo.gl/maps/bG1KSY7bFc1bH8pb7',
            'th' => ['title' => 'โรงพยาบาลรวมแพทย์หมออนันต์', 'address' => '312/1 ถ.เทศบาล 1 เมืองสุรินทร์ สุรินทร์ 32000'],
            'en' => ['title' => 'RUAMPHEATNHONGKAI', 'address' => '710 Soi Phromdamri Prachak Rd Mueang Nong Khai Nong Khai 32000'],
        ];
        $arr[] = [
            'tel' => '042 421 412', 'cat_id' => '90',
            'website' => '-',
            'province' => '65', 'location' => 'https://goo.gl/maps/dQEB3zRx2kaXUUBF7',
            'th' => ['title' => 'โรงพยาบาลรวมแพทย์หนองคาย', 'address' => '710 ซ.พรมดำหริห์ ถ.ประจักษ์ เมืองหนองคาย หนองคาย 43000'],
            'en' => ['title' => 'NONGKAI WATTANA HOSPITAL', 'address' => '1159/4 Moo 2 - Mueang Nong Khai Nong Khai 43000'],
        ];
        $arr[] = [
            'tel' => '042 465 201', 'cat_id' => '90',
            'website' => 'http://wattanahospital.net',
            'province' => '65', 'location' => 'https://goo.gl/maps/gBN8yfdNK5w5TjUEA',
            'th' => ['title' => 'โรงพยาบาลหนองคาย วัฒนา', 'address' => '1159/4 หมู่ 2 - เมืองหนองคาย หนองคาย 43000'],
            'en' => ['title' => 'VEERAPOL KANPHAET HOSPITAL', 'address' => '12 Wichan Rangsan Alley Amphoe Mueang Nong Bua Lam Phu Nong Bua Lam Phu 43000'],
        ];
        $arr[] = [
            'tel' => '042 312 342', 'cat_id' => '90',
            'website' => 'www.veerapolkanpathospital.com',
            'province' => '75', 'location' => 'https://goo.gl/maps/AJKhWunSNjXXpBEC6',
            'th' => ['title' => 'โรงพยาบาลวีระพลการแพทย์', 'address' => '12 ถ.วิจารณ์รังสรรค์ เมืองหนองบัวลำภู หนองบัวลำภู 39000'],
            'en' => ['title' => 'BANGKOK HOSPITAL UDON', 'address' => '111 Thongyai Rd Amphoe Mueang Udon Thani Udon Thani 39000'],
        ];
        $arr[] = [
            'tel' => '042 188 999', 'cat_id' => '90',
            'website' => 'www.bangkokhospital.com',
            'province' => '67', 'location' => 'https://g.page/Bangkokhospitaludononline?share',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพอุดร', 'address' => '111 ถ.ทองใหญ่ เมืองอุดรธานี อุดรธานี 41000'],
            'en' => ['title' => 'NORTH EASTERN WATTANA HOSPITAL', 'address' => '70/7-8 Supakitchanya Road Amphoe Mueang Udon Thani Udon Thani 41000'],
        ];
        $arr[] = [
            'tel' => '042 219 888', 'cat_id' => '90',
            'website' => 'http://wattanahospital.net',
            'province' => '67', 'location' => 'https://goo.gl/maps/kv2be3MSVEq35Xb89',
            'th' => ['title' => 'โรงพยาบาลนอร์ทอีสเทอร์น-วัฒนา', 'address' => '70/7-8 ถ.ศุภกิจจรรยา เมืองอุดรธานี อุดรธานี 41000'],
            'en' => ['title' => 'AEK UDON INTERNATIONAL HOSPITAL', 'address' => '555/5 Pho Si Rd Amphoe Mueang Udon Thani Udon Thani 41000'],
        ];
        $arr[] = [
            'tel' => '042 342 555', 'cat_id' => '90',
            'website' => 'www.aekudon.com',
            'province' => '67', 'location' => 'https://goo.gl/maps/vHZUYK7HAkDMJoAD8',
            'th' => ['title' => 'โรงพยาบาลเอกอุดร', 'address' => '555/5 ถ.โพธิ์ศรี เมืองอุดรธานี อุดรธานี 41000'],
            'en' => ['title' => 'RAJAVEJ UBOLRATCHATHANI HOSPITAL', 'address' => '999 Chayangkun Rd Mueang Ubon Ratchathani Ubon Ratchathani 41000'],
        ];
        $arr[] = [
            'tel' => '045 280 040', 'cat_id' => '90',
            'website' => 'www.rajavejubon.com',
            'province' => '70', 'location' => 'https://goo.gl/maps/yznDFjP8BNsaeFDa8',
            'th' => ['title' => 'โรงพยาบาลราชเวชอุบลราชธานี', 'address' => '999 ถ.ชยางกูร เมืองอุบลราชธานี อุบลราชธานี 34000'],
            'en' => ['title' => 'SUNPASITINTER HOSPITAL', 'address' => '139 Phonphaen Rd Mueang Ubon Ratchathani Ubon Ratchathani 34000'],
        ];
        $arr[] = [
            'tel' => '081 999 3323', 'cat_id' => '90',
            'website' => 'www.sunpasitinter.com',
            'province' => '70', 'location' => 'https://goo.gl/maps/STmzJbWt59WGZEfNA',
            'th' => ['title' => 'โรงพยาบาลสรรพสิทธิ์อินเตอร์', 'address' => '139 ถ.พลแพน เมืองอุบลราชธานี อุบลราชธานี 34000'],
            'en' => ['title' => 'UBOLRAKSA THONBURI HOSPITAL', 'address' => '46/4 Buraphanai Rd Mueang Ubon Ratchathani Ubon Ratchathani 34000'],
        ];
        $arr[] = [
            'tel' => '045 429 100', 'cat_id' => '90',
            'website' => 'www.ubonrak.co.th',
            'province' => '70', 'location' => 'https://goo.gl/maps/VEE3x9FqcBB8B5rh9',
            'th' => ['title' => 'โรงพยาบาลอุบลรักษ์ ธนบุรี', 'address' => '46/4 ถ.บูรพาใน เมืองอุบลราชธานี อุบลราชธานี 34000'],
            'en' => ['title' => 'KRABI HOSPITAL', 'address' => '325 Uttarakit Road Mueang Krabi Krabi 34000'],
        ];
        $arr[] = [
            'tel' => '075 626 700', 'cat_id' => '91',
            'website' => '-',
            'province' => '01', 'location' => 'https://goo.gl/maps/GgkcFmMxVycZrdNQ9',
            'th' => ['title' => 'โรงพยาบาลกระบี่', 'address' => '325 ถ.อุตรกิจ เมืองกระบี่ กระบี่ 81000'],
            'en' => ['title' => 'KRABINAKARIN INTERNATIONAL HOSPITAL', 'address' => '1 Phisanaphob Rd Mueang Krabi Krabi 81000'],
        ];
        $arr[] = [
            'tel' => '075 626 555', 'cat_id' => '90',
            'website' => 'www.krabinakharin.co.th',
            'province' => '01', 'location' => 'https://goo.gl/maps/LJkRfF9y4q9BBmgf7',
            'th' => ['title' => 'โรงพยาบาลกระบี่นครินทร์อินเตอร์เนชั่นแนล', 'address' => '1 ถ.พิศาลภพ เมืองกระบี่ กระบี่ 81000'],
            'en' => ['title' => 'RUAMPAT HOSPITAL KRABI', 'address' => '529-531 Utarakit Rd Mueang Krabi Krabi 81000'],
        ];
        $arr[] = [
            'tel' => '075 664 455', 'cat_id' => '90',
            'website' => '-',
            'province' => '01', 'location' => 'https://goo.gl/maps/LJkRfF9y4q9BBmgf7',
            'th' => ['title' => 'โรงพยาบาลรวมแพทย์กระบี่', 'address' => '529-531 ถ.อุตรกิจ เมืองกระบี่ กระบี่ 81000'],
            'en' => ['title' => 'WATTAPAT AO NANG', 'address' => '555 Khlong Hang Rd Mueang Krabi Krabi 81000'],
        ];
        $arr[] = [
            'tel' => '075 815 555', 'cat_id' => '90',
            'website' => 'http://www.aonanghospital.com',
            'province' => '01', 'location' => 'https://goo.gl/maps/ViZUBKevDUZrziiu8',
            'th' => ['title' => 'โรงพยาบาลวัฒนแพทย์อ่าวนาง ', 'address' => '555 ถ.คลองแห้ง เมืองกระบี่ กระบี่ 81000'],
            'en' => ['title' => 'THONBURI CHOMPORN HOSPITAL', 'address' => '121 Moo 3 Chumphon-Ranong Road Mueang Chumphon  Chumphon 81000'],
        ];
        $arr[] = [
            'tel' => '077 658 555', 'cat_id' => '90',
            'website' => 'www.thonburi-chumphon.com',
            'province' => '11', 'location' => 'https://goo.gl/maps/AZr9x7H81sbRavbt5',
            'th' => ['title' => 'โรงพยาบาลธนบุรีชุมพร', 'address' => '121 หมู่ 3 ถ.ชุมพร - ระนอง เมืองชุมพร ชุมพร 86000'],
            'en' => ['title' => 'VIRATSILP HOSPITAL', 'address' => '18/22 Pramintaramakha Road Mueang Chumphon  Chumphon 86000'],
        ];
        $arr[] = [
            'tel' => '077 542 555', 'cat_id' => '90',
            'website' => 'www.virajsilp.com',
            'province' => '11', 'location' => 'https://goo.gl/maps/zoKTbjdL1fYMMATF8',
            'th' => ['title' => 'โรงพยาบาลวิรัชศิลป์', 'address' => '18/22 ถ.ปรมินทรมรรคา เมืองชุมพร ชุมพร 86000'],
            'en' => ['title' => 'TRPH HOSPITAL ', 'address' => '61/39 Khuan Han Rd Amphoe Mueang Trang Trang 86000'],
        ];
        $arr[] = [
            'tel' => '075 218 988', 'cat_id' => '90',
            'website' => 'www.trangruampat.com',
            'province' => '14', 'location' => 'https://goo.gl/maps/DR1ca7d4RkvCimUu6',
            'th' => ['title' => 'โรงพยาบาลทีอาร์พีเอช', 'address' => '61/39 ถ.โคกขัน เมืองตรัง ตรัง 92000'],
            'en' => ['title' => 'WATTANAPHET TRANG HOSPITAL', 'address' => '247/2 Phatthalung Rd Amphoe Mueang Trang Trang 92000'],
        ];
        $arr[] = [
            'tel' => '075 205 555', 'cat_id' => '90',
            'website' => 'www.wattanapat.co.th',
            'province' => '14', 'location' => 'https://goo.gl/maps/M5vAwMtysUeGkzwc6',
            'th' => ['title' => 'โรงพยาบาลวัฒนแพทย์ตรัง', 'address' => '247/2 ถ.พัทลุง เมืองตรัง ตรัง 92000'],
            'en' => ['title' => 'NAKORN CHRISTIAN HOSPITAL', 'address' => '1110/2 Si Prarat Rd Mueang Nakhon Si Thammarat Nakhon Ratchasima 92000'],
        ];
        $arr[] = [
            'tel' => '075 356 214', 'cat_id' => '90',
            'website' => '-',
            'province' => '21', 'location' => 'https://goo.gl/maps/FErE2y39F6CgoQMA8',
            'th' => ['title' => 'โรงพยาบาลนครคริสเตียน', 'address' => '1110/2 ถ.ศรีปราชญ์ เมืองนครศรีธรรมราช นครศรีธรรมราช 80000'],
            'en' => ['title' => 'NAKHONPAT  HOSPITAL', 'address' => '2/99 Pattanakarn Kwang Road  Mueang Nakhon Si Thammarat Nakhon Ratchasima 80000'],
        ];
        $arr[] = [
            'tel' => '075 305 999', 'cat_id' => '90',
            'website' => '-',
            'province' => '21', 'location' => 'https://goo.gl/maps/XHMbtGe35mz5xEpx8',
            'th' => ['title' => 'โรงพยาบาลนครพัฒน์', 'address' => '2/99 ถ.พัฒนาการคูขวาง เมืองนครศรีธรรมราช นครศรีธรรมราช 80000'],
            'en' => ['title' => 'NAKARIN HOSPITAL', 'address' => '61 Aomkaiwachirawut Road Mueang Nakhon Si Thammarat Nakhon Ratchasima 80000'],
        ];
        $arr[] = [
            'tel' => '075 312 800', 'cat_id' => '90',
            'website' => 'www.nakharin.co.th',
            'province' => '21', 'location' => 'https://goo.gl/maps/EfCfwBX8s3AFbm47A',
            'th' => ['title' => 'โรงพยาบาลนครินทร์', 'address' => '61 ถ.อ้อมค่ายวชิราวุธ เมืองนครศรีธรรมราช นครศรีธรรมราช 80000'],
            'en' => ['title' => 'SICHON', 'address' => '189 -  Amphoe Sichon Nakhon Ratchasima 80000'],
        ];
        $arr[] = [
            'tel' => '075 536 336', 'cat_id' => '91',
            'website' => 'www.sichon-hospital.com',
            'province' => '21', 'location' => 'https://goo.gl/maps/Bx81JzMDepZNquWz9',
            'th' => ['title' => 'โรงพยาบาลสิชล', 'address' => 'ต.สิชล - สิชล นครศรีธรรมราช 80120'],
            'en' => ['title' => 'SIROROS PATTANI HOSPITAL', 'address' => '30/10 Moo .4 Rusamilae Rd Mueang Pattani Pattani 80120'],
        ];
        $arr[] = [
            'tel' => '073 348 100', 'cat_id' => '90',
            'website' => '-',
            'province' => '30', 'location' => 'https://goo.gl/maps/YTmN1PswiPVpEQMf7',
            'th' => ['title' => 'โรงพยาบาลสิโรรสปัตตานี', 'address' => '30/10 ม .4 ถ.รูสะมิแล เมืองปัตตานี ปัตตานี 94000'],
            'en' => ['title' => 'PHANGNGA  HOSPITAL', 'address' => '436 Phet Kasem Road, Amphoe Mueang Phang-nga Phangnga 94000'],
        ];
        $arr[] = [
            'tel' => '076 411 616', 'cat_id' => '91',
            'website' => '-',
            'province' => '32', 'location' => 'https://goo.gl/maps/rtA2gFrbX6CxHvmu9',
            'th' => ['title' => 'โรงพยาบาลพังงา', 'address' => '436 ถ.เพชรเกษม เมืองพังงา พังงา 82000'],
            'en' => ['title' => 'TAKUA PA', 'address' => '39/2 Moo.1  Phahonyothin Rd Amphoe Takua Pa Phangnga 82000'],
        ];
        $arr[] = [
            'tel' => '076 584 250', 'cat_id' => '91',
            'website' => '',
            'province' => '32', 'location' => 'https://goo.gl/maps/gZQhMANV3uSoFCrx7',
            'th' => ['title' => 'โรงพยาบาลตะกั่วป่า', 'address' => '39/2 ม.1 เพชรเกษม ตะกั่วป่า พังงา 82110'],
            'en' => ['title' => 'PIYARAK HOSPITAL', 'address' => '74 Apaiborirak Rd Amphoe Muang Phatthalung Phatthalung 82110'],
        ];
        $arr[] = [
            'tel' => '074 615 406', 'cat_id' => '90',
            'website' => '-',
            'province' => '33', 'location' => 'https://goo.gl/maps/eKRKUp9zeYcV5agP8',
            'th' => ['title' => 'โรงพยาบาลปิยะรักษ์', 'address' => '74 ถ.อภัยบริรักษ์ เมืองพัทลุง พัทลุง 93000'],
            'en' => ['title' => 'PHATTHALUNG HOSPITAL', 'address' => '421 Rames Rd Amphoe Muang Phatthalung Phatthalung 93000'],
        ];
        $arr[] = [
            'tel' => '074 609 500', 'cat_id' => '91',
            'website' => 'www.ptlhosp.go.th',
            'province' => '33', 'location' => 'https://goo.gl/maps/yUZtyLdtdQLZN2NX6',
            'th' => ['title' => 'โรงพยาบาลพัทลุง', 'address' => '421 ถ.ราเมศร์ เมืองพัทลุง พัทลุง 93000'],
            'en' => ['title' => 'BANGKOK PHUKET HOSPITAL', 'address' => '2/1  Hongyok Uthit Road Mueang Phuket Phuket 93000'],
        ];
        $arr[] = [
            'tel' => '076 254 425', 'cat_id' => '90',
            'website' => 'www.phukethospital.com',
            'province' => '39', 'location' => 'https://goo.gl/maps/eK4apPjnJBKcYmmR8',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพภูเก็ต', 'address' => '2/1 ถ.หงส์หยกอุทิศ เมืองภูเก็ต ภูเก็ต 83000'],
            'en' => ['title' => 'DIBUK HOSPITAL', 'address' => '88/8-9 Moo 2 Chaofa Rd Mueang Phuket Phuket 83000'],
        ];
        $arr[] = [
            'tel' => '076 298 298', 'cat_id' => '90',
            'website' => 'http://dibukhospital.com/',
            'province' => '39', 'location' => 'https://goo.gl/maps/DN1dnbUuv62DU5ik6',
            'th' => ['title' => 'โรงพยาบาลดีบุก', 'address' => '88/8-9 หมู่ 2 เจ้าฟ้าตะวันตก เมืองภูเก็ต ภูเก็ต 83000'],
            'en' => ['title' => 'PATONG HOSPITAL', 'address' => '57  Moo 3 Sai Nam Yen Road Ka-Too Phuket 83000'],
        ];
        $arr[] = [
            'tel' => '076 342 633', 'cat_id' => '90',
            'website' => 'www.patonghospital.go.th',
            'province' => '39', 'location' => 'https://goo.gl/maps/vscJMiFPz6ahcgGX8',
            'th' => ['title' => 'โรงพยาบาลป่าตอง', 'address' => '57  หมู่ 3 ถ.ไสน้ำเย็น กะทู้ ภูเก็ต 83120'],
            'en' => ['title' => 'MISSION PHUKET HOSPITAL', 'address' => '4/1 Moo.3 Thepkasatri Road Mueang Phuket Phuket 83120'],
        ];
        $arr[] = [
            'tel' => '076 237 220', 'cat_id' => '90',
            'website' => 'www.missionhospitalphuket.com',
            'province' => '39', 'location' => 'https://goo.gl/maps/4w7RQSrsbcaSVhQWA',
            'th' => ['title' => 'โรงพยาบาลมิชชั่น ภูเก็ต', 'address' => '4/1 ม.3 ถ.เทพกระบัตรี เมืองภูเก็ต ภูเก็ต 83000'],
            'en' => ['title' => 'VACHIRA PHUKET HOSPITAL', 'address' => '353 Yaowarat Rd Mueang Phuket Phuket 83000'],
        ];
        $arr[] = [
            'tel' => '076 361 234', 'cat_id' => '90',
            'website' => 'www.vachiraphuket.go.th',
            'province' => '39', 'location' => 'https://goo.gl/maps/jpD6eQbfe22fUGBr7',
            'th' => ['title' => 'โรงพยาบาลวชิระภูเก็ต', 'address' => '353 ถ.เยาวราช เมืองภูเก็ต ภูเก็ต 83000'],
            'en' => ['title' => 'PHUKET INTERNATIONAL HOSPITAL', 'address' => '44  Moo. 5 Chalermprakiat Ror 9 Rd Mueang Phuket Phuket 83000'],
        ];
        $arr[] = [
            'tel' => '076 361 888', 'cat_id' => '90',
            'website' => 'www.phuketinternationalhospital.com',
            'province' => '39', 'location' => 'https://g.page/Bangkok-Hospital-Siriroj?share',
            'th' => ['title' => 'โรงพยาบาลสิริโรจน์', 'address' => '44  ม. 5 ถ.เฉลิมพระเกียรติ ร.9 เมืองภูเก็ต ภูเก็ต 83000'],
            'en' => ['title' => 'PHUKET PROVINCIAL ADMINISTRATIVE ORGANIZATION HOSPITAL', 'address' => '18,20 Anuphasphuketkarn Rd Mueang Phuket Phuket 83000'],
        ];
        $arr[] = [
            'tel' => '076 358 888', 'cat_id' => '91',
            'website' => 'http://www.phuketcityhospital.org',
            'province' => '39', 'location' => 'https://goo.gl/maps/a2wpRfEPEyKg6d5T7',
            'th' => ['title' => 'โรงพยาบาลองค์การบริหารส่วนจังหวัดภูเก็ต', 'address' => '18,20 ถ.อนุภาษภูเก็ตการ เมืองภูเก็ต ภูเก็ต 83000'],
            'en' => ['title' => 'SIROROS YALA HOSPITAL', 'address' => '247-249 Siroros Rd Amphoe Mueang Yala Yala 83000'],
        ];
        $arr[] = [
            'tel' => '073 223 600', 'cat_id' => '90',
            'website' => 'www.siroroshospitalcoltd.com',
            'province' => '43', 'location' => 'https://g.page/sirorosyalahospital?share',
            'th' => ['title' => 'โรงพยาบาลสิโรรสยะลา', 'address' => '247-249 ถ.สิโรรส เมืองยะลา ยะลา 95000'],
            'en' => ['title' => 'BANGKOK HATYAI HOSPITAL', 'address' => '75 Soi 15 Phet Kasem Rd Amphoe Hat Yai Song Khla 95000'],
        ];
        $arr[] = [
            'tel' => '074 272 800', 'cat_id' => '90',
            'website' => 'https://bangkokhatyai.com',
            'province' => '54', 'location' => 'https://g.page/BangkokHatyai?share',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพหาดใหญ่', 'address' => '75 ซ. 15 ถ.เพชรเกษม หาดใหญ่ สงขลา 90110'],
            'en' => ['title' => 'RAJYINDEE HATYAI HOSPITAL', 'address' => '119 Ratyindi Rd Amphoe Hat Yai Song Khla 90110'],
        ];
        $arr[] = [
            'tel' => '074 200 200', 'cat_id' => '90',
            'website' => 'www.rajyindee.com',
            'province' => '54', 'location' => 'https://goo.gl/maps/7dCEeJSmeSnKHYP97',
            'th' => ['title' => 'โรงพยาบาลราษฎร์ยินดีหาดใหญ่', 'address' => '119 ถ.ราษฎร์ยินดี หาดใหญ่ สงขลา 90110'],
            'en' => ['title' => 'SIKARIN HATYAI HOSPITAL', 'address' => '169 Niphat Songkhro 1 Road Amphoe Hat Yai Song Khla 90110'],
        ];
        $arr[] = [
            'tel' => '074 310 310', 'cat_id' => '90',
            'website' => 'www.sikarin.com',
            'province' => '54', 'location' => '',
            'th' => ['title' => 'โรงพยาบาลศิครินทร์ หาดใหญ่', 'address' => '169 ถ.นิพัทธ์สงเคราะห์ 1 หาดใหญ่ สงขลา 90110'],
            'en' => ['title' => 'SONGKLA NAGARIND HOSPITAL', 'address' => 'Soi 15 Srivajchavat Building 1st floor  Karnjanavanit Rd Amphoe Hat Yai Song Khla 90110'],
        ];
        $arr[] = [
            'tel' => '074 451 051', 'cat_id' => '90',
            'website' => 'http://hospital.psu.ac.th',
            'province' => '54', 'location' => 'https://goo.gl/maps/rSPs2j7qMZBZd46N9',
            'th' => ['title' => 'โรงพยาบาลสงขลานครินทร์ (คลินิกพรีเมี่ยม อาคารศรีเวชวัฒน์)', 'address' => 'ซอย 15 ถ.กาญจนวนิช หาดใหญ่ สงขลา 90110'],
            'en' => ['title' => 'HATYAI HOSPITAL', 'address' => '182 Ratthakan Rd Amphoe Hat Yai Song Khla 90110'],
        ];
        $arr[] = [
            'tel' => '074 273 100', 'cat_id' => '91',
            'website' => 'www.hatyaihospital.go.th',
            'province' => '54', 'location' => 'https://goo.gl/maps/YFokBhcmJ1pMTt8u6',
            'th' => ['title' => 'โรงพยาบาลหาดใหญ่', 'address' => '182 ถ.รัตถการ หาดใหญ่ สงขลา 90110'],
            'en' => ['title' => 'KAO SAMUI HOSPITAL', 'address' => '61 Moo 1 - Ko Samui Surat Thani 90110'],
        ];
        $arr[] = [
            'tel' => '077 913 200', 'cat_id' => '91',
            'website' => 'https://www.samuihospital.go.th',
            'province' => '63', 'location' => 'https://goo.gl/maps/GUsuBNS5UX2Y61Wr7',
            'th' => ['title' => 'โรงพยาบาลเกาะสมุย', 'address' => '61 หมู่1 - เกาะสมุย สุราษฎร์ธานี 84140'],
            'en' => ['title' => 'BANGKOK SAMUI HOSPITAL', 'address' => '57 Moo 3 Taweeratphakdee Rd Ko Samui Surat Thani 84140'],
        ];
        $arr[] = [
            'tel' => '077 429 500', 'cat_id' => '90',
            'website' => 'www.bangkokhospitalsamui.com',
            'province' => '63', 'location' => 'https://g.page/BSHFanClub?share',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพสมุย', 'address' => '57 หมู่ 3 ถ.ทวีราษฎร์ภักดี เกาะสมุย สุราษฎร์ธานี 84140'],
            'en' => ['title' => 'BANGKOK SURAT HOSPITAL', 'address' => '179/1 Moo 1 Pradu Temple  - Mueang Surat Thani Surat Thani 84140'],
        ];
        $arr[] = [
            'tel' => '077 956 789', 'cat_id' => '90',
            'website' => 'www.bangkoksurathospital.com',
            'province' => '63', 'location' => 'https://g.page/BangkokHospitalSurat?share',
            'th' => ['title' => 'โรงพยาบาลกรุงเทพสุราษฎร์', 'address' => '179/1 หมู่ 1 วัดประดู่  - เมืองสุราษฎร์ธานี สุราษฎร์ธานี 84000'],
            'en' => ['title' => 'THAKSIN HOSPITAL', 'address' => '309/2 Talad Mai Rd Mueang Surat Thani Surat Thani 84000'],
        ];
        $arr[] = [
            'tel' => '077 278 777', 'cat_id' => '90',
            'website' => 'www.thaksinhospital.com',
            'province' => '63', 'location' => 'https://goo.gl/maps/t3FkuJSHPehvLLvbA',
            'th' => ['title' => 'โรงพยาบาลทักษิณสุราษฎร์', 'address' => '309/2 ถ.ตลาดใหม่ เมืองสุราษฎร์ธานี สุราษฎร์ธานี 84000'],
            'en' => ['title' => 'BANDON INTERNATIONAL KOH SAMUI HOSPITAL', 'address' => '123/1  Moo.1 Bo Phut  Ko Samui Surat Thani 84000'],
        ];
        $arr[] = [
            'tel' => '077 332 706', 'cat_id' => '90',
            'website' => '-',
            'province' => '63', 'location' => 'https://goo.gl/maps/NEBsEe45RyKk8oMC8',
            'th' => ['title' => 'โรงพยาบาลบ้านดอนอินเตอร์', 'address' => '123/1  ม.1 ถ.หน้าเมือง เกาะสมุย สุราษฎร์ธานี 84140'],
            'en' => ['title' => 'SRIVICHAISURATTHANEE HOSPITAL', 'address' => '67/47-50 Moo 2 Srivijaya Road Mueang Surat Thani Surat Thani 84140'],
        ];
        $arr[] = [
            'tel' => '077 282 520', 'cat_id' => '90',
            'website' => '-',
            'province' => '63', 'location' => 'https://goo.gl/maps/MnH1LojZsg8dEuxU8',
            'th' => ['title' => 'โรงพยาบาลศรีวิชัยสุราษฎร์ธานี', 'address' => '67/47-50 หมู่ 2 ถ.สุราษฎร์-พุนพิน เมืองสุราษฎร์ธานี สุราษฎร์ธานี 84000'],
            'en' => ['title' => 'SAMUI INTERNATIONAL HOSPITAL', 'address' => '90/2 Moo 2 - Ko Samui Surat Thani 84000'],
        ];
        $arr[] = [
            'tel' => '098 013 5479', 'cat_id' => '90',
            'website' => '-',
            'province' => '63', 'location' => 'https://goo.gl/maps/sKDjo48crKxjxm9c6',
            'th' => ['title' => 'โรงพยาบาลสมุยอินเตอร์เนชั่นแนล', 'address' => '90/2 หมู่ 2 - เกาะสมุย สุราษฎร์ธานี 84140'],
            'en' => ['title' => 'PRINCE WACHIRALONGKORN (WEING SA)', 'address' => '204/16  10 - Amphoe Wiang Sa Surat Thani 84140'],
        ];
        $arr[] = [
            'tel' => '077 361 283', 'cat_id' => '91',
            'website' => 'www.weingsrahosp.com',
            'province' => '63', 'location' => 'https://goo.gl/maps/nZvbW12Rz2wsE9rK8',
            'th' => ['title' => 'โรงพยาบาลสมเด็จพระยุพราช เวียงสระ', 'address' => '204/16 หมู่ 10 - เวียงสระ สุราษฎร์ธานี 84190'],
            'en' => ['title' => 'FIRST WESTERN HOSPITAL', 'address' => '112/44 Moo 1 -  Ko Pha-Ngan Surat Thani 84190'],
        ];
        $arr[] = [
            'tel' => '077 377 474', 'cat_id' => '90',
            'website' => '-',
            'province' => '63', 'location' => 'https://goo.gl/maps/DnApVT9UudFUobtY7',
            'th' => ['title' => 'โรงพยาบาลเฟิร์สเวสเทอร์น', 'address' => '112/44 หมู่ 1 - เกาะพะงัน สุราษฎร์ธานี 84280'],
            'en' => ['title' => 'THAI INTERNATIONAL HOSPITAL', 'address' => '110/29-32 Moo 6 - Ko Samui Surat Thani 84280'],
        ];
        $arr[] = [
            'tel' => '077 377 034', 'cat_id' => '90',
            'website' => 'www.kpho.go.th',
            'province' => '63', 'location' => 'https://goo.gl/maps/sn14XSwqnnmCmVAR8',
            'th' => ['title' => 'โรงพยาบาลเกาะพะงัน', 'address' => ' 6 ม.4  เกาะพะงัน สุราษฎร์ธานี 84280'],
            'en' => ['title' => 'CHULARAT 7 CLINIC', 'address' => '142/5-8 On Nut 90 Rd Prawet Bangkok 84280'],
        ];
        $arr[] = [
            'tel' => '077 332 654', 'cat_id' => '90',
            'website' => '-',
            'province' => '63', 'location' => 'https://g.page/Thaiinterhospital?share',
            'th' => ['title' => 'โรงพยาบาลไทยอินเตอร์เนชั่นแนล', 'address' => '110/29-32 หมู่ 6 - เกาะสมุย สุราษฎร์ธานี 84140'],
            'en' => ['title' => 'CHULARAT 8 CLINIC', 'address' => '342/7-8 Kham Chang District Office Ladkrabang - Ladkrabang Bangkok 84140'],
        ];
        $arr[] = [
            'tel' => '02 328 7653', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/buWGdd6QipVazwax7',
            'th' => ['title' => 'คลินิกเวชกรรม จุฬารัตน์ 7', 'address' => '142/5-8 ริมถนนอ่อนนุช 90 ประเวศ กรุงเทพมหานคร 10250'],
            'en' => ['title' => 'KLUAYNAMTHAI CLINICWECHGUM (CHUMCHON 70 RAI)', 'address' => '215-217 Soi Lock 1 (70 Rai ) Damronglatphiphat Road Khlong Toei Bangkok 10250'],
        ];
        $arr[] = [
            'tel' => '02 326 7993', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/wsnomSdPDQANmS39A',
            'th' => ['title' => 'คลินิกเวชกรรม จุฬารัตน์ 8', 'address' => '342/7-8 ตรงข้าม สนง.ลาดกระบัง - ลาดกระบัง กรุงเทพมหานคร 10520'],
            'en' => ['title' => 'KLUAYNUMTHAI CLINICWECHAGUM (TUNGSONGHONG)', 'address' => '183/509-510 Soi Chaeng Watthana 10 Kosum-Songprapa Road Lak Si Bangkok 10520'],
        ];
        $arr[] = [
            'tel' => '038-575-134-6,
038-538-511-3', 'cat_id' => '92',
            'website' => '',
            'province' => '07', 'location' => 'https://goo.gl/maps/dnbS8oR17adjcwza9',
            'th' => ['title' => 'คลินิกเวชกรรมจุฬารัตน์12(เกตเวย์)', 'address' => '215 หมู่ 7 - แปลงยาว ฉะเชิงเทรา 24190'],
            'en' => ['title' => 'CHULARAT 12 CLINIC (GATEWAY)', 'address' => '215 Moo 7 Plaeng Yao Subdistrict  Chachoengsao 24190'],
        ];
        $arr[] = [
            'tel' => '02 671 4053', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/2VSWo9CjeFb6kLbq8',
            'th' => ['title' => 'คลินิกเวชกรรมกล้วยน้ำไท ชุมชน70ไร่', 'address' => '215-217 ล็อค 1 ( 70ไร่ ) ถ.ดำรงลัทธพิพัฒน์ คลองเตย กรุงเทพมหานคร 10110'],
            'en' => ['title' => 'KLUAYNAMTHAI CLINIC PAHOLYOTIN', 'address' => '408/23 Phahonyothin Place Building, 3rd Floor  Phahonyothin Rd Phaya Thai Bangkok 10110'],
        ];
        $arr[] = [
            'tel' => '02 500 4296', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/Zo9Dek57QJhtkjRD8',
            'th' => ['title' => 'คลินิกเวชกรรมกล้วยน้ำไท ทุ่งสองห้อง', 'address' => '183/509-510 ซ.แจ้งวัฒนะ 10 ถ.โกสุมประภา หลักสี่ กรุงเทพมหานคร 10210'],
            'en' => ['title' => 'KLUAYNAMTHAI CLINIC ONNUT', 'address' => '227/1,229 Soi Sukhumvit 77 - Wattana Bangkok 10210'],
        ];
        $arr[] = [
            'tel' => '02 115 7638', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/CsoXSWmB432JEprA6',
            'th' => ['title' => 'คลินิกเวชกรรมกล้วยน้ำไท สาขาพหลโยธิน', 'address' => '408/23 อาคารสำนักงานพหลโยธินเพลส ชั้น3 ถ.พหลโยธิน พญาไท กรุงเทพมหานคร 10400'],
            'en' => ['title' => 'KLUAYNAMTHAI CLINICWACHGUM (SUKUMWIT 56)', 'address' => '18/2 Soi Sukhumvit 56 Sukhumvit Rd Phra Khanong Bangkok 10400'],
        ];
        $arr[] = [
            'tel' => '02 742 4398', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/Gwe5L2zj62U1ExQ19',
            'th' => ['title' => 'คลินิกเวชกรรมกล้วยน้ำไท สาขาอ่อนนุช', 'address' => '227/1,229 ซ.สุขุมวิท 77 - วัฒนา กรุงเทพมหานคร 10110'],
            'en' => ['title' => 'KLUAYNUMTHAI CLINICWACHGUM ( SUKUMWIT 93)', 'address' => '21/5-7 building Mandarin  Soi Sukhumvit 93 Sukhumvit Rd Phra Khanong Bangkok 10110'],
        ];
        $arr[] = [
            'tel' => '02 741 6774', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/RmdREVxY1v8sCDuj9',
            'th' => ['title' => 'คลินิกเวชกรรมกล้วยน้ำไท สุขุมวิท56', 'address' => '18/2 ซ.สุขุมวิท 56 ถ.สุขุมวิท พระโขนง กรุงเทพมหานคร 10260'],
            'en' => ['title' => 'KLUAYNAMTHAI CLINICWECHGUM (SUPAPONG3)', 'address' => '13/69 - Prawet Bangkok 10260'],
        ];
        $arr[] = [
            'tel' => '02 742 5661', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/TMcPaDxCGeJTsNPb8',
            'th' => ['title' => 'คลินิกเวชกรรมกล้วยน้ำไท สุขุมวิท93', 'address' => '21/5-7อาคารแมนดาริน ซ.สุขุมวิท93 ถ.สุขุมวิท พระโขนง กรุงเทพมหานคร 10260'],
            'en' => ['title' => 'PAOLO CLINIC SUN TOWER B', 'address' => '123 Sun Tower B building Floor 11 Vibhavadi Rangsit Road Chatuchak Bangkok 10260'],
        ];
        $arr[] = [
            'tel' => '02 743 4963', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/WS6Q4463irYd3kcD7',
            'th' => ['title' => 'คลินิกเวชกรรมกล้วยน้ำไท สุภาพงษ์3', 'address' => '13/69 - ประเวศ กรุงเทพมหานคร 10250'],
            'en' => ['title' => 'PLALO CLINIC RASA TOWER', 'address' => '555 Rasa Tower (Building 2) Room number 102 , G Floor  Phahonyothin Rd Chatuchak Bangkok 10250'],
        ];
        $arr[] = [
            'tel' => '02 617 6474', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/J8Vtdyqf7mGkrFAj8',
            'th' => ['title' => 'คลินิกเวชกรรมเปาโล สาขาซันทาวเวอร์สบี', 'address' => '123  ชั้น 11  อาคารซันทาวเวอร์สบี ถ.วิภาวดีรังสิต จตุจักร กรุงเทพมหานคร 10900'],
            'en' => ['title' => 'BNH @ ALLSEASON CLINIC           ', 'address' => '87/204-206 Room number 123/1 Wireless Road Phathumwan Bangkok 10900'],
        ];
        $arr[] = [
            'tel' => '02 937 1200', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/ciXB8EVQivaAhRJg6',
            'th' => ['title' => 'คลินิกเวชกรรมเปาโล สาขารสาทาวเวอร์', 'address' => '555 อาคาร รสา ทาวเวอร์ (อาคาร2) ห้องเลขที่ 102 ชั้น G ถ.พหลโยธิน จตุจักร กรุงเทพมหานคร 10900'],
            'en' => ['title' => 'MITRMITRI CLINIC LASALLE', 'address' => '454, 456, 458 Lasalle Rd Bang-na Bangkok 10900'],
        ];
        $arr[] = [
            'tel' => '02 686 2727', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/diZsCwQnq7vt43n17',
            'th' => ['title' => 'บี เอ็น เอช แอท ออลซีซั่นส์ คลินิกเวชกรรม', 'address' => '87/204-206 ห้องเลขที่ 123/1 ถ.วิทยุ ปทุมวัน กรุงเทพมหานคร 10330'],
            'en' => ['title' => 'MITRMITRI CLINIC KAEW NGAN THONG', 'address' => '136 Kaew Ngoen Thong Road Taling Chan Bangkok 10330'],
        ];
        $arr[] = [
            'tel' => '02 060 8911', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/6byMoJmZNd61may67',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมลาซาล', 'address' => '454, 456, 458 ถ.ลาซาล บางนา กรุงเทพมหานคร 10260'],
            'en' => ['title' => 'BANGPAKOK 2 HOSPITAL', 'address' => '372-372/1 Ekachai Road Bang Bon Bangkok 10260'],
        ];
        $arr[] = [
            'tel' => '02 060 8912', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/6GDHeL259aohUWtZ7',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมแก้วเงินทอง', 'address' => '136 ถ.แก้วเงินทอง ตลิ่งชัน กรุงเทพมหานคร 10170'],
            'en' => ['title' => 'KLUAYNUMTHAI SAHACLINIC (KLUAYNUMTHAI2 HOSPITAL)', 'address' => '27 Sukhumvit 68 - Bang-na Bangkok 10170'],
        ];
        $arr[] = [
            'tel' => '02 996 2214', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/PkzKNoyAEH6VhbFe9',
            'th' => ['title' => 'สถานพยาบาลเวชกรรมบางปะกอก 2', 'address' => '372-372/1 ถ.เอกชัย บางบอน กรุงเทพมหานคร 10110'],
            'en' => ['title' => 'KLUAYNAMTHAI SAHACLINIC (RAM 2)', 'address' => '136/1-2 Moo 8 - Prawet Bangkok 10110'],
        ];
        $arr[] = [
            'tel' => '02 399 4259', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/TkbwEUkYsyEaf8hH7',
            'th' => ['title' => 'สหคลินิกกล้วยน้ำไท รพ.กล้วยน้ำไท2', 'address' => '27 สุขุมวิท 68 - บางนา กรุงเทพมหานคร 10260'],
            'en' => ['title' => 'KLUAYNUMTHAI SAHACLINIC (SATON)', 'address' => '217 South Sathon Sathon Bangkok 10260'],
        ];
        $arr[] = [
            'tel' => '02 751 6894', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://g.page/ClinicRamll?share',
            'th' => ['title' => 'สหคลินิกกล้วยน้ำไท ราม2', 'address' => '136/1-2 หมู่ 8 - ประเวศ กรุงเทพมหานคร 10250'],
            'en' => ['title' => 'KLUAYNUMTHAI (ASOK)', 'address' => '217/1   G Floor Asoke Tower - Phra Khanong Bangkok 10250'],
        ];
        $arr[] = [
            'tel' => '02 636 7733', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/KYQzQtDmmqPnJQaZA',
            'th' => ['title' => 'สหคลินิกกล้วยน้ำไท สาทร', 'address' => '217 ถ.สาทรใต้ สาทร กรุงเทพมหานคร 10120'],
            'en' => ['title' => 'KLUAYNUMTHAI (THESHOP GRAND PRARAM 9)', 'address' => 'The Shoppes Grand Rama 9 - Huai Khwang Bangkok 10120'],
        ];
        $arr[] = [
            'tel' => '02 664 0153', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/SxkXXxzhCLtPpkQu9',
            'th' => ['title' => 'สหคลินิกกล้วยน้ำไทสาขาอโศก', 'address' => '217/1   ชั้น G  อาคารอโศกทาวเวอร์ส - พระโขนง กรุงเทพมหานคร 10260'],
            'en' => ['title' => 'CENTRAL MEDIC CLINIC DINDANG', 'address' => '1026 Pracha Songkhro Rd Huai Khwang Bangkok 10260'],
        ];
        $arr[] = [
            'tel' => '02 168 1112', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/s2sMQfKCX43gJxkp8',
            'th' => ['title' => 'สหคลินิกกล้วยน้ำไทสาขาเดอะช็อปปส์แกรนด์พระราม9', 'address' => 'เดอะช็อปปส์แกรนด์พระราม 9 - ห้วยขวาง กรุงเทพมหานคร 10320'],
            'en' => ['title' => 'CENTRAL MEDIC CLINIC BANGCHAN', 'address' => '17, 19 Seri Thai Rd Minburi Bangkok 10320'],
        ];
        $arr[] = [
            'tel' => '02 644 1644', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/RWSU9ZPoGBUvzz3k6',
            'th' => ['title' => 'เซ็นทรัลเมดิก คลินิกเวชกรรม สาขาดินแดง', 'address' => '1026 ถ.ประชาสงเคราะห์ ห้วยขวาง กรุงเทพมหานคร 10320'],
            'en' => ['title' => 'CENTRAL MEDIC CLINIC PRAKANONG', 'address' => '40/1 Sukhumvit 71 Wattana Bangkok 10320'],
        ];
        $arr[] = [
            'tel' => '02 919 8933', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/eNCvz8JdAExK5YSL8',
            'th' => ['title' => 'เซ็นทรัลเมดิก คลินิกเวชกรรม สาขาบางชัน', 'address' => '17, 19 ถ.เสรีไทย มีนบุรี กรุงเทพมหานคร 10510'],
            'en' => ['title' => 'CENTRAL MEDIC RACHADA POLYCLINIC', 'address' => '3062 Pracha Songkhro 30  Huai Khwang Bangkok 10510'],
        ];
        $arr[] = [
            'tel' => '02 711 0460', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/wfxV3yw2jfkmdEc68',
            'th' => ['title' => 'เซ็นทรัลเมดิก คลินิกเวชกรรม สาขาพระโขนง', 'address' => '40/1 ถ.สุขุมวิท 71 วัฒนา กรุงเทพมหานคร 10110'],
            'en' => ['title' => 'CENTRAL MEDIC CLINIC KASET', 'address' => '2127 Ngam Wong Wan Rd Bang Khen Bangkok 10110'],
        ];
        $arr[] = [
            'tel' => '02 692 5206', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/AvWBNVG6CosW5HkE6',
            'th' => ['title' => 'เซ็นทรัลเมดิก คลินิกเวชกรรม สาขารัชดา', 'address' => '3062 ถ.ประชาสงเคราะห์ 30 ห้วยขวาง กรุงเทพมหานคร 10320'],
            'en' => ['title' => 'CENTRAL MEDIC ST. LOUIS CLINIC', 'address' => '9/9 Soi St. Louis 3 Sathon Bangkok 10320'],
        ];
        $arr[] = [
            'tel' => '02 941 1440', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/AvWBNVG6CosW5HkE6',
            'th' => ['title' => 'เซ็นทรัลเมดิก คลินิกเวชกรรม สาขาเกษตร', 'address' => '2127 ถ.งามวงศ์วาน บางเขน กรุงเทพมหานคร 10900'],
            'en' => ['title' => 'BANGKOK SMILE DENTAL CLINIC – SUKHUMVIT 21 BRANCH', 'address' => '12/9 Soi Sukhumvit 21 Wattana Bangkok 10900'],
        ];
        $arr[] = [
            'tel' => '02 673 1773', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/sbCJJTbUCXdcGYa48',
            'th' => ['title' => 'เซ็นทรัลเมดิก คลินิกเวชกรรม สาขาเซนต์หลุยส์', 'address' => '9/9 ตรอกจันทร์สะพาน 3 สาทร กรุงเทพมหานคร 10120'],
            'en' => ['title' => 'PAOPO MEDICAL CLINIC THAI MALITARY BRANCH', 'address' => '3000 TMB Head office  1st Floor Phahonyothin Rd Chatuchak Bangkok 10120'],
        ];
        $arr[] = [
            'tel' => '02 664 2155', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/nDwYaPZFaBQpySLy5',
            'th' => ['title' => 'คลินิกทันตกรรมบางกอกสไมล์(อโศก)', 'address' => '12/9 ถนนสุรศักดิ์ สาทร กรุงเทพมหานคร 10500'],
            'en' => ['title' => 'MITRMITRI CLINIC UDOMSUK', 'address' => '184-186 Bang-na Bang-na Bangkok 10500'],
        ];
        $arr[] = [
            'tel' => '02 299 1111', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/eXfLcW4iEDVR6FbT9',
            'th' => ['title' => 'คลินิกเวชกรรมเปาโล สาขา ธ.ทหารไทย สนง.ใหญ่', 'address' => '3000 อาคารสำนักงานธนาคารทหารไทยสำนักงานใหญ่ ชั้น 1 พหลโยธิน จตุจักร กรุงเทพมหานคร 10900'],
            'en' => ['title' => 'RSU HEALTHCARE', 'address' => '571   RSU Tower , Floor G,11,12 Klong Ton Nua Wattana Bangkok 10900'],
        ];
        $arr[] = [
            'tel' => '02 019 8577', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/BQegBaXmjTSqEsk19',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมอุดมสุข', 'address' => '184-186 บางนา บางนา กรุงเทพมหานคร 10260'],
            'en' => ['title' => 'MITRMITRI CLINIC KRISDA NAKHON', 'address' => '53/47 Kritsada Nakorn Village Moo 5 Chaeng Watthana Rd Pakkret Nonthaburi 10260'],
        ];
        $arr[] = [
            'tel' => '02 610 0300', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/F8VkcFPUnSaQ8SPb6',
            'th' => ['title' => 'อาร์เอสยู เฮลท์ แคร์', 'address' => '571   อาคารอาร์เอสยูทาวเวอร์ ชั้น G,11,12 คลองตันเหนือ วัฒนา กรุงเทพมหานคร 10110'],
            'en' => ['title' => 'MITRMITRI CLINIC KLONG PRAPA', 'address' => '46/118-119 - Amphoe Mueang Nonthaburi Nonthaburi 10110'],
        ];
        $arr[] = [
            'tel' => '02 982 9314', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/pvf746JNx2FUCLNr7',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมกฤษดานคร', 'address' => '53/47 หมู่บ้านกฤษดานคร หมู่ 5 ถ.แจ้งวัฒนะ ปากเกร็ด นนทบุรี 11120'],
            'en' => ['title' => 'MITRMITRI CLINIC DUANGKAO', 'address' => '77/2 Moo 1 Tiwanon Rd Pakkret Nonthaburi 11120'],
        ];
        $arr[] = [
            'tel' => '02 952 5545', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/2qSe6hzZmiCx5yT27',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมคลองประปา', 'address' => '46/118-119 - เมืองนนทบุรี นนทบุรี 11000'],
            'en' => ['title' => 'MITRMITRI CLINIC TA SAI', 'address' => '157 Pracha Niwet 3 Soi 12 Amphoe Mueang Nonthaburi Nonthaburi 11000'],
        ];
        $arr[] = [
            'tel' => '02 961 3857', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/512wtKspYHo4A3Vb9',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมดวงแก้ว', 'address' => '77/2 หมู่ 1 ถ.ติวานนท์ ปากเกร็ด นนทบุรี 11120'],
            'en' => ['title' => 'MITRMITRI CLINIC TARN THONG', 'address' => '90/9-10 Soi Mu Ban Than Thong 2 - Bang Bua Thong Nonthaburi 11120'],
        ];
        $arr[] = [
            'tel' => '02 952 9911', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/iHk9mMnyP1UNbiX48',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมท่าทราย', 'address' => '157 ประชานิเวศน์ 3 เมืองนนทบุรี นนทบุรี 11000'],
            'en' => ['title' => 'MITRMITRI CLINIC BUATHONG BRANCH', 'address' => '5/53-54 Moo 1 - Bang Bua Thong Nonthaburi 11000'],
        ];
        $arr[] = [
            'tel' => '02 834 2782', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/g5WpidwACDGd6JM1A',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมธารทอง', 'address' => '90/9-10 ซ.หมู่บ้านธารทอง 2 - บางบัวทอง นนทบุรี 11110'],
            'en' => ['title' => 'MITRMITRI CLINIC BANGKUAY', 'address' => '20/32-33 Soi Phanurangsri - Bang Kruai Nonthaburi 11110'],
        ];
        $arr[] = [
            'tel' => '02 925 9944', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/CA5bTN72t7fnzcbg6',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมบัวทองเคหะ', 'address' => '5/53-54 หมู่ 1 - บางบัวทอง นนทบุรี 11110'],
            'en' => ['title' => 'MITRMITRI CLINIC BANGYAI CITY', 'address' => '61/25-26 Soi Bang Yai City Kanchanaphisek Expressway Bang Yai Nonthaburi 11110'],
        ];
        $arr[] = [
            'tel' => '02 883 6049', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/8FMKLLzuJgNcCo5F7',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมบางกรวย', 'address' => '20/32-33 ซ.ภาณุรังษี - บางกรวย นนทบุรี 11130'],
            'en' => ['title' => 'MITRMITRI CLINIC PRACHACHUEN BRANCH', 'address' => '438 Samakkhi Rd - Amphoe Mueang Nonthaburi Nonthaburi 11130'],
        ];
        $arr[] = [
            'tel' => '02 010 2329', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/2zD963J75QuTaDa68',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมบางใหญ่ซิตี้', 'address' => '61/25-26 ซ.บางใหญ่ซิตี้ ถ.กาญจนาภิเษก บางใหญ่ นนทบุรี 11140'],
            'en' => ['title' => 'MITRMITRI CLINIC PRACHA NIWET 3', 'address' => '22/8 Ngamwongwarn 23 Alley - Amphoe Mueang Nonthaburi Nonthaburi 11140'],
        ];
        $arr[] = [
            'tel' => '02 980 1350', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/qSnmijriMToDchxG9',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมประชาชื่น', 'address' => '438 ซ.สามัคคี - เมืองนนทบุรี นนทบุรี 11000'],
            'en' => ['title' => 'MITRMITRI CLINIC PRAPIN 3', 'address' => '66/11-12 Moo 15 Kanchanaphisek Expressway Bang Yai Nonthaburi 11000'],
        ];
        $arr[] = [
            'tel' => '02 019 2755', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/vYFd3fNL92ru2wRv9',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมประชานิเวศน์3', 'address' => '22/8 ซ.วัดบัวขวัญ - เมืองนนทบุรี นนทบุรี 11000'],
            'en' => ['title' => 'MITRMITRI CLINIC PREKSA 3', 'address' => '46/69-70 Moo 8 - Bang Bua Thong Nonthaburi 11000'],
        ];
        $arr[] = [
            'tel' => '02 903 3663', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/KRjL738qYFevLhLGA',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมพระปิ่น 3', 'address' => '66/11-12 หมู่ 15 ถ.กาญจนาภิเษก บางใหญ่ นนทบุรี 11140'],
            'en' => ['title' => 'MITRMITRI CLINIC PIMOLRAJ', 'address' => '55/187 Moo 3 Baan Kluay - Sai Noi Rd Bang Bua Thong Nonthaburi 11140'],
        ];
        $arr[] = [
            'tel' => '02 965 4481', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/U7VohkzTTuw2cTXJ8',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมพฤกษา 3', 'address' => '46/69-70 หมู่ที่ 8 - บางบัวทอง นนทบุรี 11110'],
            'en' => ['title' => 'MITRMITRI CLINIC MAHASAWAT', 'address' => '599/9-10 - Bang Kruai Nonthaburi 11110'],
        ];
        $arr[] = [
            'tel' => '02 923 6890', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/X95HBUGDvMFaUiuC9',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมพิมลราช', 'address' => '55/187 หมู่ 3 ถ.บ้านกล้วย-ไทรน้อย บางบัวทอง นนทบุรี 11110'],
            'en' => ['title' => 'MITRMITRI CLINIC LAN THONG', 'address' => '40/10 Moo 3 Tiwanon Rd Pakkret Nonthaburi 11110'],
        ];
        $arr[] = [
            'tel' => '02 041 6533', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/39xZ2B6wbBXpZ8uD9',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมมหาสวัสดิ์', 'address' => '599/9-10 - บางกรวย นนทบุรี 11130'],
            'en' => ['title' => 'MITRMITRI CLINIC SANAMBINNAM', 'address' => '46/69-70 Moo 8 - Bang Bua Thong Nonthaburi 11130'],
        ];
        $arr[] = [
            'tel' => '02 963 2338', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/niiv3a99HwMoe6hE9',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมลานทอง', 'address' => '40/10 หมู่ 3 ถ.ติวานนท์ ปากเกร็ด นนทบุรี 11120'],
            'en' => ['title' => 'MITRMITRI CLINIC CHAOPRAYA', 'address' => '83/19 Moo 9 Bang Yai-Bang Muang Road Bang Yai Nonthaburi 11120'],
        ];
        $arr[] = [
            'tel' => '02 968 7273', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/aXN8LAc5YP3yEePTA',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมสนามบินน้ำ', 'address' => '46/69-70 หมู่ 8 - บางบัวทอง นนทบุรี 11110'],
            'en' => ['title' => 'SAMITIVEJ MUANGTHONG THANI MEDICAL', 'address' => '133 Popular 3 Rd Tambon Ban Mai Pakkret Nonthaburi 11110'],
        ];
        $arr[] = [
            'tel' => '02 920 0957', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/4eSfserGxgHpcXEE9',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมเจ้าพระยา', 'address' => '83/19 หมู่ 9 ถ.บางใหญ่-บางม่วง บางใหญ่ นนทบุรี 11140'],
            'en' => ['title' => 'CENTRAL MEDIC CLINIC PAKKRED', 'address' => '121/5 Chaeng Watthana Rd Pakkret Nonthaburi 11140'],
        ];
        $arr[] = [
            'tel' => '02 980 7087 ', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/sDGUDsBxrRsf94Vo6',
            'th' => ['title' => 'สมิติเวชเมืองทองธานี สหคลินิก', 'address' => '133 ซ.สุขุมวิท 49 ถ.สุขุมวิท ปากเกร็ด นนทบุรี 11120'],
            'en' => ['title' => 'MITRMITRI CLINIC KLONG THANON', 'address' => '104/128-129 Moo 2   Bang Yai Nonthaburi 11120'],
        ];
        $arr[] = [
            'tel' => '02 960 9244', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/9JaKR3uoZ438rriW6',
            'th' => ['title' => 'เซ็นทรัลเมดิก คลินิกเวชกรรม สาขาปากเกร็ด', 'address' => '121/5 ถ.แจ้งวัฒนะ ปากเกร็ด นนทบุรี 11120'],
            'en' => ['title' => 'MITRMITRI CLINIC WAT PHA-NGERN', 'address' => '25/32  Moo 8  Thanon Bang Muang - Bang Kulad Bang Yai Nonthaburi 11120'],
        ];
        $arr[] = [
            'tel' => '02 053 7417', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/9xd35j1BGVd2M2tv5',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมคลองถนน', 'address' => '104/128-129 หมู่ 2   บางใหญ่  นนทบุรี 11140'],
            'en' => ['title' => 'MITRMITRI CLINIC KLONG 3', 'address' => '37/6, 41 Moo 4 Khlong Sam Khlong Luang Pathumthani 11140'],
        ];
        $arr[] = [
            'tel' => '02 053 7418', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/MaFvgo4WV8ekqwKLA',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมวัดพระเงิน', 'address' => '25/32  หมู่ 8  บางม่วง บางใหญ่ นนทบุรี 11140'],
            'en' => ['title' => 'MITRMITRI CLINIC KLONG 1', 'address' => '38/212 Moo 1 - Khlong Luang Pathumthani 11140'],
        ];
        $arr[] = [
            'tel' => '02 834 0127', 'cat_id' => '92',
            'website' => '',
            'province' => '27', 'location' => 'https://goo.gl/maps/sr8Ld31neiW3nTcY8',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมคลอง3', 'address' => '37/6, 41 หมู่ 4 ถ.พฤกษา 13 คลองหลวง ปทุมธานี 12120'],
            'en' => ['title' => 'MITRMITRI CLINIC SOI KHUNPRA', 'address' => '5/29-30 Moo 6 - Khlong Luang Pathumthani 12120'],
        ];
        $arr[] = [
            'tel' => '02 901 2884', 'cat_id' => '92',
            'website' => '',
            'province' => '27', 'location' => 'https://goo.gl/maps/XwHshGZwDuQA63F1A',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมคลองหนึ่ง', 'address' => '38/212 หมู่ 1 - คลองหลวง ปทุมธานี 13180'],
            'en' => ['title' => 'MITRMITRI CLINIC NAVA NAKORN', 'address' => '12/27-28 Moo 19 - Khlong Luang Pathumthani 13180'],
        ];
        $arr[] = [
            'tel' => '02 012 6830', 'cat_id' => '92',
            'website' => '',
            'province' => '27', 'location' => 'https://goo.gl/maps/AXHYJ6AB95qVvTEa6',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมซอยคุณพระ', 'address' => '5/29-30 หมู่ 6 - คลองหลวง ปทุมธานี 13180'],
            'en' => ['title' => 'MITRMITRI CLINIC LAD SAWAI', 'address' => '29/37-39 Moo 5 Sawaipracharaj Rd Lam Luk Ka Pathumthani 13180'],
        ];
        $arr[] = [
            'tel' => '02 909 4998', 'cat_id' => '92',
            'website' => '',
            'province' => '27', 'location' => 'https://goo.gl/maps/dkGG2bY22LACu5LbA',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมนวนคร', 'address' => '12/27-28 หมู่ 19 - คลองหลวง ปทุมธานี 13180'],
            'en' => ['title' => 'MITRMITRI CLINIC UTHONG', 'address' => '95/62-63 Moo 3 Prachauthit Rd Lam Luk Ka Pathumthani 13180'],
        ];
        $arr[] = [
            'tel' => '02 994 4555', 'cat_id' => '92',
            'website' => '',
            'province' => '27', 'location' => 'https://goo.gl/maps/5d8Ef24orCYR5aLN7',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมลาดสวาย', 'address' => '29/37-39 หมู่ 5 - ลำลูกกา ปทุมธานี 12150'],
            'en' => ['title' => 'MITRMITRI CLINIC THEPKULCHON', 'address' => '58/194-195 Moo 14 - Khlong Luang Pathumthani 12150'],
        ];
        $arr[] = [
            'tel' => '02 987 2880', 'cat_id' => '92',
            'website' => '',
            'province' => '27', 'location' => 'https://goo.gl/maps/UGDpRxe76Wnxy3Uz6',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมอู่ทอง', 'address' => '95/62-63 หมู่ 3 ถ.ประชาอุทิศ ลำลูกกา ปทุมธานี 12130'],
            'en' => ['title' => 'MITRMITRI CLINIC SEMA FHA KHAM', 'address' => '23/19 Moo 6 - Lam Luk Ka Pathumthani 12130'],
        ];
        $arr[] = [
            'tel' => '02 198 2177', 'cat_id' => '92',
            'website' => '',
            'province' => '27', 'location' => 'https://goo.gl/maps/f3otXe5M2kTRfPL9A',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมเทพกุญชร', 'address' => '58/194-195 หมู่ 14 - คลองหลวง ปทุมธานี 13180'],
            'en' => ['title' => 'MITRMITRI CLINIC THAI SOM BOON', 'address' => '34/12-13 Moo 2 - Khlong Luang Pathumthani 13180'],
        ];
        $arr[] = [
            'tel' => '02 987 5844', 'cat_id' => '92',
            'website' => '',
            'province' => '27', 'location' => 'https://goo.gl/maps/AQ8wKXLv6ppYShJu6',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมเสมาฟ้าคราม', 'address' => '23/19 หมู่ 6 - ลำลูกกา ปทุมธานี 12130'],
            'en' => ['title' => 'MITRMITRI CLINIC IYARA', 'address' => '91/2-4 Moo 9 - Khlong Luang Pathumthani 12130'],
        ];
        $arr[] = [
            'tel' => '02 191 2522', 'cat_id' => '92',
            'website' => '',
            'province' => '27', 'location' => 'https://goo.gl/maps/69cp3mkYDfW5mw2u7',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมไทยสมบูรณ์', 'address' => '34/12-13 หมู่ 2 - คลองหลวง ปทุมธานี 12120'],
            'en' => ['title' => 'SAIMAI HOSPITAL ( KLONG 8 )', 'address' => '80/77-80 Moo 5 - Lam Luk Ka Pathumthani 12120'],
        ];
        $arr[] = [
            'tel' => '02 034 0911', 'cat_id' => '92',
            'website' => '',
            'province' => '27', 'location' => 'https://goo.gl/maps/Gx4WXJE145Qcs9Fc8',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมไอยรา', 'address' => '91/2-4 หมู่ 9 - คลองหลวง ปทุมธานี 13180'],
            'en' => ['title' => 'MITRMITRI CLINIC BUENG KHAM PROI', 'address' => '39/191-192  Moo 4   Lam Luk Ka Pathumthani 13180'],
        ];
        $arr[] = [
            'tel' => '02 991 8999', 'cat_id' => '90',
            'website' => '',
            'province' => '27', 'location' => 'https://goo.gl/maps/CaAhY2zrudGf6ZGu5',
            'th' => ['title' => 'โรงพยาบาลสายไหม (คลอง 8) โดย ซีจีเอช ลำลูกกา จำกัด', 'address' => '80/77-80 หมู่ 5 - ลำลูกกา ปทุมธานี 12150'],
            'en' => ['title' => 'MITRMITRI CLINIC SAM KHOK', 'address' => '49/27-28 Moo 4   Sam Khok  Pathumthani 12150'],
        ];
        $arr[] = [
            'tel' => '02 050 1887', 'cat_id' => '92',
            'website' => '',
            'province' => '27', 'location' => 'https://goo.gl/maps/cmj5nc3zrXf8BBVs7',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมบึงคำพร้อย', 'address' => '39/191-192  หมู่ 4   ลำลูกกา ปทุมธานี 12150'],
            'en' => ['title' => 'CHULARAT 2 CLINIC', 'address' => '728/1-2 Km.3 Thepharak Rd Amphoe Mueang Samut Prakan Samut Prakan 12150'],
        ];
        $arr[] = [
            'tel' => '02 053 7610', 'cat_id' => '92',
            'website' => '',
            'province' => '27', 'location' => 'https://goo.gl/maps/TDAVADbTGP4vG14M7',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมสามโคก', 'address' => '49/27-28 หมู่ 4   สามโคก ปทุมธานี 12160'],
            'en' => ['title' => 'CHULARAT 4 CLINIC', 'address' => '1541/6-7 - Amphoe Mueang Samut Prakan Samut Prakan 12160'],
        ];
        $arr[] = [
            'tel' => '02 753 2876', 'cat_id' => '92',
            'website' => '',
            'province' => '56', 'location' => 'https://goo.gl/maps/8kkCFKguGGecBE6B6',
            'th' => ['title' => 'คลินิกเวชกรรม จุฬารัตน์ 2', 'address' => '728/1-2 กม.3 ถ.เทพารักษ์ เมืองสมุทรปราการ สมุทรปราการ 10270'],
            'en' => ['title' => 'FREEZONE MEDICAL CLINIC', 'address' => '999 (Free Zone) Suvannabhummi Airport Bang Phli Samut Prakan 10270'],
        ];
        $arr[] = [
            'tel' => '02 385 2693', 'cat_id' => '92',
            'website' => '',
            'province' => '56', 'location' => 'https://goo.gl/maps/wv3uGLoWrYxTJgDQ8',
            'th' => ['title' => 'คลินิกเวชกรรม จุฬารัตน์ 4', 'address' => '1541/6-7 - เมืองสมุทรปราการ สมุทรปราการ 10270'],
            'en' => ['title' => 'MITRMITRI CLINIC TALAD THAI PRAKAN', 'address' => '155/27-28 Moo 1 Thepharak Rd Bang Sao Thong Samut Prakan 10270'],
        ];
        $arr[] = [
            'tel' => '02 134 2666', 'cat_id' => '92',
            'website' => '',
            'province' => '56', 'location' => '',
            'th' => ['title' => 'ฟรีโซนคลินิกเวชกรรม(คลินิกในเครือสมิติเวช)', 'address' => '999 (เขตฟรีโซน) ท่าอากาศยานสุวรรณภูมิ บางพลี สมุทรปราการ 10540'],
            'en' => ['title' => 'MITRMITRI CLINIC BANGPU', 'address' => '888/39 Moo 6 Phraeksa Rd Amphoe Mueang Samut Prakan Samut Prakan 10540'],
        ];
        $arr[] = [
            'tel' => '02 706 4050', 'cat_id' => '92',
            'website' => '',
            'province' => '56', 'location' => 'https://goo.gl/maps/eYdYk8Hn9puViMHL7',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมตลาดไทยประกัน', 'address' => '155/27-28 หมู่ 1 ถ.เทพารักษ์ กิ่งอำเภอบางเสาธง สมุทรปราการ 10540'],
            'en' => ['title' => 'MITRMITRI CLINIC WAT DAN SAM RONG', 'address' => '331/6-7 Moo 4 Sukhumvit 113 Amphoe Mueang Samut Prakan Samut Prakan 10540'],
        ];
        $arr[] = [
            'tel' => '02 035 7060', 'cat_id' => '92',
            'website' => '',
            'province' => '56', 'location' => 'https://goo.gl/maps/xr1Eucvgr7LxV6fc8',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมบางปู', 'address' => '888/39 หมู่ 6 ถ.แพรกษา เมืองสมุทรปราการ สมุทรปราการ 10280'],
            'en' => ['title' => 'MITRMITRI CLINIC PREKSA', 'address' => '754/53-54 Moo 1 - Amphoe Mueang Samut Prakan Samut Prakan 10280'],
        ];
        $arr[] = [
            'tel' => '02 037 1933', 'cat_id' => '92',
            'website' => '',
            'province' => '56', 'location' => 'https://goo.gl/maps/ZxTZJqZZJ88emKVD7',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมวัดด่านสำโรง', 'address' => '331/6-7 หมู่ 4 ถ.ศรีนครินทร์ เมืองสมุทรปราการ สมุทรปราการ 10270'],
            'en' => ['title' => 'CHULARAT 1 HOSPITAL', 'address' => '68/1-2 - Bang Phli Samut Prakan 10270'],
        ];
        $arr[] = [
            'tel' => '02 174 4954', 'cat_id' => '92',
            'website' => '',
            'province' => '56', 'location' => 'https://goo.gl/maps/APZnV5nhgSWf7YrQ7',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมแพรกษา', 'address' => '754/53-54 หมู่ 1 - เมืองสมุทรปราการ สมุทรปราการ 10270'],
            'en' => ['title' => 'CHULARAT 5 HOSPITAL', 'address' => '119/7 Moo16 - Bang Phli Samut Prakan 10270'],
        ];
        $arr[] = [
            'tel' => '02 316 9561', 'cat_id' => '92',
            'website' => '',
            'province' => '56', 'location' => 'https://goo.gl/maps/W8SJDutqF3F1ioaD7',
            'th' => ['title' => 'สถานพยาบาลจุฬารัตน์ 1', 'address' => '68/1-2 - บางพลี สมุทรปราการ 10540'],
            'en' => ['title' => 'SAMITIVEJ SUVARNABHUMI  CLINICWECHAGUM', 'address' => '133 Soi Sukhumvit 49 - Bang Phli Samut Prakan 10540'],
        ];
        $arr[] = [
            'tel' => '02 315 1868', 'cat_id' => '92',
            'website' => '',
            'province' => '56', 'location' => 'https://goo.gl/maps/LEN4Qt1doHkR3HhD8',
            'th' => ['title' => 'สถานพยาบาลจุฬารัตน์ 5', 'address' => '119/7 หมู่16 - บางพลี สมุทรปราการ 10540'],
            'en' => ['title' => 'MEDICA CLINIC', 'address' => '42/2 Moo 9 Suksawat Road Amphoe Phra Pradaeng Samut Prakan 10540'],
        ];
        $arr[] = [
            'tel' => '02 134 2666', 'cat_id' => '92',
            'website' => '',
            'province' => '56', 'location' => 'https://goo.gl/maps/nrJd9S8NJPDdwbt96',
            'th' => ['title' => 'สมิติเวชสุวรรณภูมิคลินิกเวชกรรม', 'address' => '133 ซ.สุขุมวิท 49 - บางพลี สมุทรปราการ 10110'],
            'en' => ['title' => 'ASIA HOSPITAL', 'address' => '13/7 Moo 13   Uthai Ayutthaya 10110'],
        ];
        $arr[] = [
            'tel' => '02 819 1176', 'cat_id' => '92',
            'website' => '',
            'province' => '56', 'location' => 'https://goo.gl/maps/mhCwdTtEUK6RkewV9',
            'th' => ['title' => 'เมดิก้า คลินิกเวชกรรม', 'address' => '42/2 หมู่ 9 ถ.สุขสวัสดิ์ พระประแดง สมุทรปราการ 10130'],
            'en' => ['title' => 'BANGKOK RAYONG CLINIC BORVIN', 'address' => '444/23 Moo 3 - Si Racha Chonburi 10130'],
        ];
        $arr[] = [
            'tel' => '035 904 478', 'cat_id' => '92',
            'website' => '',
            'province' => '31', 'location' => 'https://goo.gl/maps/WLYCm9bs1gsrxtXj7',
            'th' => ['title' => 'โรงพยาบาลเอเชีย โรงพยาบาลทั่วไปขนาดเล็ก', 'address' => '13/7 หมู่ 13 ต.อุทัย  อุทัย พระนครศรีอยุธยา 13210'],
            'en' => ['title' => 'PIYAVATE BOWIN CLINIC', 'address' => '120/119 - Si Racha Chonburi 13210'],
        ];
        $arr[] = [
            'tel' => '038 337 969', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/mUVaAu4DMvVVPx278',
            'th' => ['title' => 'คลินิกกรุงเทพระยองสาขาบ่อวิน', 'address' => '444/23 หมู่ 3 - ศรีราชา ชลบุรี 20210'],
            'en' => ['title' => 'PHYATHAI  BOWIN CLINIC', 'address' => '333/124 -125 Moo 3 - Si Racha Chonburi 20210'],
        ];
        $arr[] = [
            'tel' => '038 337 333', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/kWN8rphmzeYnJnek7',
            'th' => ['title' => 'คลินิกปิยะเวชช์ บ่อวิน เวชกรรม', 'address' => '120/119 - ศรีราชา ชลบุรี 20230'],
            'en' => ['title' => 'SOMDEJPRANGCHAOSIRIKIT NAJOMTIEN CLINIC', 'address' => '161/41 Na Chom Thian Sattahip Chonburi 20230'],
        ];
        $arr[] = [
            'tel' => '038 337 928', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/MKmuV6zUMeBh2sMj7',
            'th' => ['title' => 'คลินิกพญาไทเวชกรรมบ่อวิน', 'address' => '333/124 -125 หมู่ 3 - ศรีราชา ชลบุรี 20230'],
            'en' => ['title' => 'SOMDEJPRANGCHAOSIRIKIT BOWIN CLINIC', 'address' => '303/15-16 Moo 3 - Si Racha Chonburi 20230'],
        ];
        $arr[] = [
            'tel' => '038 119 077', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/9YxEm9Nb8nwuAxh48',
            'th' => ['title' => 'คลินิกรพ.สมเด็จพระนางเจ้าสิริกิติ์ฯ สาขานาจอมเทียน', 'address' => '161/41 นาจอมเทียน สัตหีบ ชลบุรี 20250'],
            'en' => ['title' => 'SAMITIVEJ CLINIC PINTHONG', 'address' => '789/124 Moo 1 - Si Racha Chonburi 20250'],
        ];
        $arr[] = [
            'tel' => '038 197 955', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/wv2SxAzn5xXtqx4DA',
            'th' => ['title' => 'คลินิกรพ.สมเด็จพระนางเจ้าสิริกิติ์ฯ สาขาบ่อวิน', 'address' => '303/15-16 หมู่ 3 - ศรีราชา ชลบุรี 20230'],
            'en' => ['title' => 'SAMITIVEJ CLINIC SAHAPHAT', 'address' => '399/27-28 Moo 11 - Si Racha Chonburi 20230'],
        ];
        $arr[] = [
            'tel' => '038 348 290', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/6rLnhjvCth9pZkVA8',
            'th' => ['title' => 'คลินิกเวชกรรมสมิติเวช ปิ่นทอง', 'address' => '789/124 หมู่ 1 - ศรีราชา ชลบุรี 20210'],
            'en' => ['title' => 'SAMITIVEJ CLINIC LAEM CHABANG', 'address' => '49/19 Moo 5 - Si Racha Chonburi 20210'],
        ];
        $arr[] = [
            'tel' => '082 993 2300', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/32mtxAiNEw4Gscaj9',
            'th' => ['title' => 'คลินิกเวชกรรมสมิติเวช เครือสหพัฒน์', 'address' => '399/27-28 หมู่ 11 - ศรีราชา ชลบุรี 20210'],
            'en' => ['title' => 'BANGKOKPATTAYA CLINIC JOMTIEN BRANCH', 'address' => '234/1 Sukhumvit Rd Bang Lamung Chonburi 20210'],
        ];
        $arr[] = [
            'tel' => '082 993 2302', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/bzuFASaEZ1KUDtsz8',
            'th' => ['title' => 'คลินิกเวชกรรมสมิติเวช แหลมฉบัง', 'address' => '49/19 หมู่ 5 - ศรีราชา ชลบุรี 20210'],
            'en' => ['title' => 'BANGPRA MEDICAL CENTER', 'address' => '238/15 Moo 2 - Bang Phra Chonburi 20210'],
        ];
        $arr[] = [
            'tel' => '038 259 977', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/njXTHcjwdeSTC2z86',
            'th' => ['title' => 'คลินิกโรงพยาบาลกรุงเทพพัทยา สาขาจอมเทียน', 'address' => '234/1 ถ.สุขุมวิท บางละมุง ชลบุรี 20260'],
            'en' => ['title' => 'MITRMITRI CLINIC WAT WANG HIN', 'address' => '74/8 T.Surasak - Si Racha Chonburi 20260'],
        ];
        $arr[] = [
            'tel' => '038 341 334', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/YCjjdP8YRoYznccc9',
            'th' => ['title' => 'บางพระ เมดิคอล เซนเตอร์', 'address' => '238/15 หมู่ที่ 2 - บางพระ ชลบุรี 20110'],
            'en' => ['title' => 'MITRMITRI CLINIC NONG YAIBU', 'address' => '344/6-7 T.Surasak - Si Racha Chonburi 20110'],
        ];
        $arr[] = [
            'tel' => '033 112 125', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/gGXNMwSA6b6vEJE49',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมวัดวังหิน', 'address' => '74/8 ต.สุรศักดิ์ - ศรีราชา ชลบุรี 20110'],
            'en' => ['title' => 'MITRMITRI CLINIC HUAYYAI', 'address' => '38/26-28 Moo 1 - Bang Lamung Chonburi 20110'],
        ];
        $arr[] = [
            'tel' => '033 047 319', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/2F3CW8T4qMcC2JAA8',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมหนองยายบู่', 'address' => '344/6-7 ต.สุรศักดิ์ - ศรีราชา ชลบุรี 20110'],
            'en' => ['title' => 'MITRMITRI CLINIC KHAO TA LO', 'address' => '209/24-25 Moo 10 Sukhumvit Rd Bang Lamung Chonburi 20110'],
        ];
        $arr[] = [
            'tel' => '033 090 366', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/3x7jo8dYgLV2zHdX6',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมห้วยใหญ่', 'address' => '38/26-28 หมู่ 1 - บางละมุง ชลบุรี 20150'],
            'en' => ['title' => 'MITRMITRI CLINIC KHAO NOI', 'address' => '99/29-30 Moo 5 Sukhumvit Rd Bang Lamung Chonburi 20150'],
        ];
        $arr[] = [
            'tel' => '038 330 096', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/s6C2pL3JXhAtkFV27',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมเขาตาโล', 'address' => '209/24-25 หมู่ 10 ถ.สุขุมวิท บางละมุง ชลบุรี 20260'],
            'en' => ['title' => 'MITRMITRI CLINIC NERN PRUB WAN', 'address' => '33/32-33 Moo 13 - Bang Lamung Chonburi 20260'],
        ];
        $arr[] = [
            'tel' => '038 068 952', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/1PdQaD6WkE3oquf56',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมเขาน้อย', 'address' => '99/29-30 หมู่ 5 ถ.สุขุมวิท บางละมุง ชลบุรี 20260'],
            'en' => ['title' => 'POLY CLINIC SAMITIVEJ', 'address' => '7/14-16  Moo 1 Sukhumvit Rd Mueang Chon Buri Chonburi 20260'],
        ];
        $arr[] = [
            'tel' => '038 114 239', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/89PCShE7xgxYrGAv7',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมเนินพลับหวาน', 'address' => '33/32-33 หมู่ 13 - บางละมุง ชลบุรี 20260'],
            'en' => ['title' => 'POLY CLINIC SAMITIVEJ J PARK', 'address' => '445/1 Moo 5 - Si Racha Chonburi 20260'],
        ];
        $arr[] = [
            'tel' => '038 272 303', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/E5TUvmmNRmAVTXm57',
            'th' => ['title' => 'สหคลินิกสมิติเวช', 'address' => '7/14-16  หมู่ที่ 1 ถ.สุขุมวิท เมืองชลบุรี ชลบุรี 20130'],
            'en' => ['title' => 'AMATA BORWIN INFIRMARY', 'address' => '7/11 Moo 3 - - Chonburi 20130'],
        ];
        $arr[] = [
            'tel' => '082 993 2302', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/ErVwXKxfBwsTcc4e6',
            'th' => ['title' => 'สหคลินิกสมิติเวช เจ พาร์ค', 'address' => '445/1 หมู่ 5 - ศรีราชา ชลบุรี 20110'],
            'en' => ['title' => 'CHULARATCHOLVAEJ HOSPITAL', 'address' => '104/15  Soi Na Wat Tonson Akkhiwat Road Mueang Chon Buri Chonburi 20110'],
        ];
        $arr[] = [
            'tel' => '038 345 847', 'cat_id' => '90',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/cipacAxUFwTxD4kt6',
            'th' => ['title' => 'อมตะเวชกรรมโรงพยาบาลทั่วไปขนาดเล็ก', 'address' => '7/11 หมู่ 3 - - ชลบุรี 20230'],
            'en' => ['title' => 'MITRMITRI CLINIC SAHAPAT', 'address' => '104/128-129  Moo 2   Si Racha Chonburi 20230'],
        ];
        $arr[] = [
            'tel' => '038 284 355', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/A4Cxw3R9sGFht1WE6',
            'th' => ['title' => 'โรงพยาบาลจุฬารัตน์ชลเวช(รพ.ขนาดเล็ก)', 'address' => '104/15  ซ.หน้าวัดต้นสน ถ.อัคนิวาต เมืองชลบุรี ชลบุรี 20000'],
            'en' => ['title' => 'MITRMITRI CLINIC THEPPRASIT', 'address' => '315/62-64 Moo 12   Bang Lamung Chonburi 20000'],
        ];
        $arr[] = [
            'tel' => '038 111 605', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/rXgfuL6jHpc5SU9N9',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมเครือสหพัฒน์', 'address' => '104/128-129  หมู่ 2   ศรีราชา ชลบุรี 20210'],
            'en' => ['title' => 'MITRMITRI CLINIC PORNPRAPA NIMIT', 'address' => '54/66-67 Moo 2    Pornprapanimit Rd Bang Lamung Chonburi 20210'],
        ];
        $arr[] = [
            'tel' => '038 190 276', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/mxJdGXiDTiMMyE4S9',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมเทพประสิทธิ์', 'address' => '315/62-64 หมู่12   บางละมุง ชลบุรี 20260'],
            'en' => ['title' => 'INTERNATIONAL CLINIC KOH CHANG', 'address' => '376  Moo 2 Sukhumvit Rd - Trang 20260'],
        ];
        $arr[] = [
            'tel' => '038 190 275', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/obeUxzryu9nBF2wK8',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมพรประภานิมิต', 'address' => '54/66-67 หมู่ 2   หนองปรือ บางละมุง ชลบุรี 20260'],
            'en' => ['title' => 'SOTARAVEJ KABINBURI HOSPITAL', 'address' => '379/267 Moo 10 - - Prachin Buri 20260'],
        ];
        $arr[] = [
            'tel' => '038 259 979', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/apV5a6VkziKdUPkm8',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพพัทยาสาขาเกาะล้าน', 'address' => '203/49  หมู่ 7 ถ.สุขุมวิท กม.143   บางละมุง ชลบุรี 20150'],
            'en' => ['title' => 'SOTORNVEJ 304 HOSPITAL', 'address' => '  - Prachin Buri 20150'],
        ];
        $arr[] = [
            'tel' => '038 259 935', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/rxyuaDda765x9jae8',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพพัทยาสาขาบางเสร่', 'address' => '88/259 หมู่ 9 ต.บางเสร่  สัตหีบ ชลบุรี 20250'],
            'en' => ['title' => 'IMPERIAL HOSPITAL', 'address' => ' 277 Rat Damri Rd Prachin Buri 20250'],
        ];
        $arr[] = [
            'tel' => '039 551 554', 'cat_id' => '92',
            'website' => '',
            'province' => '15', 'location' => 'https://goo.gl/maps/LNDMBcb3JxNM1jDM6',
            'th' => ['title' => 'คลินิกอินเตอร์เนชั่นแนล เกาะช้าง', 'address' => '376  หมู่ที่ 2 ถ.สุขุมวิท - ตราด 23000'],
            'en' => ['title' => 'KOH MAR INTERNATIONAL CLINIC', 'address' => '117 Moo 1  Koh Mak  Koh Kood  Trat 23000'],
        ];
        $arr[] = [
            'tel' => '092 272 8000', 'cat_id' => '92',
            'website' => '',
            'province' => '15', 'location' => 'https://goo.gl/maps/RDERhE25wkBQKNL37',
            'th' => ['title' => 'คลีนิกเวชกรรมเกาะหมากอินเตอร์เนชั่นแนล', 'address' => '117 หมู่ที่ 1  ตำบล เกาะหมาก เกาะกูด  ตราด 23000'],
            'en' => ['title' => 'BANGKOK RAYONG CLINIC  BANCHANG', 'address' => '99-99/1 Sukhumvit Rd Ban Chang  Rayong 23000'],
        ];
        $arr[] = [
            'tel' => '091 743 1540', 'cat_id' => '92',
            'website' => '',
            'province' => '29', 'location' => 'https://goo.gl/maps/qe4Lyb9VrFGjJYiW7',
            'th' => ['title' => 'สถานพยาบาลโสธราเวชกบินทร์บุรี', 'address' => '379/267 หมู่ 10 - - ปราจีนบุรี 25110'],
            'en' => ['title' => 'BANGKOK RAYONG HOSPITAL CLINIC PLUAKDAENG BRANCH', 'address' => '625/70 Moo 1 - Pluak Daeng Rayong 25110'],
        ];
        $arr[] = [
            'tel' => '037 239 665', 'cat_id' => '92',
            'website' => '',
            'province' => '29', 'location' => 'https://goo.gl/maps/vQfmDLYhEzbwmWQF9',
            'th' => ['title' => 'เมดิแคร์ 304 โรงพยาบาลทั่วไปขนาดเล็ก', 'address' => 'ซอย นิคมอุตสาหกรรม 304 ท่าตูม ศรีมหาโพธิ ปราจีนบุรี 25140'],
            'en' => ['title' => 'CLINIC SAMITIVEJ SRIRACHA HOSPITAL', 'address' => '24/1 Moo 4 -  Rayong 25140'],
        ];
        $arr[] = [
            'tel' => '037 211 587', 'cat_id' => '92',
            'website' => '',
            'province' => '29', 'location' => 'https://goo.gl/maps/2HgerAzpXUUiGZx98',
            'th' => ['title' => 'โรงพยาบาลอิมพีเรียล', 'address' => '277 ถนนราษฎรดำริ 277 ถ.ราษฎรดำริ ปราจีนบุรี 2500'],
            'en' => ['title' => 'MITRMITRI CLINIC MAB YANG PORN', 'address' => '111/21-23 Moo 4 - Pluak Daeng Rayong 2500'],
        ];
        $arr[] = [
            'tel' => '037 218 659', 'cat_id' => '92',
            'website' => '',
            'province' => '29', 'location' => 'https://goo.gl/maps/uRyZFFoVs8EZ5U3fA',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพระยอง สาขานิคมอุตสาหกรรม 304', 'address' => '659/3 หมู่ 10  ต.ท่าตูม  ศรีมหาโพธิ ปราจีนบุรี 25140'],
            'en' => ['title' => 'MITRMITRI CLINIC SAPAN 4', 'address' => '454/12-14 Moo 3 - Pluak Daeng Rayong 25140'],
        ];
        $arr[] = [
            'tel' => '038 604 669', 'cat_id' => '92',
            'website' => '',
            'province' => '46', 'location' => 'https://goo.gl/maps/PwZaQzpHg6NPuEH46',
            'th' => ['title' => 'คลินิกกรุงเทพระยองสาขาบ้านฉาง', 'address' => '99-99/1 ถ.แสงจันทร์เนรมิตร บ้านฉาง ระยอง 21130'],
            'en' => ['title' => 'RAYONG RAKFUN CLINIC', 'address' => '144/23-24 Sukhumvit Rd Mueang Rayong Rayong 21130'],
        ];
        $arr[] = [
            'tel' => '038 025 957', 'cat_id' => '92',
            'website' => '',
            'province' => '46', 'location' => 'https://goo.gl/maps/1CmBham9VUPu7w4U8',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพระยองสาขาปลวกแดง', 'address' => '625/70 หมู่ 1 - ปลวกแดง ระยอง 21140'],
            'en' => ['title' => 'BANGKOK MUAKLEK CLINIC', 'address' => '338/24 - Muak Lek Saraburi 21140'],
        ];
        $arr[] = [
            'tel' => '038 320 300', 'cat_id' => '92',
            'website' => '',
            'province' => '46', 'location' => 'https://goo.gl/maps/WZ57tt7bNk4SghTh9',
            'th' => ['title' => 'คลินิกโรงพยาบาลสมิติเวชศรีราชา(อีสเทิร์นซีบอร์ด)', 'address' => '24/1 หมู่ 4 -  ระยอง 21140'],
            'en' => ['title' => 'PRAPAVEJ HOSPITAL', 'address' => '4  Soi Settha Samphan 5 Settha Samphan Rd Nong Khae Saraburi 21140'],
        ];
        $arr[] = [
            'tel' => '033 016 055', 'cat_id' => '92',
            'website' => '',
            'province' => '46', 'location' => 'https://goo.gl/maps/gYLEeFMeSLPEHcPP7',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมมาบยางพร', 'address' => '111/21-23 หมู่ 4 - ปลวกแดง ระยอง 21140'],
            'en' => ['title' => 'BANGKOK SUNG NOEN CLINIC', 'address' => '808/1 - Sung Noen Nakhon Ratchasima 21140'],
        ];
        $arr[] = [
            'tel' => '033 016 477', 'cat_id' => '92',
            'website' => '',
            'province' => '46', 'location' => 'https://goo.gl/maps/LRPC26XsD37mKGxt7',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมสะพานสี่', 'address' => '454/12-14 หมู่ 3 - ปลวกแดง ระยอง 21140'],
            'en' => ['title' => 'BANGKOK KHAO YAI CLINIC', 'address' => '- Thanarat Road Pak Chong Nakhon Ratchasima 21140'],
        ];
        $arr[] = [
            'tel' => '084 693 7158', 'cat_id' => '92',
            'website' => '',
            'province' => '46', 'location' => 'https://goo.gl/maps/f4ZmkrHcRvp4EmCp7',
            'th' => ['title' => 'คลินิกระยองรักษ์ฟัน', 'address' => '144/23-24 ซ.ศูนย์การค้าสาย 2  ถ.สุขุมวิท เมืองระยอง ระยอง 2100'],
            'en' => ['title' => 'KASEMRAD SRIBURIN CLINIC  CHIANH SAN BRANCH', 'address' => '339 Moo 6 - Chiang Saen Chiang Rai 2100'],
        ];
        $arr[] = [
            'tel' => '036 345 768', 'cat_id' => '92',
            'website' => '',
            'province' => '59', 'location' => 'https://goo.gl/maps/MBAJbCX2jDgFz3uh7',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพมวกเหล็ก', 'address' => '338/24 - มวกเหล็ก สระบุรี 18180'],
            'en' => ['title' => 'KASEMRAD HOSPITAL MAESAI', 'address' => '952 Moo 1 - Mae Sai Chiang Rai 18180'],
        ];
        $arr[] = [
            'tel' => '036 371 818', 'cat_id' => '92',
            'website' => '',
            'province' => '59', 'location' => 'https://goo.gl/maps/TkPwHm93ekoRroLX7',
            'th' => ['title' => 'โรงพยาบาลปภาเวช', 'address' => '4  ซ.เศรษฐสัมพันธ์ 5 ถ.เศรษฐสัมพันธ์ หนองแค สระบุรี 18140'],
            'en' => ['title' => 'INTERNATIONAL CLINIC', 'address' => '721/1 Moo 2  Mueang Krabi Krabi 18140'],
        ];
        $arr[] = [
            'tel' => '044 419 719', 'cat_id' => '92',
            'website' => '',
            'province' => '20', 'location' => 'https://goo.gl/maps/Y8awempFpKnZPpyi9',
            'th' => ['title' => 'คลินิคเวชกรรมกรุงเทพสูงเนิน', 'address' => '808/1 - สูงเนิน นครราชสีมา 30170'],
            'en' => ['title' => 'AO NANG MEDICAL CLINIC', 'address' => '143/3-4 Moo 2 - Mueang Krabi Krabi 30170'],
        ];
        $arr[] = [
            'tel' => '044 300 422', 'cat_id' => '92',
            'website' => '',
            'province' => '20', 'location' => 'https://goo.gl/maps/AGtVGhDRWB66TjtJ7',
            'th' => ['title' => 'คลีนิกเวชกรรมกรุงเทพเขาใหญ่', 'address' => '- ถ.ธนะรัชต์ ปากช่อง นครราชสีมา 30130'],
            'en' => ['title' => 'NARA KARNPHET', 'address' => '93,93/1-2 Bang Nak Mueang Narathiwat Narathiwat 30130'],
        ];
        $arr[] = [
            'tel' => '053 650 131', 'cat_id' => '92',
            'website' => '',
            'province' => '12', 'location' => 'https://goo.gl/maps/zFP8j3LCpHYr2j9N9',
            'th' => ['title' => 'คลินิกเกษมราษฎร์ศรีบุรินทร์ สาขาเชียงแสน', 'address' => '339 หมู่ 6 - เชียงแสน เชียงราย 57150'],
            'en' => ['title' => 'SIRARAK CLINIC', 'address' => '118/43-44 Na Kluea Road - Pattani 57150'],
        ];
        $arr[] = [
            'tel' => '053 731 391', 'cat_id' => '92',
            'website' => '',
            'province' => '12', 'location' => 'https://goo.gl/maps/D3TsXjrVdxXvMxXS8',
            'th' => ['title' => 'โรงพยาบาลเกษมราษฎร์ แม่สาย (สถานพยาบาล)', 'address' => '952 หมู่ 1 - แม่สาย เชียงราย 57130'],
            'en' => ['title' => 'BANGKOK PHUKET CLINIC MAIKAO BRANCH', 'address' => '61/14   Thep Krasattri Road Thalang Phuket 57130'],
        ];
        $arr[] = [
            'tel' => '075 205 555', 'cat_id' => '92',
            'website' => '',
            'province' => '01', 'location' => 'https://goo.gl/maps/MhdY21aJ6eN6jMyB7',
            'th' => ['title' => 'คลินิกเวชกรรมอินเตอร์เนชั่นแนล(เครือรพ.วัฒนแพทย์ตรัง)', 'address' => '721/1 หมู่ 2 - เมืองกระบี่ กระบี่ 81110'],
            'en' => ['title' => 'BANGKOK PHUKET CLINIC PHANGNGA', 'address' => '11/7 Takua Pa Phang-nga Phangnga 81110'],
        ];
        $arr[] = [
            'tel' => '075 637 177', 'cat_id' => '92',
            'website' => '',
            'province' => '01', 'location' => 'https://goo.gl/maps/wsLviVWaiBELkbvi8',
            'th' => ['title' => 'คลินิกเวชกรรมอ่าวนางเมดิคอล', 'address' => '143/3-4 หมู่ 2 - เมืองกระบี่ กระบี่ 81000'],
            'en' => ['title' => 'BANGKOK HOSPITAL SAMUI CLINIC', 'address' => '57 Moo 3 Taweeratphakdee Rd Ko Samui Surat Thani 81000'],
        ];
        $arr[] = [
            'tel' => '073 512 282', 'cat_id' => '92',
            'website' => '',
            'province' => '24', 'location' => 'https://goo.gl/maps/rnxNUFbHn2azrdA87',
            'th' => ['title' => 'สถานพยาบาลนราการแพทย์', 'address' => '93,93/1-2 ถ.พิชิตบำรุง - นราธิวาส 96000'],
            'en' => ['title' => 'THAI INTER CLINIC', 'address' => '211/8-9 - - Surat Thani 96000'],
        ];
        $arr[] = [
            'tel' => '073 414 880', 'cat_id' => '92',
            'website' => '',
            'province' => '30', 'location' => 'https://goo.gl/maps/DbimYpQXZabhGrHQA',
            'th' => ['title' => 'ศิรารักษ์คลินิกแพทย์', 'address' => '118/43-44 ถ.นาเกลือ - ปัตตานี 94000'],
            'en' => ['title' => 'VIENGVEJ HOSPITAL', 'address' => '475/5 Moo 4 - - Surat Thani 94000'],
        ];
        $arr[] = [
            'tel' => '096 643 4426', 'cat_id' => '92',
            'website' => '',
            'province' => '39', 'location' => 'https://goo.gl/maps/FdotfYvsU43Qj1SG8',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพภูเก็ต สาขาไม้ขาว', 'address' => '61/14  ถ.เทพกระษัตรี ถลาง ภูเก็ต 83140'],
            'en' => ['title' => 'ANDAMAN-RANONGKANPHEAT', 'address' => '130 / 274-6 Khao Niwet Mueang Ranong Ranong 83140'],
        ];
        $arr[] = [
            'tel' => '081 370 3705', 'cat_id' => '92',
            'website' => '',
            'province' => '32', 'location' => 'https://goo.gl/maps/kdmKQu9wF8a8rLv68',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพภูเก็ต สาขาพังงา', 'address' => '11/7 ถ.เทศบาลบำรุง เมืองพังงา พังงา 82000'],
            'en' => ['title' => 'RANONG INTERNATIONAL HOSPITAL', 'address' => '8/9 Khao Niwet Mueang Ranong Ranong 82000'],
        ];
        $arr[] = [
            'tel' => '077 429 500', 'cat_id' => '92',
            'website' => '',
            'province' => '63', 'location' => 'https://g.page/BSHFanClub?share',
            'th' => ['title' => 'คลินิกโรงพยาบาลกรุงเทพสมุย', 'address' => '57 หมู่ 3 ถ.ทวีราษฎร์ภักดี เกาะสมุย สุราษฎร์ธานี 84320'],
            'en' => ['title' => 'RUAMPHAET THUNG SONG HOSPITAL', 'address' => '37 - Thung Song  Nakhon Si Thammarat 84320'],
        ];
        $arr[] = [
            'tel' => '077 239 508', 'cat_id' => '92',
            'website' => '',
            'province' => '63', 'location' => 'https://goo.gl/maps/MsR1feSU7iTUdYKq9',
            'th' => ['title' => 'คลินิกไทยอินเตอร์การแพทย์ (เกาะพะงัน)', 'address' => '211/8-9 - - สุราษฎร์ธานี 84280'],
            'en' => ['title' => 'PHRAE HOSPITAL', 'address' => '144 Cheohae Rd. PHRAE Phrae 84280'],
        ];
        $arr[] = [
            'tel' => '077 361 672', 'cat_id' => '92',
            'website' => '',
            'province' => '63', 'location' => 'https://goo.gl/maps/7M1TCKXVED2AXLAf8',
            'th' => ['title' => 'สถานพยาบาลเวียงเวช', 'address' => '475/5 หมู่ 4 - - สุราษฎร์ธานี 84190'],
            'en' => ['title' => 'KOH PHANGAN HOSPITAL', 'address' => '6 Moo 4 KOH PHANGAN KOH PHANGAN Surat Thani 84190'],
        ];
        $arr[] = [
            'tel' => '077 835 960', 'cat_id' => '92',
            'website' => '',
            'province' => '45', 'location' => 'https://goo.gl/maps/QMdN1ChaevKHGapP8',
            'th' => ['title' => 'โรงพยาบาลอันดามันระนองการแพทย์', 'address' => '130 / 274-6 ถ.สะพานปลา เมืองระนอง ระนอง 85000'],
            'en' => ['title' => 'KOH LAN MIDICAL CLINIC', 'address' => '203/49  Moo 7 Sukhumvit Road, km 143 Bang Lamung Chon Buri 85000'],
        ];
        $arr[] = [
            'tel' => '077 810 466', 'cat_id' => '92',
            'website' => '',
            'province' => '45', 'location' => '',
            'th' => ['title' => 'โรงพยาบาลทั่วไปขนาดเล็กระนองอินเตอร์เนชั่นแนล', 'address' => '8/9 ถ.ชลระอุ เมืองระนอง ระนอง 85000'],
            'en' => ['title' => 'BANG SARE MEDICAL ClINIC', 'address' => '88/259 Moo 9 BANG SARE Sattahip Chon Buri 85000'],
        ];
        $arr[] = [
            'tel' => '075 411 330', 'cat_id' => '92',
            'website' => 'www.ruamphat-ts.com',
            'province' => '21', 'location' => '',
            'th' => ['title' => 'โรงพยาบาลรวมแพทย์ทุ่งสงโรงพยาบาลทั่วไปขนาดเล็ก', 'address' => '37 - ทุ่งสง นครศรีธรรมราช 80110'],
            'en' => ['title' => 'BANGKOK RAYONG HOSPITAL CLINIC INDUSTRIAL 304 PRACHIN BURI  BRANCH', 'address' => '659/3 Moo 10  Tha Tum Sri Maha Bodhi Prachin Buri 80110'],
        ];
        $arr[] = [
            'tel' => '038 026 519', 'cat_id' => '92',
            'website' => '',
            'province' => '46', 'location' => 'https://goo.gl/maps/VSGGMG9GFschUCGX7',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพระยอง สาขานิคมพัฒนา', 'address' => '222/6 หมู่ 2  ตำบลมะขามคู่  นิคมพัฒนา  ระยอง 21180'],
            'en' => ['title' => 'BANGKOK RAYONG HOSPITAL CLINIC NIKOMPATTANA BRANCH', 'address' => '222/6 Moo 2  MAKHAM KHU NIKOMPATTANA Rayong 21180'],
        ];
        $arr[] = [
            'tel' => '038 921 999', 'cat_id' => '92',
            'website' => '',
            'province' => '07', 'location' => 'https://goo.gl/maps/QBrKcHbcdaHtyogW8',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพระยอง สาขานิคมอุตสาหกรรมเกตเวย์ซีตี้', 'address' => '806 หมู่ 9  ตำบลหัวสำโรง  แปลงยาว ฉะเชิงเทรา 24190'],
            'en' => ['title' => 'BANGKOK RAYONG HOSPITAL CLINIC GATWAY CITY City IINDUSTRIAlL BRANCH', 'address' => '806 Moo 9  HUA SOMRONG   PRANGYAO Chachoengsao 24190'],
        ];
        $arr[] = [
            'tel' => '038 016 300', 'cat_id' => '92',
            'website' => '',
            'province' => '46', 'location' => 'https://goo.gl/maps/4Mdi1sJx3zUvZf9Y8',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพระยอง สาขาบ้านเพ', 'address' => '284/40 หมู่ 2  ตำบลบ้านเพ เมือง ระยอง 21160'],
            'en' => ['title' => 'BANGKOK RAYONG HOSPITAL CLINIC BAN PHE BRANCH', 'address' => '284/40 Moo 2  BAN PHE AMPHOEMUANG  Rayong 21160'],
        ];
        $arr[] = [
            'tel' => '02 059 0245', 'cat_id' => '90',
            'website' => 'www.namarak.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/f2buoLeoLtSWWMGe6',
            'th' => ['title' => 'โรงพยาบาลนมะรักษ์ ', 'address' => '2414 ถนนเพชรบุรีตัดใหม่ แขวงบางกะปิ  ห้วยขวาง กรุงเทพมหานคร 10310'],
            'en' => ['title' => 'NAMARAK HOSPITAL', 'address' => '2414 NEW PHETCHABURI ROAD Bangkapi Bangkok 10310'],
        ];
        $arr[] = [
            'tel' => '043 840 444', 'cat_id' => '90',
            'website' => 'www.kalasin.go.th',
            'province' => '03', 'location' => 'https://goo.gl/maps/E4wzdXNY9kRqVoR59',
            'th' => ['title' => 'โรงพยาบาลกาฬสินธุ์ ธนบุรี', 'address' => '89 ถนนเลี่ยงเมืองสงเปลือย  ตำบลกาฬสินธุ์  อำเภอเมือง  กาฬสินธุ์ 46000'],
            'en' => ['title' => 'KALASIN-THONBURI HOSPITAL', 'address' => '89 BYPASS ROAD TUMBONKALASIN AMPHOEMUANGKALASIN Kalasin 46000'],
        ];
        $arr[] = [
            'tel' => '02 147 2525', 'cat_id' => '90',
            'website' => '',
            'province' => '27', 'location' => 'https://g.page/KTP_HOSPITAL?share',
            'th' => ['title' => 'โรงพยาบาลกรุงไทย ปทุม', 'address' => '333 หมู่ 3  ตำบลบางแขยง  อำเภอเมืองปทุมธานี  ปทุมธานี 12000'],
            'en' => ['title' => 'RUNGTHAI PATHUM HOSPITAL', 'address' => '333 Moo.3  Bang Kha Yang Amphoemuangpathumthani Pathumthani 12000'],
        ];
        $arr[] = [
            'tel' => '02 006 9999', 'cat_id' => '90',
            'website' => 'www.synphaet.co.th',
            'province' => '27', 'location' => 'https://goo.gl/maps/HyoDkZYvsQ2AXzos7',
            'th' => ['title' => 'โรงพยาบาลสินแพทย์ ลำลูกกา', 'address' => '37/29 หมู่ 3 ตำบลคูคต  อำเภอลำลูกกา  ปทุมธานี 12130'],
            'en' => ['title' => 'SYNPHAET LAM LUK KA HOSPITAL', 'address' => '37/29 Moo3 Khu Khot Amphoelamlukka Pathumthani 12130'],
        ];
        $arr[] = [
            'tel' => '02 118 0635', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/yWHc5af2ptqiiFS78',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมงามวงศ์วาน', 'address' => '356/1 ถนนงามวงศ์วาน เขตบางเขน  อำเภอเมืองนนทบุรี  นนทบุรี 11000'],
            'en' => ['title' => 'MITRMITRI CLINI NGAM WONG WAN', 'address' => '356/1 Ngamwongwan RoadBang Khen  Mueang Nonthaburi Nonthaburi 11000'],
        ];
        $arr[] = [
            'tel' => '02 118 0630', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/KPVB6rAXz1GmmZHg9',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมบางศรีเมือง', 'address' => '84/229 หมู่ 1 ตำบลบางกร่าง อำเภอเมืองนนทบุรี นนทบุรี 11000'],
            'en' => ['title' => 'MITRMITRI CLINIC BANG SRI MUEANG', 'address' => '84/229 Moo 1 Bang Krang Mueang Nonthaburi Nonthaburi 11000'],
        ];
        $arr[] = [
            'tel' => '02 010 8251', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/XgQEJ34t91sNNVU26',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมเมืองทองธานี', 'address' => '47/291 หมู่ 3 ถนนป๊อปปูล่า 3 ตำบลบ้านใหม่  อำเภอปากเกร็ด  นนทบุรี 11120'],
            'en' => ['title' => 'MITRMITRI CLINIC Muangthong Thani', 'address' => '47/291 Moo 3 Popular 3 Road, Ban Mai Subdistrict Pak Kret District Nonthaburi 11120'],
        ];
        $arr[] = [
            'tel' => '02 010 1124', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/h7LjfUkbaj4GZ7CXA',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมเสาธงหิน', 'address' => '55/20 หมู่ 7 ตำบลเสาธงหิน  อำเภอบางใหญ่  นนทบุรี 11140'],
            'en' => ['title' => 'MITRMITRI CLINIC SAO THON HIN', 'address' => '55/20 Moo 7 Sao Thong Hin District Bang Yai District Nonthaburi 11140'],
        ];
        $arr[] = [
            'tel' => '02 595 0882', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/Ybxdrpw37BBwbeZ78',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมตลาดบางใหญ่', 'address' => '61/25-26 หมู่3 ซอยบางใหญ่ซิตี้  ถนนกาญจนาภิเษก อำเภอเสาธงหิน นนทบุรี 11140'],
            'en' => ['title' => 'MITRMITRI CLIC Bang Yai Market', 'address' => '61/25-26 Moo 3 Soi Bang Yai City Kanchanaphisek Road Sao Thong Hin Distric Nonthaburi 11140'],
        ];
        $arr[] = [
            'tel' => '02 118 6029', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/Ab9e17Pa2eYZNEWq8',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรปลายบาง', 'address' => '118/17-18 หมู่ 2 ถนนมหาสวัสดิ์  อำเภอบางกรวย นนทบุรี 11130'],
            'en' => ['title' => 'MITRMITRI CLNIC Plai Bang', 'address' => '118/17-18 Moo 2 Mahasawat Road Bang Kruai District Nonthaburi 11130'],
        ];
        $arr[] = [
            'tel' => '02 010 1060', 'cat_id' => '92',
            'website' => '',
            'province' => '23', 'location' => 'https://goo.gl/maps/2eMWvCVQc8WpYjXaA',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมตลาดพระราม 5', 'address' => '11/5 หมู่ 4 บางขุนกอง อำเภอบางกรวย นนทบุรี 11130'],
            'en' => ['title' => 'MITRMITRI CLINIC  Rama 5 Market', 'address' => '11/5 Moo 4 Bang Khun Kong Bang Kruai District Nonthaburi 11130'],
        ];
        $arr[] = [
            'tel' => '02 010 2630', 'cat_id' => '92',
            'website' => '',
            'province' => '27', 'location' => 'https://goo.gl/maps/4Sy5SWVyYbdjcfiG8',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมคลอง 6', 'address' => '150/12 หมู่ 2 ถนนรังสิต  อำเภอธัญบุรี  ปทุมธานี 12110'],
            'en' => ['title' => 'MITRMITRI CLINIC KLONG 6', 'address' => '150/12 Moo 2 Rangsit Road Thanyaburi District Pathumthani 12110'],
        ];
        $arr[] = [
            'tel' => '02 010 2630', 'cat_id' => '92',
            'website' => '',
            'province' => '27', 'location' => 'https://goo.gl/maps/G14qyeNSxp5asVpA6',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรคลอง 8', 'address' => '289/11-12 หมู่ 1 ตำบลลำผักกูด อำเภอธัญบุรี  ปทุมธานี 12110'],
            'en' => ['title' => 'MITRMITRI CLINIC KLONG 8', 'address' => '289/11-12 Moo 1 Lam Phak Kut Subdistrict Thanyaburi District Pathumthani 12110'],
        ];
        $arr[] = [
            'tel' => '02 118 6083', 'cat_id' => '92',
            'website' => '',
            'province' => '56', 'location' => 'https://goo.gl/maps/EyxfJ4qmCCGZzLyBA',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมบางบ่อ', 'address' => '595/1 หมู่ 2 ถนนวัดบางบ่อ ตำบลบางบ่อ อำเภอบางบ่อ สมุทรปราการ 10560'],
            'en' => ['title' => 'MITRMITRI CLINIC Bang Bo', 'address' => '595/1 Moo 2 Bang Bo Temple Road, Bang Bo Subdistrict Bang Bo District Samut Prakan 10560'],
        ];
        $arr[] = [
            'tel' => '02 010 2219', 'cat_id' => '92',
            'website' => '',
            'province' => '56', 'location' => 'https://goo.gl/maps/RSjfcVK1w6Bj8eVD6',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมบางพลี', 'address' => '5/233 หมู่ 16 ซ.เทศบาลบางเสาธง 36 (ฝ.8) ถนนเทศบาลบางเสาธง ตำบลบางเสาธง อำเภอเมืองสมุทปราการ สมุทรปราการ 10540'],
            'en' => ['title' => 'MITRMITRI CLINIC BAN PHLI', 'address' => '5/233 Moo 16 Soi Bang Sao Thong 36 (ฝ.8) Bang Sao Thong RD. Bang Sao Thong  Mueang Samut Prakan  Samut Prakan 10540'],
        ];
        $arr[] = [
            'tel' => '02 118 0614', 'cat_id' => '92',
            'website' => '',
            'province' => '56', 'location' => 'https://goo.gl/maps/SB4NdQXVaSzDfCxm9',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมสุขสวัสดิ์', 'address' => '168/6-7 หมู่ 2 ซ.วัดใหญ่  ถนนสุขสวัสดิ์ ตำบลปากคลองบางปลากด อำเภอพระสมุทรเจดีย์ สมุทรปราการ 10290'],
            'en' => ['title' => 'MITRMITRI CLINIC Suksawat', 'address' => '168/6-7 Moo 2 Soi Wat Yai Suksawat Road Pak Khlong Bang Pla Kot Subdistrict Phra Samut Chedi District Samut Prakan 10290'],
        ];
        $arr[] = [
            'tel' => '033 036 055', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/LPtrhP3TARJWXYhEA',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมพัทยาใต้', 'address' => '565/27-29 หมู่ 10  ตำบลหนองปรือ  อำเภอบางละมุง  ชลบุรี 20260'],
            'en' => ['title' => 'MITRMITRI CLINIC South Pattaya', 'address' => '565/27-29 Moo 10  Nong Prue Subdistric Banglamung Chonburi 20260'],
        ];
        $arr[] = [
            'tel' => '033 070 211', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/FtajZbfTfXv3yFH57',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมบ่อวิน', 'address' => '123/19 หมู่ 3 ตำบลบ่อวิน  อำเภอศรีราชา  ชลบุรี 20210'],
            'en' => ['title' => 'MITRMITRI CLINIC Bowin', 'address' => '123/19 Moo 3 Bowin District Sriracha Chonburi 20210'],
        ];
        $arr[] = [
            'tel' => '038 016 822', 'cat_id' => '92',
            'website' => '',
            'province' => '46', 'location' => 'https://goo.gl/maps/dQEU9yUL5QKzZvTQA',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมตลาดสตาร์', 'address' => '112, 114 ซ.ศูนย์การค้าสาย 4 ถนนสุขุมวิท ตำบลท่าประดู่  อำเภอเมืองระยอง ระยอง  21000'],
            'en' => ['title' => 'MITRMITRI CLINIC Star market', 'address' => '112, 114 Soi Sai 4 Shopping Center, Sukhumvit Road Tha Pradu Subdistrict Mueang Rayong District Rayong 21000'],
        ];
        $arr[] = [
            'tel' => '034 115 071', 'cat_id' => '92',
            'website' => '',
            'province' => '58', 'location' => 'https://goo.gl/maps/B6uxGCpDEqPCYFV68',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมวัดพันท้าย', 'address' => '189/54-55 พันท้ายนรสิงห์ ตำบลพันท้ายนรสิงห์ อำเภอเมืองสมุทรสาคร สมุทรสาคร 74000'],
            'en' => ['title' => 'MITRMITRI CLINIC WAT Phanthai', 'address' => '189/54-55 Pan Thai Nor Ra Sing Phanthai Norasing Subdistrict Mueang Samut Sakhon District Samut Sakhon 74000'],
        ];
        $arr[] = [
            'tel' => '034 115 395', 'cat_id' => '92',
            'website' => '',
            'province' => '58', 'location' => 'https://goo.gl/maps/z59CKN6NrXA7ydBK8',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมเศรษฐกิจ1', 'address' => '48/3 หมู่ 8 ตำบลท่าทราย  อำเภอเมืองสมุทรสาคร สมุทรสาคร 74000'],
            'en' => ['title' => 'MITRMITRI CLINIC Setthakit 1', 'address' => '48/3 Moo 8 Tambon Tha Sai Mueang Samut Sakhon District Samut Sakhon 74000'],
        ];
        $arr[] = [
            'tel' => '034 115 377', 'cat_id' => '92',
            'website' => '',
            'province' => '58', 'location' => 'https://goo.gl/maps/a2vQwdQL1ofa6ZFh6',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมโพธิ์แจ้', 'address' => '19/18-19 หมู่ 4 ตำบลคอกกระบือ  อำเภอเมืองสมุทรสาคร สมุทรสาคร 74000'],
            'en' => ['title' => 'MITRMITRI CLINIC Pho Chae', 'address' => '19/18-19 Moo 4 Khok Krabue Mueang Samut Sakhon District Samut Sakhon 74000'],
        ];
        $arr[] = [
            'tel' => '045 319 200', 'cat_id' => '90',
            'website' => '',
            'province' => '70', 'location' => 'https://goo.gl/maps/eJWuAtku7Zkuxvam8',
            'th' => ['title' => 'โรงพยาบาลสรรพสิทธิประสงค์', 'address' => '122 ถนนสรรพสิทธิ์ ตำบล ในเมือง อำเภอเมืองอุบลราชธานี อุบลราชธานี 34000'],
            'en' => ['title' => 'SUNPASITPRASONG HOSPITAL', 'address' => '122 Sapphasit Road Tumbon Nai Mueang Ubon Ratchathani Ubon Ratchathani 34000'],
        ];
        $arr[] = [
            'tel' => '02 220 7999', 'cat_id' => '90',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/GrYnwmCPXM5bGzVy7',
            'th' => ['title' => 'โรงพยาบาลธนบุรี บำรุงเมือง ', 'address' => '611 ถนนบำรุงเมือง  แขวงคลองมหานาค  ป้อมปราบศัตรูพ่าย กรุงเทพมหานคร 10100'],
            'en' => ['title' => 'Thonburi Bamrungmuang Hospital', 'address' => '611 Bumrung Muang Road Khlong Mahanak Subdistrict Pom Prap Sattru Phai Bangkok 10100'],
        ];
        $arr[] = [
            'tel' => '02 635 7123', 'cat_id' => '90',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/c1NrvigbuzKZEYE47',
            'th' => ['title' => 'โรงพยาบาลมเหสักข์', 'address' => '46/7 ถนน มเหสักข์   แขวง สุริยวงศ์  เขตบางรัก กรุงเทพมหานคร 10500'],
            'en' => ['title' => 'MAHAESAK HOSPITAL', 'address' => '46/7 Mahesak Road Suriyawong Bang Rak District Bangkok 10500'],
        ];
        $arr[] = [
            'tel' => '053 730 191', 'cat_id' => '91',
            'website' => '',
            'province' => '12', 'location' => 'https://goo.gl/maps/bn8JNwz3eEqu2Msz6',
            'th' => ['title' => 'โรงพยาบาลมหาวิทยาลัยแม่ฟ้าหลวง', 'address' => '333 ม.1  ท่าสุด เมืองเชียงราย เชียงราย 57000'],
            'en' => ['title' => '', 'address' => '333 Moo1Tha Sud Mueang, Chiang Rai, Chiang Rai, 57000 Tha Sud  Mueang Chiang Rai Chiang Rai 57000'],
        ];
        $arr[] = [
            'tel' => '053 914 000', 'cat_id' => '90',
            'website' => '',
            'province' => '12', 'location' => 'https://goo.gl/maps/gAW7S6wbgauCHHYJ6',
            'th' => ['title' => 'ศูนย์การแพทย์มหาวิทยาลัยแม่ฟ้าหลวง', 'address' => '365 หมู่ที่ 12 นางแล อำเภอเมืองเชียงราย  เชียงราย 57100'],
            'en' => ['title' => 'Medicalcenter Mae fah Luang ', 'address' => '365 Village No. 12 Nang lae  Mueang Chiang Rai District Chiang Rai 57100'],
        ];
        $arr[] = [
            'tel' => '053 569 100', 'cat_id' => '90',
            'website' => 'http://www.lpnh.go.th',
            'province' => '50', 'location' => 'https://goo.gl/maps/3mC41e1q96e27DQ8A',
            'th' => ['title' => 'โรงพยาบาลลำพูน', 'address' => '177 ถนนจามรี  ต้นธง  อำเภอเมืองลำพูน ลำพูน 51000'],
            'en' => ['title' => 'Lamphun Hospital', 'address' => '177 Jamri Road Tonthong  Mueang Lamphun District Lamphun 51000'],
        ];
        $arr[] = [
            'tel' => '095 204 2897', 'cat_id' => '92',
            'website' => 'https://www.vmedicalcenter.com',
            'province' => '00', 'location' => 'https://goo.gl/maps/qxorQwe2Nhmd4vCZ6',
            'th' => ['title' => 'ศูนย์การแพทย์วี', 'address' => ' 942/128 อาคารชาญอิสสระทาวเวอร์ 1 ชั้น 4 (ตรงข้ามรพ.จุฬา) ถนนพระราม 4  สุริยวงศ์  บางรัก กรุงเทพมหานคร 10500'],
            'en' => ['title' => 'V Medical Center', 'address' => '942/128 Charn Issara Tower 1 Building, 4th Floor Rama 4 Suriyawong Bangrak Bangkok 10500'],
        ];
        $arr[] = [
            'tel' => '02 118 2877', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/T2jCEboau96p4swd6',
            'th' => ['title' => 'คลีนิกเวชกรรมเปาโล สาขาจามจุรี สแควร์', 'address' => 'อาคารจตุรัส จามจุรี เลขที่ 319 ชั้น 2 ห้อง 227  ปทุมวัน  ปทุมวัน กรุงเทพมหานคร 10330'],
            'en' => ['title' => 'Paolo Medical Clinic Chamchuri Square Branch', 'address' => 'Chamchuri Square Building No. 319 Floor 2, Room 227 Pathumwan Pathumwan Bangkok 10330'],
        ];
        $arr[] = [
            'tel' => '038 155 423', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/Y9ZwcixuUvQm3CJd7',
            'th' => ['title' => 'คลินิกแพทย์สาโรจน์ อมรรัตน์กระดูกข้อและสูตินรีเวช สาขาที่2 (ดอนหัวฬ่อ)', 'address' => '46/10 หมู่ 5  ดอนหัวฬ่อ  เมืองชลบุรี  ชลบุรี 20000'],
            'en' => ['title' => 'SAROJ AMONRAT CLINIC Branch 2 (Don Hua Lo) ', 'address' => '46/10 Moo 5 Don Hua Lo Chon Buri Chonburi 20000'],
        ];
        $arr[] = [
            'tel' => '038 259 980', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/qS25mv5DdUKEYXTW7',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพพัทยา สาขาเครือสหพัฒน์', 'address' => '119/16 หมู่ 11  หนองขาม  ศรีราชา ชลบุรี 20210'],
            'en' => ['title' => 'Bangkok Pattaya Medical Clinic Sahaphat Branch', 'address' => '119/16 Moo 11  Nong Kham Sriracha Chonburi 20210'],
        ];
        $arr[] = [
            'tel' => '038 259 981', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/4h9vQmty1W7auiz76',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพพัทยา สาขาบ่อวิน', 'address' => '555/16 หมู่ 3  บ่อวิน  ศรีราชา ชลบุรี 20210'],
            'en' => ['title' => 'Bangkok Pattaya Medical Clinic Bo Win Branch', 'address' => '555/16 Moo 3  Bo Win  Sriracha Chonburi 20210'],
        ];
        $arr[] = [
            'tel' => '042 311 999', 'cat_id' => '90',
            'website' => '',
            'province' => '75', 'location' => 'https://goo.gl/maps/LoQ9ZhpSYPQ2XhrP8',
            'th' => ['title' => 'โรงพยาบาลหนองบัวลำภู', 'address' => '199 หมู่ 13 ถนนวศวงศ์  หนองบัว  หนองบัว หนองบัวลำภู 3900'],
            'en' => ['title' => 'Nongbualamphu Hospital', 'address' => '199 Moo 13 Wasawong Road Nong Bua Nong Bua Nong Bua Lam Phu 3900'],
        ];
        $arr[] = [
            'tel' => '038 029 430', 'cat_id' => '92',
            'website' => '',
            'province' => '46', 'location' => 'https://goo.gl/maps/GpatasANnqti8qEx5',
            'th' => ['title' => 'สหคลินิกกรุงเทพระยอง สาขาปั๊ม ปตท.มาบข่า', 'address' => '54/21 ถนนทางหลวงแผ่นดิน สาย 36 มาบข่า นิคมพัฒนา  ระยอง 21120'],
            'en' => ['title' => 'Bangkok Clinic Rayong PTT Map Kha Station', 'address' => '54/21 Highway 36 Road Map Kha Nikom Phatthana Rayong 21120'],
        ];
        $arr[] = [
            'tel' => '038 015 970', 'cat_id' => '92',
            'website' => '',
            'province' => '46', 'location' => 'https://goo.gl/maps/HX3bfneikpY8NNi69',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพระยอง สาขานิคมอุตสาหกรรมอีสเทิร์นซีบอร์ด', 'address' => '333-176 หมู่ 4  ปลวกแดง  ปลวกแดง ระยอง 21140'],
            'en' => ['title' => 'BangkokRayong Medical Clinic Eastern Seaboard Industrial Estate Branch', 'address' => '333-176 Moo 4 Pluak Daeng District Pluak Daeng  Rayong 21140'],
        ];
        $arr[] = [
            'tel' => '038 015 864', 'cat_id' => '92',
            'website' => '',
            'province' => '46', 'location' => 'https://goo.gl/maps/9bQDxtcuG8HabXf88',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพระยอง  สาขาแหลมแม่พิมพ์', 'address' => '173/4 ชั้น 1 หมู่ 4 กร่ำ  แกลง  ระยอง 21190'],
            'en' => ['title' => 'Bangkok Rayong Medical Clinic Laem Mae Phim Branch', 'address' => '173/4 Floor 1 Moo 4 Kam Klang  Rayong 21190'],
        ];
        $arr[] = [
            'tel' => '038 015 950', 'cat_id' => '92',
            'website' => '',
            'province' => '46', 'location' => 'https://goo.gl/maps/A57edW3nkVECRevs5',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพระยอง สาขาสะพานสี่ ปลวกแดงระยอง', 'address' => '111/49-50 หมู่ 4 มาบยางพร  ปลวกแดง ระยอง  21140'],
            'en' => ['title' => 'Bangkok Rayong Medical Clinic Saphan Si Pluak Daeng Branch Rayong', 'address' => '111 / 49-50 Moo 4 Map Yang Porn Pluak Daeng  Rayong 21140'],
        ];
        $arr[] = [
            'tel' => '038 119 009', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/wRAAvrGqowjNRvPb8',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพระยอง สาขาหนองซาก', 'address' => '344 หนองซาก  บ้านบึง ชลบุรี 20170'],
            'en' => ['title' => 'Bangkok Rayong Medical Clinic Nong Sak Branch', 'address' => '344 Nong Chak Ban Bueng Chonburi 20170'],
        ];
        $arr[] = [
            'tel' => '02 006 8888', 'cat_id' => '90',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/7Fko4iWBHwBeA6Jz7',
            'th' => ['title' => 'โรงพยาบาลสินแพทย์ ศรีนครินทร์', 'address' => '19/9 ถนนเฉลิมพระเกียรติ ร.9 หนองบอน ประเวศ กรุงเทพมหานคร 10250'],
            'en' => ['title' => 'Sinphat Srinakarin  Hospital', 'address' => '19/9 Chaloem Phrakiat Rama 9 Road Nong Bon Prawet Bangkok 10250'],
        ];
        $arr[] = [
            'tel' => '038 825 9981', 'cat_id' => '92',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/4h9vQmty1W7auiz76',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพพัทยา สาขาบ่อวิน', 'address' => '555/16 หมู่ 3  บ่อวิน  ศรีราชา ชลบุรี 20210'],
            'en' => ['title' => 'Mitmaitri Medical Clinic Phra Pradaeng branch', 'address' => '108,110, Ban Sae Talad Phra Pradaeng Samut Prakan 20210'],
        ];
        $arr[] = [
            'tel' => '02 968 7278', 'cat_id' => '92',
            'website' => '',
            'province' => '56', 'location' => 'https://goo.gl/maps/DxCa55uxonuvud4P9',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรมพระประแดง', 'address' => '108,110, บ้านแซ่ ตลาด พระประแดง สมุทรปราการ 10130'],
            'en' => ['title' => 'Bangkok Phuket Medical Clinic Khao Lak Branch BDMS', 'address' => '13/36  Khukhuk  Takua Pa Phangnga 10130'],
        ];
        $arr[] = [
            'tel' => '07-625-4425', 'cat_id' => '92',
            'website' => '',
            'province' => '32', 'location' => 'https://goo.gl/maps/kdmKQu9wF8a8rLv68',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพภูเก็ต สาขาเขาหลัก BDMS', 'address' => '13/36  คึกคัก  ตะกั่วป่า  พังงา 82190'],
            'en' => ['title' => 'Nakhon Pathom Hospital', 'address' => '196 Thesa Road Phra Pathom Chedi Subdistrict Mueang Nakhon Pathom District Nakhon Pathom 82190'],
        ];
        $arr[] = [
            'tel' => '034 254 154', 'cat_id' => '90',
            'website' => '',
            'province' => '18', 'location' => 'https://goo.gl/maps/9fn7eua3yjbxMQER8',
            'th' => ['title' => 'โรงพยาบาลนครปฐม', 'address' => '196 ถนนเทศา ตำบลพระปฐมเจดีย์ อำเภอเมืองนครปฐม นครปฐม 73000'],
            'en' => ['title' => 'Trang  HOSPITAL', 'address' => '69 Khuan Han Road Thap Thiang Subdistrict Mueang Trang District Trang 73000'],
        ];
        $arr[] = [
            'tel' => '075 201 500', 'cat_id' => '90',
            'website' => '',
            'province' => '14', 'location' => 'https://goo.gl/maps/GfbMT3Vng4DxaUf87',
            'th' => ['title' => 'โรงพยาบาลตรัง', 'address' => '69 ถนนควนหาญ  ตำบล ทับเที่ยง อำเภอเมืองตรัง ตรัง 92000'],
            'en' => ['title' => 'Phayao Hospital', 'address' => '269 ​​Phahonyothin Road Ban Tom Subdistrict Mueang District Phayao 92000'],
        ];
        $arr[] = [
            'tel' => '054 409 300', 'cat_id' => '90',
            'website' => '',
            'province' => '71', 'location' => 'https://goo.gl/maps/bHRZo7ye9u7VHjkG6',
            'th' => ['title' => 'โรงพยาบาลพะเยา', 'address' => '269 ถนนพหลโยธิน ตำบล บ้านต๋อม อำเภอเมืองพะเยา พะเยา 56000'],
            'en' => ['title' => 'Phangan International Hospital', 'address' => '103 / 5,115 / 12-13 Moo 1 Bang Tai Subdistrict Koh Phangan Surat Thani 56000'],
        ];
        $arr[] = [
            'tel' => '077 239 599', 'cat_id' => '90',
            'website' => '',
            'province' => '63', 'location' => 'https://goo.gl/maps/nvC7VaV2zjZkYqoE9',
            'th' => ['title' => 'โรงพยาบาลพะงันอินเตอร์เนชั่นแนล', 'address' => '103/5,115/12-13 หมู่ 1 ตำบลบางใต้ อำเภอเกาะพะงัน สุราษฎร์ธานี 84280'],
            'en' => ['title' => 'Kum pha wa pi Hospital', 'address' => '97 Moo 7, Chitprasong Road Kumphawapi Subdistrict Kumphawapi District Udon Thani 84280'],
        ];
        $arr[] = [
            'tel' => '042 334 400', 'cat_id' => '90',
            'website' => '',
            'province' => '67', 'location' => 'https://goo.gl/maps/CmrVQJcVvAtxoYzt8',
            'th' => ['title' => 'โรงพยาบาลกุมภวาปี', 'address' => '97 หมู่ที่ 7 ถนน จิตประสงค์  ตำบลกุมภวาปี  อำเภอกุมภวาปี  อุดรธานี 41110'],
            'en' => ['title' => 'Kluaynamthai Medical Clinic, Suan Phloen Branch', 'address' => '3654, Suanplern Market Project, Floor 2, Room L205, Rama 4 Road Khlong Tan Subdistrict Khlong Toei District Bangkok 41110'],
        ];
        $arr[] = [
            'tel' => '02 042 6337', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/gPew4u65dUf6CrP48',
            'th' => ['title' => 'คลินิกเวชกรรมกล้วยน้ำไท สาขา สวนเพลิน', 'address' => '3654 , โครงการสวนเพลินมาร์เก็ต ชั้น 2 ห้องเลขที่ L205 ถนนพระราม 4 แขวงคลองตัน  เขตคลองเตย กรุงเทพมหานคร 10110'],
            'en' => ['title' => 'Samitivej Don Mueang Medical Clinic', 'address' => '222 Passenger Terminal 1, Don Mueang Airport, 3rd Floor Don Mueang Airport Don Mueang  Bangkok 10110'],
        ];
        $arr[] = [
            'tel' => '', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/voxtL1VeuZ6PgxVx9',
            'th' => ['title' => 'สมิติเวชดอนเมือง คลินิกเวชกรรม', 'address' => '222 อาคารผู้โดยสาร 1 สนามบินดอนเมือง ชั้น 3 สนามบิน แขวงสนามบิ  เขตดอนเมือง  กรุงเทพมหานคร 10210'],
            'en' => ['title' => 'Princ Hospital Uthai Thani', 'address' => '256 Moo 2 Sakae Rang Subdistrict Mueang Uthai Thani District Uthai Thani 10210'],
        ];
        $arr[] = [
            'tel' => '05-604-9899', 'cat_id' => '90',
            'website' => '',
            'province' => '69', 'location' => 'https://goo.gl/maps/YSHfziDcyuHqpAcS7',
            'th' => ['title' => 'โรงพยาบาลพริ้นซ์ อุทัยธานี', 'address' => ' เลขที่ 256 หมู่2 ตำบลสะแกกรัง อำเภอเมืองอุทัยธานี  อุทัยธานี 61000'],
            'en' => ['title' => 'BANGPHAI HOSPITAL', 'address' => '62 Phet Kasem Road Pak Khlong Phasi Charoen Sub-district Phasi Charoen District Bangkok 61000'],
        ];
        $arr[] = [
            'tel' => '02 457 0086', 'cat_id' => '90',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/rLt6kYxo7JwforsN7',
            'th' => ['title' => 'โรงพยาบาลบางไผ่', 'address' => '62 ถ.เพชรเกษม   แขวง ปากคลองภาษีเจริญ เขตภาษีเจริญ กรุงเทพมหานคร 10160'],
            'en' => ['title' => 'Maharaj Nakorn Chiang Mai Hospital', 'address' => '110 Inthawarorot Road, Soi 2 Doi Suthep Subdistrict Mueang Chiang Mai District Chiang Mai 10160'],
        ];
        $arr[] = [
            'tel' => '053 936 193', 'cat_id' => '90',
            'website' => '',
            'province' => '13', 'location' => 'https://goo.gl/maps/HLg3SRw7hDa43pY58',
            'th' => ['title' => 'โรงพยาบาลมหาราชนครเชียงใหม่', 'address' => '110 ถนนอินทวโรรส ซอย 2  ตำบลดอยสุเทพ อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200'],
            'en' => ['title' => 'Bangkok Chok Chai Medical Clinic', 'address' => 'No.808/1  Sung Noen District Sung Noen District Nakhon Ratchasima 50200'],
        ];
        $arr[] = [
            'tel' => '044 419 719', 'cat_id' => '92',
            'website' => '',
            'province' => '20', 'location' => 'https://goo.gl/maps/NHLX6zaPS46grrQn6',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพโชคชัย', 'address' => 'เลขที่ 808/1 สูงเนิน สูงเนิน, นครราชสีมา, 30170 ตำบลสูงเนิน อำเภอสูงเนิน  นครราชสีมา 30170'],
            'en' => ['title' => 'Kasemrad Hospital International Aranyaprathet', 'address' => '885 Village No. 5 Aranyaprathet Aranyaprathet Sa Kaeo 30170'],
        ];
        $arr[] = [
            'tel' => '037 640 000', 'cat_id' => '90',
            'website' => '',
            'province' => '73', 'location' => 'https://goo.gl/maps/bvnrBdjPLGBtxn1a9',
            'th' => ['title' => 'เกษมราษฏร์ อินเตอร์เนชั่นแนล อรัญประเทศ', 'address' => ' 885 ม.5  ตำบลอรัญประเทศ อำเภออรัญประเทศ สระแก้ว 27120'],
            'en' => ['title' => 'Bangkok Phuket Medical Clinic', 'address' => 'No.390-6,390/7 Si Sunthon Road Thep Krasattri Subdistrict Thalang District Phuket 27120'],
        ];
        $arr[] = [
            'tel' => '076 25 4425', 'cat_id' => '92',
            'website' => '',
            'province' => '39', 'location' => 'https://goo.gl/maps/ymfouNgjDnUhf2xr6',
            'th' => ['title' => 'คลินิกเวชกรรมกรุงเทพภูเก็ต', 'address' => ' เลขที่ 390-6,390/7 ถนนศรีสุนทร ตำบลเทพกระษัตรี อำเภอถลาง ภูเก็ต 83110'],
            'en' => ['title' => 'Jomtien Hospital', 'address' => '234/1 Village No. 11 Banglamung Subdistrict Bang Lamung District Chonburi 83110'],
        ];
        $arr[] = [
            'tel' => '038 259 977', 'cat_id' => '90',
            'website' => '',
            'province' => '08', 'location' => 'https://goo.gl/maps/EoeS9eZmcV6MngPHA',
            'th' => ['title' => 'โรงพยาบาลจอมเทียน', 'address' => '234/1 หมู่ที่ 11 ตำบลบางละมุง อำเภอบางละมุง ชลบุรี 20150'],
            'en' => ['title' => 'Photharam Hospital', 'address' => '29 Thanon tangrodfi  Photharam District Photharam District Ratchburi 20150'],
        ];
        $arr[] = [
            'tel' => '032 719 400', 'cat_id' => '90',
            'website' => '',
            'province' => '47', 'location' => 'https://goo.gl/maps/1g1DR7WH3ULr5LPF9',
            'th' => ['title' => 'โรงพยาบาลโพธาราม', 'address' => '29 ถนน ขนานทางรถไฟ  ตำบล โพธาราม  อำเภอโพธาราม ราชบุรี ราชบุรี 70120'],
            'en' => ['title' => 'Kluaynamthai Medical Clinic, Ploenchit Branch', 'address' => 'No. 2 Ploenchit Center Building, Floor 1, Room 01-02, M 01-03 Khlong Toei Khlong Toei Bangkok 70120'],
        ];
        $arr[] = [
            'tel' => '02 769 2000', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/qJ6A2QyiXaM3xFVw5',
            'th' => ['title' => 'คลีนิกเวชกรรมกล้วยน้ำไท สาขาเพลินจิต', 'address' => 'เลขที่ 2 อาคารเพลินจิตเซ็นเตอร์ ชั้น 1 ห้อง 01-02 ม 01-03 แขวงคลองเตย  เขตคลองเตย กรุงเทพมหานคร 10110'],
            'en' => ['title' => 'THONBURITHUNGSONG Hospital ', 'address' => 'No. 88/8 Moo 1 Chamai District Thung Song District Nakhon Si Thammarat 10110'],
        ];
        $arr[] = [
            'tel' => '075 808 888', 'cat_id' => '90',
            'website' => '',
            'province' => '21', 'location' => 'https://goo.gl/maps/RyRiQ7oQiXQAaUwj6',
            'th' => ['title' => 'โรงพยาบาลธนบุรีทุ่งสง', 'address' => 'เลขที่ 88/8 หมู่ 1 ตำบลชะมาย  อำเภอทุ่งสง นครศรีธรรมราช 80110'],
            'en' => ['title' => 'Rajavithi Hospital', 'address' => 'No. 2 Phayathai Road Phaya Thai Ratchathewi Distric Bangkok 80110'],
        ];
        $arr[] = [
            'tel' => '02 354 8108', 'cat_id' => '91',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/aNz7Eha1Ju3ydtju9',
            'th' => ['title' => 'โรงพยาบาลราชวิถี', 'address' => 'เลขที่ 2 ถนนพญาไท แขวงพญาไท เขตราชเทวี กรุงเทพมหานคร 10400'],
            'en' => ['title' => 'Rajavithi Hospital', 'address' => 'No. 2 Phayathai Road Phaya Thai Ratchathewi Distric Bangkok 10400'],
        ];
        $arr[] = [
            'tel' => '034 821 202', 'cat_id' => '90',
            'website' => '',
            'province' => '58', 'location' => 'https://goo.gl/maps/QHEQ9d2m5iDLZJd66',
            'th' => ['title' => 'โรงพยาบาลเจษฎาเวชการ', 'address' => 'เลขที่ 1200/45 ถนนเอกชัย  ตำบลมหาชัย  เมืองสมุทรสาคร สมุทรสาคร 74000'],
            'en' => ['title' => 'JESSADA-VEICHAKARN HOSPITAL', 'address' => '1200/45 Ekachai Road Mahachai Samut Sakhon Samut Sakhon 74000'],
        ];
        $arr[] = [
            'tel' => '044 234 999', 'cat_id' => '90',
            'website' => '',
            'province' => '20', 'location' => 'https://goo.gl/maps/ucsoXSCU74B2LgYB8',
            'th' => ['title' => 'โรงพยาบาล ป.แพทย์ 2', 'address' => 'เลขที่ 294 ถนนมหาดไทย  ตำบลในเมือง เมืองนครราชสีมา นครราชสีมา 30000'],
            'en' => ['title' => 'Por Phaet Hospital 2', 'address' => 'No. 294 Mahadthai Road  Nakhon Ratchasima  Nakhon Ratchasima  30000'],
        ];
        $arr[] = [
            'tel' => '077 276 999', 'cat_id' => '90',
            'website' => '',
            'province' => '63', 'location' => 'https://goo.gl/maps/vGX1TESiAS4aCnHb9',
            'th' => ['title' => 'โรงพยาบาลจักษุสุราษฎร์', 'address' => 'เลขที่ 44/1 หมู่ 2 ถนนศรีวิชัย ตำบลมะขามเตี้ย   อำเภอเมืองสุราษฎร์ธานี สุราษฎร์ธานี 84000'],
            'en' => ['title' => 'Chaksu  Surat Hospital', 'address' => 'No.44/1 Moo 2 Srivichai Road Makham Tia District Mueang Suratthani District Surat Thani 84000'],
        ];
        $arr[] = [
            'tel' => '074 352 903', 'cat_id' => '90',
            'website' => '',
            'province' => '54', 'location' => 'https://goo.gl/maps/bWP8ei59BsVDpP1s6',
            'th' => ['title' => 'โรงพยาบาลมิตรภาพสามัคคี', 'address' => 'เลขที่ 161/27 ถนนแสงศรี  ตำบลหาดใหญ่  อำเภอเมืองหาดใหญ่  สงขลา 90110'],
            'en' => ['title' => 'Mitmaitree Clinic Phraya Suren Branch', 'address' => 'No. 288 / 5-6, 1st Floor, The Willow Village, Townhome Bangchan, Surao Khlong Nu Road Bang Chan Subdistrict Khlong Sam Wa District Bangkok 90110'],
        ];
        $arr[] = [
            'tel' => '061-384-0925', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/buSkyt67nq4RHxT7A',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรม สาขาตลาดคุณตาพลอย', 'address' => 'เลขที่ 254/1 ชั้น 1 ถนนเลียบคลองภาษีเจริญฝั่งเหนือหนองแขม แขวงหนองแขม เขตหนองแขม กรุงเทพมหานคร 10160'],
            'en' => ['title' => 'Mitmaitree Clinic Khun Ta Ploy Market Branch', 'address' => 'No. 254/1, 1st Floor, Liab Klong Phasi Charoen Road, North side, Nong Khaem Nongkhaem Subdistrict Nongkhaem District Bangkok 10160'],
        ];
        $arr[] = [
            'tel' => '065-940-3164', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/V6pih8aMVp3Jt3zP7',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรม สาขาศรีเพชร', 'address' => 'เลขที่ 1003/2-3 ชั้น 1 ซอยเพชรเกษม106  แขวงหนองค้างพลู  เขตหนองแขม กรุงเทพมหานคร 10160'],
            'en' => ['title' => 'Mitmaitri Clinic, Sri Petch Branch', 'address' => 'No.1003 / 2-3, 1st floor, Soi Petchkasem 106 Nong Khang Phlu Subdistrict Nongkhaem District Bangkok 10160'],
        ];
        $arr[] = [
            'tel' => '065-940-3162', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/nuTT6xPFh7PGB2Pe6',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรม สาขาหมู่บ้านเศรษฐกิจ', 'address' => 'เลขที่ 120/1 ชั้น 1 ถนนหมู่บ้านเศรษฐกิจ แขวงบางแคเหนือ  เขตบางแค กรุงเทพมหานคร 10160'],
            'en' => ['title' => 'Mitmaitree Clinic Settha[kij Village Branch', 'address' => 'No.120/1 Floor 1, Village Setthakit Road Bang Khae Nuea Bang Khae District Bangkok 10160'],
        ];
        $arr[] = [
            'tel' => '065-924-5215', 'cat_id' => '92',
            'website' => '',
            'province' => '00', 'location' => 'https://goo.gl/maps/9Y84KHEHvNE5QiJMA',
            'th' => ['title' => 'มิตรไมตรีคลินิกเวชกรรม สาขาบางไผ่', 'address' => 'เลขที่  630 ชั้น 1 ถนนพุทธมณฑลสาย 2  แขวงบางไผ่  เขตบางแค  กรุงเทพมหานคร 10160'],
            'en' => ['title' => 'Mitmaitri Clinic Bang Phai Branch', 'address' => 'No. 630, 1st Floor, Phutthamonthon Sai 2 Road Bang Phai Subdistrict Bang Khae District Bangkok 10160'],
        ];

        Partner::truncate();
        PartnerLocale::truncate();

        foreach ($arr as $v) {
            $partner = Partner::create([
                'type_id' => ProjectEnum::WEB_CONTENT_HOSPITAL,
                'cat_id' => $v['cat_id'],
                'website' => $v['website'],
                'location' => $v['location'],
                'tel' => $v['tel'],
                'province' => $v['province']
            ]);

            foreach (['en', 'th'] as $v1) {
                PartnerLocale::create([
                    'partner_id' => $partner->id,
                    'locale' => $v1,
                    'title' => $v[$v1]['title'],
                    'address' => $v[$v1]['address'],
                ]);
            }
        }

    }
}
