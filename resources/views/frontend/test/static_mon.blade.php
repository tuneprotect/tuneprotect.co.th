@extends('frontend.layout.main')

@section('page')

    <main>
        <article class="wrapper">
            @if(isset($articleImage))
                <div class="reveal">
                    <div class="main-img rotate-bg no-rotate">
                        <img src="{{url($content->pic)}}" alt="">
                    </div>
                </div>
            @endif


            <h1>My Health</h1>
            <div>
                <div class="my-health-title" style="margin-bottom: 20px">
                    <img alt="" src="/images/my_health/Logo-My-Health.png" style="width: 100px"/>
                    <span>
    ไร้กังวลทุกที่ทุกเวลา เพราะเจ็บป่วยเมื่อไหร่ ก็สามารถขอรับคำปรึกษากับแพทย์ผู้เชี่ยวชาญออนไลน์ได้ เพียงเป็นลูกค้า Tune Protect  (เงื่อนไขเป็นไปตามที่บริษัทฯ)
</span>
                </div>
                <section class="my-health-service">
                    <div class="my-health-service-inner">
                        <div class="my-health-service-box">
                            <strong>จุดเด่นของบริการ</strong>
                            <ul>
                                <li>
                                    <i class="icofont-check-circled" style="color: #009900"></i>
                                    ปรึกษาแพทย์ทางโทรศัพท์ แชท หรือ ทางวีดีโอคอล
                                </li>
                                <li>
                                    <i class="icofont-check-circled" style="color: #009900"></i>
                                    ตลอด 24 ชั่วโมง ทุกที่ทุกเวลา
                                </li>
                                <li>
                                    <i class="icofont-check-circled" style="color: #009900"></i>
                                    ตามความต้องการของคุณ หรือ ตามการนัดหมายล่วงหน้า
                                </li>
                                <li>
                                    <i class="icofont-check-circled" style="color: #009900"></i>
                                    ข้อมูลทางการแพทย์จะถูกเก็บเป็นความลับ
                                </li>
                                <li>
                                    <i class="icofont-check-circled" style="color: #009900"></i>
                                    ข้อมูลส่วนตัวของคุณจะได้รับการเก็บรักษาอย่างปลอดภัย
                                </li>
                            </ul>
                        </div>

                        <div class="my-health-service-box">
                            <strong>ทำไมคุณควรใช้</strong>
                            <ul>
                                <li>
                                    <strong>
                                        <img
                                            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDg3LjEyNSA0ODcuMTI1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODcuMTI1IDQ4Ny4xMjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDU5LjUsMTY4LjU2MmMzLjUsMy41LDkuMSwzLjUsMTIuNSwwbDEyLjUtMTIuNWMzLjUtMy41LDMuNS05LjEsMC0xMi41bC0yOC4zLTI4LjNjLTMuNS0zLjUtOS4xLTMuNS0xMi41LDBsLTEyLjUsMTIuNQ0KCQkJYy0zLjUsMy41LTMuNSw5LjEsMCwxMi41bDEuMiwxLjJsLTguOCw4LjhjLTIyLjItMTcuNi00OS4xLTI5LjMtNzguNi0zMi43di0xNmg5LjdjNC45LDAsOC44LTQsOC44LTguOHYtMjZjMC00LjktNC04LjgtOC44LTguOA0KCQkJaC01Ni4yYy00LjksMC04LjgsNC04LjgsOC44djI2YzAsNC45LDQsOC44LDguOCw4LjhoOS43djE2Yy0yOS41LDMuNS01Ni41LDE1LjItNzguNiwzMi43bC04LjgtOC44bDEuMi0xLjINCgkJCWMzLjUtMy41LDMuNS05LjEsMC0xMi41bC0xMi41LTEyLjVjLTMuNS0zLjUtOS4xLTMuNS0xMi41LDBsLTI4LjMsMjguM2MtMy41LDMuNS0zLjUsOS4xLDAsMTIuNWwxMi41LDEyLjUNCgkJCWMzLjUsMy41LDkuMSwzLjUsMTIuNSwwbDEuMi0xLjJsOC44LDguOGMtMjEsMjYuNi0zMy41LDYwLjItMzMuNSw5Ni42YzAsODYuMiw3MC4yLDE1Ni40LDE1Ni40LDE1Ni40czE1Ni40LTcwLjIsMTU2LjQtMTU2LjQNCgkJCWMwLTM2LjQtMTIuNi03MC0zMy41LTk2LjZsOC44LTguOEw0NTkuNSwxNjguNTYyeiBNMzI2LjYsMzkyLjk2MmMtNjYuMiwwLTEyMC4xLTUzLjktMTIwLjEtMTIwLjFzNTMuOS0xMjAuMSwxMjAuMS0xMjAuMQ0KCQkJczEyMC4xLDUzLjksMTIwLjEsMTIwLjFTMzkyLjgsMzkyLjk2MiwzMjYuNiwzOTIuOTYyeiIvPg0KCQk8cGF0aCBkPSJNNjMuNSwzMTQuNzYzYy04LjYsMC0xNS41LDctMTUuNSwxNS41YzAsOC42LDcsMTUuNSwxNS41LDE1LjVoODQuMWMxLjcsMCwzLjItMC4zLDQuNy0wLjhjLTQtOS43LTcuMy0xOS44LTkuNi0zMC4zSDYzLjUNCgkJCVYzMTQuNzYzeiIvPg0KCQk8cGF0aCBkPSJNMTUyLjIsMjAwLjk2MmMtMS40LTAuNC0zLTAuOC00LjYtMC44SDE1LjVjLTguNiwwLTE1LjUsNy0xNS41LDE1LjVjMCw4LjYsNywxNS41LDE1LjUsMTUuNWgxMjcuMQ0KCQkJQzE0NC45LDIyMC45NjIsMTQ4LjEsMjEwLjc2MiwxNTIuMiwyMDAuOTYyeiIvPg0KCQk8cGF0aCBkPSJNMTM4LDI3Mi44NjJjMC01LjIsMC4zLTEwLjMsMC43LTE1LjRIMzcuMWMtOC42LDAtMTUuNSw3LTE1LjUsMTUuNXM3LDE1LjUsMTUuNSwxNS41aDEwMS41DQoJCQlDMTM4LjMsMjgzLjM2MiwxMzgsMjc4LjE2MywxMzgsMjcyLjg2MnoiLz4NCgkJPHBhdGggZD0iTTQwMi4xLDIyOC4xNjNjLTIuNi00LjMtOC02LTEyLjUtMy43bC01NC4xLDI2LjVjLTYuNy0yLjctMTQuNS0yLjQtMjEuMiwxLjVjLTExLjMsNi43LTE1LjEsMjEuMy04LjQsMzIuNg0KCQkJYzYuNywxMS4zLDIxLjMsMTUuMSwzMi42LDguNGM2LjctNCwxMC43LTEwLjcsMTEuNS0xNy44bDQ5LjMtMzQuN0M0MDMuNSwyMzguMDYyLDQwNC43LDIzMi41NjIsNDAyLjEsMjI4LjE2M3ogTTMzNi42LDI3NS40NjINCgkJCWMtMS41LDUuNi03LjIsOC45LTEyLjcsNy41Yy01LjYtMS41LTguOS03LjItNy41LTEyLjdjMS41LTUuNiw3LjItOC45LDEyLjctNy41QzMzNC43LDI2NC4xNjMsMzM4LDI2OS45NjIsMzM2LjYsMjc1LjQ2MnoiLz4NCgkJPHBhdGggZD0iTTM2MC40LDIxMy4yNjJjNC43LDIuNywxMC43LDEsMTMuMy0zLjdjMi43LTQuNywxLTEwLjctMy43LTEzLjNjLTQuNy0yLjctMTAuNi0xLTEzLjMsMy43Yy0xLjgsMy4yLTEuNiw2LjksMC4xLDkuOA0KCQkJQzM1Ny43LDIxMS4wNjIsMzU4LjksMjEyLjM2MywzNjAuNCwyMTMuMjYyeiIvPg0KCQk8cGF0aCBkPSJNMzI2LDIwNC4yNjJjNS40LDAsOS43LTQuNCw5LjctOS44YzAtNS40LTQuNC05LjctOS44LTkuN3MtOS43LDQuNC05LjcsOS44YzAsMS44LDAuNSwzLjUsMS4zLDQuOQ0KCQkJQzMxOS4yLDIwMi4zNjMsMzIyLjQsMjA0LjM2MywzMjYsMjA0LjI2MnoiLz4NCgkJPHBhdGggZD0iTTMyNy4zLDM0MS42NjNMMzI3LjMsMzQxLjY2M2MtNS40LDAuMS05LjcsNC41LTkuNyw5LjljMCwxLjgsMC41LDMuNCwxLjMsNC44YzEuNywyLjksNC45LDQuOSw4LjUsNC44DQoJCQljNS40LTAuMSw5LjctNC41LDkuNi05LjlDMzM3LjEsMzQ2LjA2MiwzMzIuNywzNDEuNjYzLDMyNy4zLDM0MS42NjN6Ii8+DQoJCTxwYXRoIGQ9Ik0zNjEuNSwzMzIuMTYzYy00LjYsMi43LTYuMiw4LjctMy40LDEzLjNsMCwwYzIuNyw0LjcsOC43LDYuMiwxMy40LDMuNGM0LjYtMi43LDYuMi04LjcsMy40LTEzLjMNCgkJCUMzNzIuMSwzMzAuOTYyLDM2Ni4xLDMyOS40NjIsMzYxLjUsMzMyLjE2M3oiLz4NCgkJPHBhdGggZD0iTTM5OS43LDMwMy4xNjNjLTQuNy0yLjYtMTAuNy0xLTEzLjMsMy43Yy0xLjgsMy4yLTEuNiw2LjgsMC4xLDkuOGMwLjgsMS40LDIuMSwyLjcsMy42LDMuNWM0LjcsMi43LDEwLjcsMSwxMy4zLTMuNw0KCQkJQzQwNiwzMTEuNzYzLDQwNC40LDMwNS43NjMsMzk5LjcsMzAzLjE2M3oiLz4NCgkJPHBhdGggZD0iTTI1Ny44LDI3My43NjNjMC01LjQtNC41LTkuNy05LjgtOS43Yy01LjQsMC4xLTkuNyw0LjUtOS43LDkuOWMwLDEuOCwwLjUsMy40LDEuMyw0LjhjMS43LDIuOSw0LjksNC45LDguNSw0LjgNCgkJCUMyNTMuNiwyODMuNTYyLDI1Ny45LDI3OS4xNjMsMjU3LjgsMjczLjc2M3oiLz4NCgkJPHBhdGggZD0iTTI1NC4xLDMwNC41NjJjLTQuNiwyLjctNi4yLDguNy0zLjQsMTMuM2wwLDBjMi43LDQuNiw4LjcsNi4yLDEzLjQsMy40YzQuNi0yLjcsNi4xLTguNywzLjQtMTMuNA0KCQkJQzI2NC43LDMwMy4zNjIsMjU4LjcsMzAxLjc2MywyNTQuMSwzMDQuNTYyeiIvPg0KCQk8cGF0aCBkPSJNMzk1LjMsMjcyLjM2MmMwLDEuOCwwLjUsMy40LDEuNCw0LjljMS43LDIuOSw0LjksNC44LDguNSw0LjhjNS40LDAsOS43LTQuNSw5LjctOS44YzAtNS40LTQuNC05LjctOS44LTkuNw0KCQkJQzM5OS42LDI2Mi41NjIsMzk1LjIsMjY3LjA2MiwzOTUuMywyNzIuMzYyeiIvPg0KCQk8cGF0aCBkPSJNMjUzLjQsMjQzLjA2MmM0LjcsMi43LDEwLjcsMSwxMy4zLTMuN2wwLDBjMi42LTQuNywxLTEwLjYtMy44LTEzLjNjLTQuNy0yLjYtMTAuNi0xLTEzLjMsMy43Yy0xLjcsMy4xLTEuNiw2LjgsMC4xLDkuOA0KCQkJQzI1MC42LDI0MC45NjIsMjUxLjgsMjQyLjE2MywyNTMuNCwyNDMuMDYyeiIvPg0KCQk8cGF0aCBkPSJNMjkxLjUsMjEzLjk2MmMwLDAsMC4xLDAsMC4xLTAuMWMwLjEsMCwwLjEsMCwwLjEtMC4xYzAsMCwwLDAsMC4xLDBjNC42LTIuNyw2LjEtOC43LDMuNC0xMy4zYy0yLjctNC43LTguNy02LjItMTMuNC0zLjUNCgkJCWMwLDAtMC4xLDAtMC4xLDAuMWMtMC4xLDAtMC4xLDAuMS0wLjIsMC4xYy00LjYsMi43LTYuMiw4LjctMy40LDEzLjNsMCwwQzI4MC45LDIxNS4xNjMsMjg2LjksMjE2LjY2MywyOTEuNSwyMTMuOTYyeiIvPg0KCQk8cGF0aCBkPSJNMjkyLjgsMzMyLjg2MmMtNC43LTIuNy0xMC43LTEtMTMuMywzLjdjLTEuOCwzLjItMS42LDYuOSwwLjEsOS44YzAuOCwxLjQsMi4xLDIuNywzLjYsMy42YzQuNywyLjYsMTAuNywwLjksMTMuMy0zLjcNCgkJCUMyOTkuMiwzNDEuNDYyLDI5Ny41LDMzNS41NjIsMjkyLjgsMzMyLjg2MnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="/>
                                        ประหยัดเวลา
                                    </strong>
                                    <span>
                                    ด้วยเทคโนโลยีที่ช่วยเข้าถึงแพทย์ผู้เชี่ยวชาญเฉพาะทางได้ทุกที่ทุกเวลา

                                </span>
                                </li>
                                <li>
                                    <strong>

                                        <img
                                            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIj4KICA8Zz4KICAgIDxnPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJtMjU2LDI0Mi40Yy02My44LDAtMTE1LjctNTEuOS0xMTUuNy0xMTUuNyAwLTYzLjggNTEuOS0xMTUuNyAxMTUuNy0xMTUuNyA2My44LDAgMTE1LjcsNTEuOSAxMTUuNywxMTUuNyAwLDYzLjgtNTEuOSwxMTUuNy0xMTUuNywxMTUuN3ptMC0xOTAuNmMtNDEuMywxLjQyMTA5ZS0xNC03NC45LDMzLjYtNzQuOSw3NC45IDAsNDEuMyAzMy42LDc0LjkgNzQuOSw3NC45IDQxLjMsMCA3NC45LTMzLjYgNzQuOS03NC45IDAtNDEuMy0zMy42LTc0LjktNzQuOS03NC45eiIvPgogICAgICA8L2c+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Im00ODAuNiw1MDFoLTQ0OS4yYy0xMS4zLDAtMjAuNC05LjEtMjAuNC0yMC40IDAtNjYuNyAyNi0xMjkuMiA3My4xLTE3NiAzMC40LTMwLjIgNzMuMy00Ny41IDExNy42LTQ3LjVoMTA4LjZjNDQuNCwwIDg3LjIsMTcuMyAxMTcuNiw0Ny41IDQ3LjEsNDYuOCA3My4xLDEwOS4zIDczLjEsMTc2IDAsMTEuMy05LjEsMjAuNC0yMC40LDIwLjR6bS00MjcuOC00MC44aDQwNi40Yy00LjYtNDgtMjUuNi05Mi40LTYwLjEtMTI2LjYtMjIuOC0yMi42LTU1LjItMzUuNi04OC44LTM1LjZoLTEwOC42Yy0zMy43LDAtNjYsMTMtODguOCwzNS42LTM0LjUsMzQuMi01NS41LDc4LjYtNjAuMSwxMjYuNnoiLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="/>
                                        ลดความเสี่ยงการติดเชื้อ
                                    </strong>
                                    <span>
                                หลีกเลี่ยงการเดินทางไปโรงพยาบาล ลดโอกาสพบผู้ป่วย/ผู้ติดเชื้อ
                                </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <a href="https://telehealth.europ-assistance.com/tuneprotect/?lang=th" target="_blank" class="btn gradient">ดูข้อมูลหรือเริ่มปรึกษา</a>
                </section>
                <div class="my-health-condition">
                    <strong> เงื่อนไขการให้บริการ</strong>
                    <ul>
                        <li>
                            &bull; ผู้ใช้บริการต้องมีอายุ 20 ปีขึ้นไป
                        </li>
                        <li>
                            &bull; ค่าใช้จ่ายในการให้บริการปรึกษาแพทย์ผู้เชี่ยวชาญ Healh2GO (Tele-Consultation)
                            ขึ้นอยู่กับข้อกำหนดและเงื่อนไข บริษัท ยุโรป แอสซิสแทนซ์ จำกัด
                        </li>
                        <li>
                            &bull; ค่าบริการปรึกษาแพทย์ผู้เชี่ยวชาญ (Tele-Consultation) เริ่มต้นที่ 300 บาท ต่อ 15 นาที
                        </li>
                    </ul>

                    <strong>
                        การเตรียมตัวก่อนรับบริการ
                    </strong>
                    <ul>
                        <li>
                            &bull; เพื่อความเป็นส่วนตัวของข้อมูลทางการแพทย์
                            ผู้รับบริการควรเลือกใช้บริการในสถานที่ที่มีความเป็นส่วนตัว
                            มีสัญญาณอินเตอร์เน็ตที่เสถียรเพื่อความรวดเร็วในการเชื่อมต่อ และควรมีบัตรประชาชน หรือ
                            พาสปอร์ต เพื่อใช้ในการยืนยันตัวบุคคลก่อนเข้ารับบริการ
                        </li>
                    </ul>
                </div>
                <section class="my-health-step">
                    <strong class="text-center">ขั้นตอนการใช้งาน</strong>
                    <div class="step-wrapper">
                        <div id="step">
                            <div class="item">
                                <img alt="" src="/images/my_health/step-1.png" style="width: 50px;height: 50px"/>
                                <strong>click</strong>
                                <p style="font-size: .8rem">
                                    “บริการปรึกษาแพทย์
                                    ออนไลน์”
                                </p>
                            </div>
                            <div class="item">
                                <img alt="" src="/images/my_health/step-2.png" style="width: 50px;height: 50px"/>
                                <strong>กรอก</strong>
                                <p style="font-size: .8rem">
                                    ข้อมูลเพื่อเริ่มการปรึกษา
                                </p>
                            </div>
                            <div class="item">
                                <img alt="" src="/images/my_health/step-3.png" style="width: 50px;height: 50px"/>
                                <strong>ตอบคำถาม</strong>
                                <p style="font-size: .8rem">
                                    ประเมิณอา
                                    การ พร้อมดู
                                    ตาราง
                                    แพทย์
                                </p>
                            </div>
                            <div class="item">
                                <img alt="" src="/images/my_health/step-3.png" style="width: 50px;height: 50px"/>
                                <strong>เริ่มปรีกษา</strong>
                                <p style="font-size: .8rem">
                                    แพทย์ออนไลน์ทาง แชท วีดีโอคอล หรือ โทรศัพท์
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
            </div>


        </article>
    </main>
@endsection
