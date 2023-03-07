// const counterNum = document.querySelectorAll('.counter-numbers');
// const speed = 200;
// counterNum.forEach((curElem) => {
//     const updateNumber = () => {
//         const targetNumber = parseInt(curElem.dataset.number);
//         // console.log(targetNumber);
//         const intialNum = parseInt(curElem.innerText);
//         // console.log(intialNum);
//         const increamentNumber = Math.trunc(targetNumber / speed)
//         // console.log(increamentNumber);
//         if (intialNum < targetNumber) {
//             curElem.innerText = intialNum + increamentNumber
//                 ;
//             setTimeout(updateNumber, 5);
//         }
//     };

//     updateNumber();
// });

var intialNum = 0;
$(window).scroll(function () {
    var oTop = $("#counter-start").offset().top - window.innerHeight;
    if (intialNum == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 550,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                        //alert('finished');
                    }
                }
            );
        });
        a = 1;
    }
});