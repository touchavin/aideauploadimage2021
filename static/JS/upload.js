// var typeData = ["เสา", "33KV", "22KV"];

// var type115_topic = [
//     "เสาคอนกรีต",
//     "เสาโครงเหล็ก",
//     "คอนคอนกรีต",
//     "คอนเหล็ก",

// ]

// var type115_problem = new Map([
//     ["เสาคอนกรีต", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "อื่่นๆ"]],
//     ["เสาโครงเหล็ก", ["สภาพปกติ", "บิดงอ,เสียรูป", 'เป็นสนิม', 'อื่่นๆ']],
//     ["คอนคอนกรีต", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "bolt/nut หลวม,หลุด", "bolt/nut เปลี่ยนสี,เป็นสนิม", "bond wire หลุด,ขาด", "อื่นๆ"]],
//     ["คอนเหล็ก", ["สภาพปกติ", "บิดงอ,เสียรูป", "เป็นสนิม", "bolt/nut หลวม,หลุด", "bolt/nut เปลี่ยนสี,เป็นสนิม", "bond wire หลุด,ขาด", "อื่่นๆ"]],

// ]);

// var type33_topic = [
//     "สายดิน",
//     "ลูกถ้วย",
//     "สายไฟ",
//     "จุดต่อ",
//     "ล่อฟ้า",
//     "คาปาซิเตอร์",
// ]
// var type33_problem = new Map([
//     ["สายดิน", ["ขาด", "หย่อน", "เป็นสนิม", "จุดสนิม"]],
//     ["ลูกถ้วย", ["แตก/บิ่น", "แฟลช", 'แตกลาย', 'เปลี่ยนสี', 'คราปสกปรก']],
//     ["สายไฟ", ["สายแตก", "คลายตัว", "อุปกรณ์จับสายชำรุด"]],
//     ["จุดต่อ", ["เปลี่ยนสี/เป็นสนิม", "มีรอยอาร์ด", "บิดงอเสียรูป"]],
//     ["ล่อฟ้า", ["บิ่นแตก/แตก/ฉีก", "มีรอยอาร์ค", "ผิวสกปรก", "เปลี่ยนสี"]],
//     ["อุปกรณ์ตัดตอน", ["บิน", "แตก", "มีรอยอาร์ค"]],
// ]);

// var type22_topic = [
//     "สายดิน",
//     "ลูกถ้วย",
//     "สายไฟ",
//     "จุดต่อ",
//     "ล่อฟ้า",
//     "คาปาซิเตอร์",
// ]
// var type22_problem = new Map([
//     ["สายดิน", ["ขาด", "หย่อน", "เป็นสนิม", "จุดสนิม"]],
//     ["ลูกถ้วย", ["แตก/บิ่น", "แฟลช", 'แตกลาย', 'เปลี่ยนสี', 'คราปสกปรก']],
//     ["สายไฟ", ["สายแตก", "คลายตัว", "อุปกรณ์จับสายชำรุด"]],
//     ["จุดต่อ", ["เปลี่ยนสี/เป็นสนิม", "มีรอยอาร์ด", "บิดงอเสียรูป"]],
//     ["ล่อฟ้า", ["บิ่นแตก/แตก/ฉีก", "มีรอยอาร์ค", "ผิวสกปรก", "เปลี่ยนสี"]],
//     ["อุปกรณ์ตัดตอน", ["บิน", "แตก", "มีรอยอาร์ค"]],
// ]);
// $('document').ready(function() {
//     setting();
//     $('#chapter').multipleSelect({
//         showClear: true
//     })
// });

// function setting() {

//     addData();
//     $("#subject").on("change", function() {
//         $("#topic").html('<option value=" " selected="selected">ชนิดอุปกรณ์</option>');
//         $("li").removeClass("selected");
//         $(".ms-choice span").text("");
//         if ($("#subject").val() == "เสา") {
//             for (var i = 0; i < type115_topic.length; i++) {
//                 $("#topic").prepend(
//                     `<option value="` + type115_topic[i] + `">` + type115_topic[i] + `</option>`
//                 );
//             }
//             $("#topic").on("change", function() {
//                 var topic = $("#topic").val();
//                 type115_problem.get(topic);
//                 $("#chapter").html("");
//                 console.log(type115_problem.get(topic))
//                 for (var k = 0; k < type115_problem.get(topic).length; k++) {
//                     $("#chapter").append(
//                         ` <option value="` + type115_problem.get(topic)[k] + `" >` + type115_problem.get(topic)[k] + `</option>`
//                     ).multipleSelect('refresh');
//                 }
//             });





