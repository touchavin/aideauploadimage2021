var typeData = ["เสา", "33KV", "22KV"];

var type115_topic = [
    "เสาคอนกรีต",
    "เสาโครงเหล็ก",
    "คอนคอนกรีต",
    "คอนเหล็ก",

]

var type115_problem = new Map([
    ["เสาคอนกรีต", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "อื่่นๆ"]],
    ["เสาโครงเหล็ก", ["สภาพปกติ", "บิดงอ,เสียรูป", 'เป็นสนิม', 'อื่่นๆ']],
    ["คอนคอนกรีต", ["สภาพปกติ", "บิ่น,แตก", "บิดงอ,เสียรูป", "bolt/nut หลวม,หลุด", "bolt/nut เปลี่ยนสี,เป็นสนิม", "bond wire หลุด,ขาด", "อื่นๆ"]],
    ["คอนเหล็ก", ["สภาพปกติ", "บิดงอ,เสียรูป", "เป็นสนิม", "bolt/nut หลวม,หลุด", "bolt/nut เปลี่ยนสี,เป็นสนิม", "bond wire หลุด,ขาด", "อื่่นๆ"]],

]);

var type33_topic = [
    "สายดิน",
    "ลูกถ้วย",
    "สายไฟ",
    "จุดต่อ",
    "ล่อฟ้า",
    "คาปาซิเตอร์",
]
var type33_problem = new Map([
    ["สายดิน", ["ขาด", "หย่อน", "เป็นสนิม", "จุดสนิม"]],
    ["ลูกถ้วย", ["แตก/บิ่น", "แฟลช", 'แตกลาย', 'เปลี่ยนสี', 'คราปสกปรก']],
    ["สายไฟ", ["สายแตก", "คลายตัว", "อุปกรณ์จับสายชำรุด"]],
    ["จุดต่อ", ["เปลี่ยนสี/เป็นสนิม", "มีรอยอาร์ด", "บิดงอเสียรูป"]],
    ["ล่อฟ้า", ["บิ่นแตก/แตก/ฉีก", "มีรอยอาร์ค", "ผิวสกปรก", "เปลี่ยนสี"]],
    ["อุปกรณ์ตัดตอน", ["บิน", "แตก", "มีรอยอาร์ค"]],
]);

var type22_topic = [
    "สายดิน",
    "ลูกถ้วย",
    "สายไฟ",
    "จุดต่อ",
    "ล่อฟ้า",
    "คาปาซิเตอร์",
]
var type22_problem = new Map([
    ["สายดิน", ["ขาด", "หย่อน", "เป็นสนิม", "จุดสนิม"]],
    ["ลูกถ้วย", ["แตก/บิ่น", "แฟลช", 'แตกลาย', 'เปลี่ยนสี', 'คราปสกปรก']],
    ["สายไฟ", ["สายแตก", "คลายตัว", "อุปกรณ์จับสายชำรุด"]],
    ["จุดต่อ", ["เปลี่ยนสี/เป็นสนิม", "มีรอยอาร์ด", "บิดงอเสียรูป"]],
    ["ล่อฟ้า", ["บิ่นแตก/แตก/ฉีก", "มีรอยอาร์ค", "ผิวสกปรก", "เปลี่ยนสี"]],
    ["อุปกรณ์ตัดตอน", ["บิน", "แตก", "มีรอยอาร์ค"]],
]);
$('document').ready(function() {
    setting();
    $('#chapter').multipleSelect({
        showClear: true
    })
});

function setting() {

    addData();
    $("#subject").on("change", function() {
        $("#topic").html('<option value=" " selected="selected">ชนิดอุปกรณ์</option>');
        $("li").removeClass("selected");
        $(".ms-choice span").text("");
        if ($("#subject").val() == "เสา") {
            for (var i = 0; i < type115_topic.length; i++) {
                $("#topic").prepend(
                    `<option value="` + type115_topic[i] + `">` + type115_topic[i] + `</option>`
                );
            }
            $("#topic").on("change", function() {
                var topic = $("#topic").val();
                type115_problem.get(topic);
                $("#chapter").html("");
                console.log(type115_problem.get(topic))
                for (var k = 0; k < type115_problem.get(topic).length; k++) {
                    $("#chapter").append(
                        ` <option value="` + type115_problem.get(topic)[k] + `" >` + type115_problem.get(topic)[k] + `</option>`
                    ).multipleSelect('refresh');
                }
            });





        } else if ($("#subject").val() == "33KV") {
            for (var i = 0; i < type33_topic.length; i++) {
                $("#topic").prepend(
                    `<option value="` + type33_topic[i] + `">` + type33_topic[i] + `</option>`
                );
            }
            $("#topic").on("change", function() {
                var topic = $("#topic").val();
                type33_problem.get(topic);
                $("#chapter").html("");
                console.log(type33_problem.get(topic))
                for (var k = 0; k < type33_problem.get(topic).length; k++) {
                    $("#chapter").append(
                        ` <option value="` + type33_problem.get(topic)[k] + `" >` + type33_problem.get(topic)[k] + `</option>`
                    ).multipleSelect('refresh');
                }
            });

        } else if ($("#subject").val() == "22KV") {
            for (var i = 0; i < type22_topic.length; i++) {
                $("#topic").prepend(
                    `<option value="` + type22_topic[i] + `">` + type22_topic[i] + `</option>`
                );
            }
            $("#topic").on("change", function() {
                var topic = $("#topic").val();
                type22_problem.get(topic);
                $("#chapter").html("");
                console.log(type22_problem.get(topic))
                for (var k = 0; k < type22_problem.get(topic).length; k++) {
                    $("#chapter").append(
                        ` <option value="` + type22_problem.get(topic)[k] + `" >` + type22_problem.get(topic)[k] + `</option>`
                    ).multipleSelect('refresh');
                }
            });

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
    $("#chapter").append(
        `<option value=" " selected="selected">สาเหตุการชำรุด</option>`
    );
    for (var i = 0; i < typeData.length; i++) {
        $("#subject").append(
            `<option value="` + typeData[i] + `" >` + typeData[i] + `</option>`
        )
    }

}