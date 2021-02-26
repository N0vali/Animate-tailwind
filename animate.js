const callback = function (entries) {
    entries.forEach((entry) => {
        var animate = entry.target.dataset.animate
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-"+animate);
        } else {
            entry.target.classList.remove("animate-"+animate);
        }
    });
};
var observer = new IntersectionObserver(callback);
var parentsAnimated = document.querySelectorAll('.animated-parent')
var numberOfParent = 1;
parentsAnimated.forEach(function(parentAnimated){
    var newname = 'animated-parent-'+numberOfParent;
    parentAnimated.classList.add(newname);
    parent = document.querySelector('.'+newname);

    number = parent.dataset.delay
    number = parseInt(number);
    var targets= parentAnimated.querySelectorAll('.'+newname +" .animated-item");
    if(typeof parentAnimated.dataset.delayinc !== 'undefined' ){
        var numberinc = parentAnimated.dataset.delayinc;
        numberinc = parseInt(numberinc);
    } else{
        var numberinc = 200;
    }
    targets.forEach(function (target) {
// console.log(parentAnimated.dataset.delayinc)
        target.classList.add("delay-"+number);
        number = number+ numberinc;
        observer.observe(target);
    });
    numberOfParent=numberOfParent+1;
});