//         } else if ($("#subject").val() == "33KV") {
//             for (var i = 0; i < type33_topic.length; i++) {
//                 $("#topic").prepend(
//                     `<option value="` + type33_topic[i] + `">` + type33_topic[i] + `</option>`
//                 );
//             }
//             $("#topic").on("change", function() {
//                 var topic = $("#topic").val();
//                 type33_problem.get(topic);
//                 $("#chapter").html("");
//                 console.log(type33_problem.get(topic))
//                 for (var k = 0; k < type33_problem.get(topic).length; k++) {
//                     $("#chapter").append(
//                         ` <option value="` + type33_problem.get(topic)[k] + `" >` + type33_problem.get(topic)[k] + `</option>`
//                     ).multipleSelect('refresh');
//                 }
//             });

//         } else if ($("#subject").val() == "22KV") {
//             for (var i = 0; i < type22_topic.length; i++) {
//                 $("#topic").prepend(
//                     `<option value="` + type22_topic[i] + `">` + type22_topic[i] + `</option>`
//                 );
//             }
//             $("#topic").on("change", function() {
//                 var topic = $("#topic").val();
//                 type22_problem.get(topic);
//                 $("#chapter").html("");
//                 console.log(type22_problem.get(topic))
//                 for (var k = 0; k < type22_problem.get(topic).length; k++) {
//                     $("#chapter").append(
//                         ` <option value="` + type22_problem.get(topic)[k] + `" >` + type22_problem.get(topic)[k] + `</option>`
//                     ).multipleSelect('refresh');
//                 }
//             });

//         }

//     });

// }


// function addData() {
//     $("#subject").append(
//         ` <option value=" " selected="selected">ประเภทอุปกรณ์</option>`
//     );
//     $("#topic").append(
//         `<option value=" " selected="selected">ชนิดอุปกรณ์</option>`
//     );
//     $("#chapter").append(
//         `<option value=" " selected="selected">สาเหตุการชำรุด</option>`
//     );
//     for (var i = 0; i < typeData.length; i++) {
//         $("#subject").append(
//             `<option value="` + typeData[i] + `" >` + typeData[i] + `</option>`
//         )
//     }

// }








var typeData = ["115KV", "33KV", "22KV"];

var type115_equipment = [
    "เสา",
    "ระบบต่อลงดินOHGW/OPGW",
    "ลูกถ้วยระบบสายส่ง",
    "สายไฟระบบสายส่ง และอุปกรณ์จับสาย",
    "จุดต่อในระบบสายส่ง",
    "อุปกรณ์ป้องกันและตัดตอน",

]

var type115_topic = new Map([

    ["เสา", new Map([
        ["เสาคอนกรีต", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "อื่่นๆ"]],
        ["เสาโครงเหล็ก", ["สภาพปกติ", "บิดงอ,เสียรูป", "เป็นสนิม", "อื่่นๆ"]],
        ["คอนคอนกรีต", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "bolt/nut หลวม,หลุด", "bolt/nut เปลี่ยนสี,เป็นสนิม", "อื่่นๆ"]],
        ["คอนเหล็ก", ["สภาพปกติ", "บิดงอ,เสียรูป", "เป็นสนิม", "bolt/nut หลวม,หลุด", "bolt/nut เปลี่ยนสี,เป็นสนิม", "อื่่นๆ"]]
    ])],

    ["ระบบต่อลงดินOHGW/OPGW", new Map([
        ["สาย OHGW/OPGW", ["สภาพปกติ", "สายขาด", "เป็นสนิม", "อื่่นๆ"]],
        ["สาย GROUND", ["สภาพปกติ", "สายขาด", "เป็นสนิม", "อื่่นๆ"]],
        ["เหล็กรองรับสาย OHGW/OPGW", ["สภาพปกติ", "บิดงอ,เสียรูป", "เป็นสนิม", "อื่่นๆ"]],
        ["จุดต่อระบบต่อลงดิน ", ["สภาพปกติ", "จุดต่อOHGW/OPGW : หลวม,หลุด", "จุดต่อOHGW/OPGW : เปลี่ยนสี", "จุดต่อOHGW/OPGW : รอยอาร์ค", "จุดต่อOHGW/OPGW : รอยอาร์ค", "จุดต่อOHGW/OPGW : เป็นสนิม", "จุดต่อที่หัวเสา : หลวม,หลุด", "จุดต่อที่หัวเสา : เปลี่ยนสี", "จุดต่อที่หัวเสา : รอยอาร์ค", "จุดต่อที่หัวเสา : เป็นสนิม", "จุดต่อที่ GROUND PLATE : หลวม,หลุด", "อื่่นๆ"]],
    ])],
    ["ลูกถ้วยระบบสายส่ง", new Map([
        ["ลูกถ้วยกระเบื้อง", ["สภาพปกติ", "บิ่น,แตก", "เปลี่ยนสี", "รอยอาร์ค", "ผิวสกปรก", "หลวม,หลุด", "ก้านเป็นสนิม", "อื่่นๆ"]],

    ])],

]);

