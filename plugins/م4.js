let handler = async (m, { conn, command, text }) => {
let love = `
😘
---------------
اهلا بيك في بوت زينون احنا هنا في خدمتك دايما🥰
اليك قائمة تحويل ريك

---------------


.سنجاب
.سلس
 .بطئ 
.الي 
.عكس
 .تسريع-بسيط
.سريع 
 .تحسين
.منفوخ
.عميق 
 .عميق2 
صوت (1-7) 
صوت انمي (1-10

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
handler.command = /^(الصوتيات)$/i
export default handler
