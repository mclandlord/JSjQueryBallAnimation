 $(document).ready(function(){
    $(".RunBtn").click(function RunAnim() {
          
        if ($(this).text() == "RUN") { 
             
            var loopcount = document.getElementById("NUMBER1").value;
              document.getElementById("Total").innerHTML = "Loop Total: "+loopcount; 
              document.getElementById("ball").style.animationIterationCount = loopcount; 
              document.getElementById("ball").style.animationPlayState = "running";
              document.getElementById("RunPause").innerHTML = "<span style='font-size:30px; color: blue' >Status:  Running</span>";
              $(this).text("STOP");
                                    } 
        
        else { 
           
            $(this).text("RUN"); 
              document.getElementById("ball").style.animationPlayState = "paused";
              document.getElementById("RunPause").innerHTML = "<span style='font-size:40px; color: red' >Status:  PAUSED</span>";
            };             
                                        });     
                                });

            var element = document.getElementById("ball");
              element.addEventListener("animationend", listener, false);
              element.className = "ball";

            function listener(event){
              document.getElementById("RunPause").innerHTML = "<span style='font-size:30px; color: green; font-style: italic'>Status:  Finished</span>";
              document.getElementById("FaceCry").style.visibility = ('visible');
              $(".RunBtn").text("RUN"); 
              setTimeout(() => { window.location.href = window.location.href }, 1500);
              
            }

    $(".ResetBtn").click(function Reset() {
              window.location.href = window.location.href;
              // PAGE RELOAD 
                                });