// --------------------------33
var type33_equipment = [
    "เสา2",
    "ระบบต่อลงดิน OHGW",
    "ลูกถ้วยระบบจำหน่าย",
    "สายไฟระบบจำหน่าย และอุปกรณ์จับสาย",
    "จุดต่อในระบบจำหน่าย",
    "อุปกรณ์ป้องกันและตัดตอน",
    "กับดักเสิร์จ",
    "คาปาซิเตอร์",
    "CT/VT"
]

var type33_topic = new Map([

    ["เสา2", new Map([
        ["เสาคอนกรีต", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "อื่่นๆ"]],
        ["เสาโครงเหล็ก", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "อื่่นๆ"]],
        ["คอนคอนกรีต", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "bolt/nut หลวม,หลุด", "bolt/nut เปลี่ยนสี,เป็นสนิม", "bond wire หลุด,ขาด", "อื่่นๆ"]],
        ["คอนเหล็ก", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "bolt/nut หลวม,หลุด", "bolt/nut เปลี่ยนสี,เป็นสนิม", "bond wire หลุด,ขาด", "อื่่นๆ"]]
    ])],
]);

//--------------------------22

var type22_equipment = [
    "เสา3",
    "ระบบต่อลงดิน OHGW",
    "ลูกถ้วยระบบจำหน่าย",
    "สายไฟระบบจำหน่าย และอุปกรณ์จับสาย",
    "จุดต่อในระบบจำหน่าย",
    "อุปกรณ์ป้องกันและตัดตอน",
    "กับดักเสิร์จ",
    "คาปาซิเตอร์",
    "CT/VT"
]

var type22_topic = new Map([

    ["เสา3", new Map([
        ["เสาคอนกรีต", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "อื่่นๆ"]],
        ["เสาโครงเหล็ก", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "อื่่นๆ"]],
        ["คอนคอนกรีต", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "bolt/nut หลวม,หลุด", "bolt/nut เปลี่ยนสี,เป็นสนิม", "bond wire หลุด,ขาด", "อื่่นๆ"]],
        ["คอนเหล็ก", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "bolt/nut หลวม,หลุด", "bolt/nut เปลี่ยนสี,เป็นสนิม", "bond wire หลุด,ขาด", "อื่่นๆ"]]
    ])],

    // ["ระบบต่อลงดิน OHGW", ["สาย OHGW", "สาย GROUND", "เหล็กรองรับสาย OHGW", "จุดต่อระบบต่อลงดิน"]],
    // "ลูกถ้วย",
    // "สายไฟ",
    // "จุดต่อ",
    // "ล่อฟ้า",
    // "คาปาซิเตอร์",
]);

// var type22_problem = new Map([
//     ["เสาคอนกรีต", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "อื่่นๆ"]],
//     ["เสาโครงเหล็ก", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "อื่่นๆ"]],
//     ["คอนคอนกรีต", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "bolt/nut หลวม,หลุด", "bolt/nut เปลี่ยนสี,เป็นสนิม", "bond wire หลุด,ขาด" ,"อื่่นๆ"]],
//     ["คอนเหล็ก", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "bolt/nut หลวม,หลุด", "bolt/nut เปลี่ยนสี,เป็นสนิม", "bond wire หลุด,ขาด" ,"อื่่นๆ"]],

