let handler = async (m, { conn, command, text }) => {
let love = `
---------------
اهلا بيك في بوت زينون احنا هنا في خدمتك دايما🥰
اليك قائمة اوامر الجروبات
---------------

 -  .منشن
 .مخفي
-  .حذف 
-  .لينك 
-  .رفع
-  خفض
-  .تغير-الاسم 
-  .تغير-الوصف 
.تغير-المغادره
.تغير-الترحيب
-  .طرد
-  .الغاء-الطرد
-  .الادمن
-  .الجروب
-  .جروب فتح
-  .جروب غلق
-  .انذار 
-  .حذف-انذار
-   .التحذيرات
---------------
 لاي مشكلة يمكنك التواصل معنا من خلال
www.zenonsoftware.com
او عن طريق كتابة الامر
.ابلاغ (كتابه تفاصيل مشكلتك)
---------------
All ©️ Copyright Reserved Zenonsoftware
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(الجروب)$/i
export default handler
