let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #1b1b32;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Escribo acerca del Feminismo y los avances que ha conseguido a lo largo del tiempo.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();