//     ["สาย OHGW", ["สภาพปกติ", "สายขาด", "เป็นสนิม", "อื่นๆ"]],
//     ["สาย GROUND", ["สภาพปกติ", "เป็นสนิม", "อื่นๆ"]],
//     ["เหล็กรองรับสาย OHGW", ["สภาพปกติ", "บิดงอ,เสียรูป", "เป็นสนิม", "อื่นๆ"]],
//     ["จุดต่อระบบต่อลงดิน", ["สภาพปกติ", "จุดต่อที่OHGW : หลวม,หลุด", "จุดต่อที่OHGW : เปลี่ยนสี", "จุดต่อที่OHGW : รอยอาร์ค", "จุดต่อที่OHGW : เป็นสนิม", "จุดต่อที่หัวเสา : หลวม,หลุด", "จุดต่อที่หัวเสา : เปลี่ยนสี", "จุดต่อที่หัวเสา : รอยอาร์ค", "จุดต่อที่หัวเสา : เป็นสนิม" ,"อื่นๆ"]],

//     ["สายดิน", ["ขาด", "หย่อน", "เป็นสนิม", "จุดสนิม"]],
//     ["ลูกถ้วย", ["แตก/บิ่น", "แฟลช", 'แตกลาย', 'เปลี่ยนสี', 'คราปสกปรก']],
//     ["สายไฟ", ["สายแตก", "คลายตัว", "อุปกรณ์จับสายชำรุด"]],
//     ["จุดต่อ", ["เปลี่ยนสี/เป็นสนิม", "มีรอยอาร์ด", "บิดงอเสียรูป"]],
//     ["ล่อฟ้า", ["บิ่นแตก/แตก/ฉีก", "มีรอยอาร์ค", "ผิวสกปรก", "เปลี่ยนสี"]],
//     ["อุปกรณ์ตัดตอน", ["บิน", "แตก", "มีรอยอาร์ค"]],
// ]);

$('document').ready(function() {
    setting();
    $('#chapter').multipleSelect({
        showClear: true
    })
});

function setting() {
    addData();

    $("input[name='typeDataBox']").on("change", function() {
        $("li").removeClass("selected");
        $(".ms-choice span").text("");
        $("#subject").html('');
        $("#subject").html('<option value=" " selected="selected">ประเภทอุปกรณ์</option>');
        $("#topic").html('');
        $("#topic").html('<option value=" " selected="selected">ชนิดอุปกรณ์</option>');
        console.log($("input[name='typeDataBox']:checked").val())
        if ($("input[name='typeDataBox']:checked").val() == "22KV") {
            for (var i = 0; i < type22_equipment.length; i++) {
                $("#subject").append(
                    ` <option value="` + type22_equipment[i] + `">` + type22_equipment[i] + `</option>`
                );
            }
            onChangeType()
        } else if ($("input[name='typeDataBox']:checked").val() == "33KV") {
            for (var i = 0; i < type33_equipment.length; i++) {
                $("#subject").append(
                    ` <option value="` + type33_equipment[i] + `">` + type33_equipment[i] + `</option>`
                );
            }
            onChangeType()
        } else if ($("input[name='typeDataBox']:checked").val() == "115KV") {
            for (var i = 0; i < type115_equipment.length; i++) {
                $("#subject").append(
                    ` <option value="` + type115_equipment[i] + `">` + type115_equipment[i] + `</option>`
                );
            }
            onChangeType()
        }
    });

}

function addData() {
    $("#subject").append(
        ` <option value=" " selected="selected">ประเภทอุปกรณ์</option>`
    );
    $("#topic").append(
        `<option value=" " selected="selected">ชนิดอุปกรณ์</option>`
    );
    $("#chapter").append('');
    for (var i = 0; i < typeData.length; i++) {
        $(".radio_box").append(
            `<label> 
                <input type="radio" class="dataBox" name="typeDataBox" value="` + typeData[i] + `"></input>
                ` + typeData[i] + `
            </label>`
        )
    }

}

