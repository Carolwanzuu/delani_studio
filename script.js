// $(document).ready(function() {
//     $("p").click(function() {
//       $(".walrus-showing").toggle();
//       $(".walrus-hidden").toggle();
//     });
//   });
$(document).ready(function() {
    $("#design").click(function() {
        $("#design").hide();
        $(".design1").show();
         });
    });
    $(document).ready(function() {
        $(".design1").click(function() {
            $("#design").show();
            $(".design1").hide();
             });
        });
    $(document).ready(function() {
        $("#devop").click(function() {
            $("#devop").hide();
            $(".devop1").show();
             });
        });
        $(document).ready(function() {
            $(".devop1").click(function() {
                $("#devop").show();
                $(".devop1").hide();
                 });
            });
        $(document).ready(function() {
            $("#product").click(function() {
                $(".product1").show();
                $("#product").hide();
                 });
            });
            $(document).ready(function() {
                $(".product1").click(function() {
                    $("#product").show();
                    $(".product1").hide();
                     });
                });
             $(document).ready(function() {
                    $(".imgport").hover(function() {
                        $(".imgport").toggle();
                        
                         });
                    });

            
            // p {
            //     cursor: pointer;
            //     color: #0088cc;
            //     }
                
            //     p:hover {
            //     text-decoration: underline;
            //     }

            // .portfolio .row img:hover {
            //     background: white;
            // }
