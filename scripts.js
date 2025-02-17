// $(function() {
//     let viewport = $('#container').innerWidth();
//     let tb = $('#thumbs');
//     let divWidth = tb.outerWidth();

//     $('#container').mousemove(function(e) {
//         tb.css({
//             left: ((viewport - divWidth) * (e.pageX / viewport)).toFixed(1) + "px"
//         });
//     });

//     $('.history-block').on('click', function() {
//         $('.history-block').css('width', '300px');
//         $('.history-block').find('.title').css('width', '260px');
//         $('.history-block .timeline').hide(300);

//         $(this).css('width', '600px');
//         $(this).find('.title').css('width', '500px');
//         $(this).find('.timeline').show(800);

//         $('#container').off('mousemove').on('mousemove', function(e) {
//             let newLeft = ((viewport - divWidth - 300) * (e.pageX / viewport)).toFixed(1);
//             tb.css({ left: Math.max(300, newLeft) + "px" });
//         });
//     });

//     $('.timeline ul li').on('click', function() {
//         $(this).fadeOut(200).fadeIn(200);
//     });
// });

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

// Toggle Theme
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  // Save preference
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️"; // Sun icon for light mode
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙"; // Moon icon for dark mode
  }
});

//   let diceButton = document.getElementById("dice-button");
//   if (!diceButton) {
//       diceButton = document.createElement("button");
//       diceButton.id = "dice-button";
//       diceButton.innerHTML = "🎲";
//       diceButton.style.position = "fixed";
//       diceButton.style.bottom = "20px";
//       diceButton.style.right = "20px";
//       diceButton.style.padding = "3px";
//       diceButton.style.fontSize = "40px";
//       diceButton.style.cursor = "pointer";
//       diceButton.style.border = "none";
//       diceButton.style.background = "white";
//       diceButton.style.borderRadius = "5px";
//       diceButton.style.boxShadow = "0px 0px 10px rgba(255, 255, 255, 0.5)";
//       document.body.appendChild(diceButton);
//   }

//   const canvasScripts = ["canvas.js", "canvas1.js", "canvas2.js", "canvas3.js", "canvas4.js", "canvas5.js"];
//   let activeCanvas = "canvas.js";
//   let animationFrame = null;
//   let currentScript = null;

//   function removeExistingCanvas() {
//       const existingCanvas = document.getElementById("backgroundCanvas");
//       if (existingCanvas) {
//           existingCanvas.remove();
//       }
//   }

//   function createNewCanvas() {
//       const newCanvas = document.createElement("canvas");
//       newCanvas.id = "backgroundCanvas";
//       newCanvas.style.position = "fixed";
//       newCanvas.style.top = "0";
//       newCanvas.style.left = "0";
//       newCanvas.style.width = "100vw";
//       newCanvas.style.height = "100vh";
//       newCanvas.style.zIndex = "-1";
//       document.body.appendChild(newCanvas);

//       function resizeCanvas() {
//           newCanvas.width = window.innerWidth;
//           newCanvas.height = window.innerHeight;
//       }
//       resizeCanvas();
//       window.addEventListener("resize", resizeCanvas);

//       return newCanvas;
//   }

//   function stopPreviousAnimation() {
//       if (animationFrame) {
//           cancelAnimationFrame(animationFrame);
//           animationFrame = null;
//       }
//   }

//   function loadCanvasScript(scriptName) {
//       stopPreviousAnimation();
//       removeExistingCanvas();
//       createNewCanvas();

//       if (currentScript) {
//           currentScript.remove();
//       }

//       currentScript = document.createElement("script");
//       currentScript.src = scriptName;
//       currentScript.onload = () => console.log(`Loaded: ${scriptName}`);
//       document.body.appendChild(currentScript);
//   }

//   loadCanvasScript("canvas.js");

//   function isInSection(sectionId) {
//       const section = document.getElementById(sectionId);
//       if (!section) return false;

//       const rect = section.getBoundingClientRect();
//       return rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
//   }

//   diceButton.addEventListener("click", function () {
//       let newCanvas;
//       do {
//           newCanvas = canvasScripts[Math.floor(Math.random() * canvasScripts.length)];
//       } while (newCanvas === activeCanvas);

//       activeCanvas = newCanvas;

//       if (isInSection("skills") || isInSection("projects")) {
//           document.getElementById("landing").scrollIntoView({ behavior: "smooth" });
//           setTimeout(() => loadCanvasScript(activeCanvas), 600);
//       } else {
//           loadCanvasScript(activeCanvas); // Always switch canvas, even in contact section
//       }
//   });
// });

// 	// <![CDATA[  <-- For SVG support
// 	if ('WebSocket' in window) {
// 		(function () {
// 			function refreshCSS() {
// 				var sheets = [].slice.call(document.getElementsByTagName("link"));
// 				var head = document.getElementsByTagName("head")[0];
// 				for (var i = 0; i < sheets.length; ++i) {
// 					var elem = sheets[i];
// 					var parent = elem.parentElement || head;
// 					parent.removeChild(elem);
// 					var rel = elem.rel;
// 					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
// 						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
// 						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
// 					}
// 					parent.appendChild(elem);
// 				}
// 			}
// 			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
// 			var address = protocol + window.location.host + window.location.pathname + '/ws';
// 			var socket = new WebSocket(address);
// 			socket.onmessage = function (msg) {
// 				if (msg.data == 'reload') window.location.reload();
// 				else if (msg.data == 'refreshcss') refreshCSS();
// 			};
// 			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
// 				console.log('Live reload enabled.');
// 				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
// 			}
// 		})();
// 	}
// 	else {
// 		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
// 	}
// 	// ]]>