function onChangeType() {

    $("#subject").on("change", function() {
        var subject = $("#subject").val();
        $("li").removeClass("selected");
        $(".ms-choice span").text("");
        $("#topic").html('');
        $("#topic").html('<option value=" " selected="selected">ชนิดอุปกรณ์</option>');
        console.log($("#subject").val())
        if ($("input[name='typeDataBox']:checked").val() == "22KV") {
            var s1 = type22_topic.get(subject).entries();
            while (1) {
                v = s1.next()
                if (v.done) break;

                $("#topic").append(
                    ` <option value="` + v.value[0] + `">` + v.value[0] + `</option>`
                );
            }
            $("#topic").on("change", function() {
                var topic = $("#topic").val();
                console.log(topic)
                type22_topic.get(subject).get(topic);
                $("#chapter").html("");
                for (var k = 0; k < type22_topic.get(subject).get(topic).length; k++) {
                    $("#chapter").append(
                        ` <option value="` + type22_topic.get(subject).get(topic)[k] + `" >` + type22_topic.get(subject).get(topic)[k] + `</option>`
                    ).multipleSelect('refresh');
                }
            });
        } else if ($("input[name='typeDataBox']:checked").val() == "33KV") {
            var s1 = type33_topic.get(subject).entries();
            while (1) {
                v = s1.next()
                if (v.done) break;

                $("#topic").append(
                    ` <option value="` + v.value[0] + `">` + v.value[0] + `</option>`
                );
            }
            $("#topic").on("change", function() {
                var topic = $("#topic").val();
                console.log(topic)
                type33_topic.get(subject).get(topic);
                $("#chapter").html("");
                for (var k = 0; k < type33_topic.get(subject).get(topic).length; k++) {
                    $("#chapter").append(
                        ` <option value="` + type33_topic.get(subject).get(topic)[k] + `" >` + type33_topic.get(subject).get(topic)[k] + `</option>`
                    ).multipleSelect('refresh');
                }
            });
        } else if ($("input[name='typeDataBox']:checked").val() == "115KV") {
            var s1 = type115_topic.get(subject).entries();
            while (1) {
                v = s1.next()
                if (v.done) break;

                $("#topic").append(
                    ` <option value="` + v.value[0] + `">` + v.value[0] + `</option>`
                );
            }
            $("#topic").on("change", function() {
                var topic = $("#topic").val();
                console.log(topic)
                type115_topic.get(subject).get(topic);
                $("#chapter").html("");
                for (var k = 0; k < type115_topic.get(subject).get(topic).length; k++) {
                    $("#chapter").append(
                        ` <option value="` + type115_topic.get(subject).get(topic)[k] + `" >` + type115_topic.get(subject).get(topic)[k] + `</option>`
                    ).multipleSelect('refresh');
                }
            });
        }

    });

    // $("#subject").on("change", function() {  
    // $("#topic").html('<option value=" " selected="selected">ชนิดอุปกรณ์</option>');  
    // $("li").removeClass("selected");
    // $(".ms-choice span").text("");
    //     if ($("#subject").val() == "115KV") {
    //         for (var i = 0; i < type115_topic.length; i++) {
    //             $("#topic").prepend( 
    //                 `<option value="`+type115_topic[i]+`">`+type115_topic[i]+`</option>`
    //             );
    //         }
    //         $("#topic").on("change", function() {  
    //             var topic = $("#topic").val();
    //             type115_problem.get(topic);
    //             $("#chapter").html("");
    //             console.log(type115_problem.get(topic))
    //             for (var k = 0; k <type115_problem.get(topic).length; k++) {
    //                 $("#chapter").append(
    //                      ` <option value="`+ type115_problem.get(topic)[k] + `" >` + type115_problem.get(topic)[k] + `</option>`
    //                 ).multipleSelect('refresh');
    //             }
    //         });
    //     }else if ($("#subject").val() == "33KV") {
    //         for (var i = 0; i < type33_topic.length; i++) {
    //             $("#topic").append(
    //                 ` <option value="` + type33_topic[i] + `">` + type33_topic[i] + `</option>`
    //             );
    //         }
    //         $("#topic").on("change", function() {
    //             var topic = $("#topic").val();
    //             type33_problem.get(topic);
    //             $("#chapter").html("");
    //             for (var k = 0; k < type33_problem.get(topic).length; k++) {
    //                 $("#chapter").append(
    //                     ` <option value="` + type33_problem.get(topic)[k] + `" >` + type33_problem.get(topic)[k] + `</option>`
    //                 ).multipleSelect('refresh');
    //             }
    //         });
    //     } else if ($("#subject").val() == "22KV") {
    //         for (var i = 0; i < type22_topic.length; i++) {
    //             $("#topic").append(
    //                 ` <option value="` + type22_topic[i] + `">` + type22_topic[i] + `</option>`
    //             );
    //         }
    //         $("#topic").on("change", function() {
    //             var topic = $("#topic").val();
    //             type22_problem.get(topic);
    //             $("#chapter").html("");
    //             for (var k = 0; k < type22_problem.get(topic).length; k++) {
    //                 $("#chapter").append(
    //                     ` <option value="` + type22_problem.get(topic)[k] + `" >` + type22_problem.get(topic)[k] + `</option>`
    //                 ).multipleSelect('refresh');
    //             }
    //         });
    //     }

    // });

}