//calculate for marginroot for knowing when the animation should pop
let ratio = .1
const y = Math.round(window.innerHeight * ratio)
// put every animation name who needs opacity 0 at the beginning
let animationsNeedsOpacity0 = ['fadein','fadeinup','bounceinup'];
const callback = function (entries) {
    entries.forEach((entry) => {
        var animate = entry.target.dataset.animate
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-"+animate);
            if (animationsNeedsOpacity0.includes(animate) ){
                entry.target.classList.remove('opacity-0');
            }
        } else {
            entry.target.classList.remove("animate-"+animate);
            if (animationsNeedsOpacity0.includes(animate) ){
                entry.target.classList.add('opacity-0');

            }
        }
    });
};
var observer = new IntersectionObserver(callback,{
    rootMargin:`0px 0px -${y}px 0px`
});
//select all parentAnimated
var parentsAnimated = document.querySelectorAll('.animated-parent')
//init a value for identify correctly the parent
var numberOfParent = 1;
//loop on every parent for go get them child
parentsAnimated.forEach(function(parentAnimated){
    // identify correctly the parent by adding a class with the number
    var newname = 'animated-parent-'+numberOfParent;
    parentAnimated.classList.add(newname);
    parent = document.querySelector('.'+newname);
// define the delay for the animation and make a default at 200 in case of forgetting
    if(typeof  parent.dataset.delay !== 'undefined' ){
       var number = parent.dataset.delay
        number = parseInt(number);
    } else{
        var number = 200;
    }
    //select all childs who have the "animated-item" classes
    var targets= parentAnimated.querySelectorAll('.'+newname +" .animated-item");
    // define the delay of incrementation for the animation and make a default at 200 in case of forgetting
    if(typeof parentAnimated.dataset.delayinc !== 'undefined' ){
        var numberinc = parentAnimated.dataset.delayinc;
        numberinc = parseInt(numberinc);
    } else{
        var numberinc = 200;
    }
    //loop for add to each childs who have the "animated-item"  the delay of animations
    targets.forEach(function (target) {
        target.classList.add("delay-"+number);
        number = number+ numberinc;
        observer.observe(target);
    });
    //increment the parent-animated number
    numberOfParent=numberOfParent+1;
});

