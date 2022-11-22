const positiveHabits = [
  {
    title: "الزومبا",
    desc: `الرقص مهما كان عمرك بيساعدك تحافظ على لياقتك البدانيه ودا عشان فوائد كتيرة جدا توسع الرئتين بسبب المجهود الكبير والحركة السريعة إلي بيعملها الشخص كمان بتحسن ضربات القلب وصحة القلب بشكل عام كمان بيساعد على زيادة القوة العضلية كمان بيعمل مرونه لحركات الجسم وكمان بيساعد على تحسين توتر العضلات وبيقويها وبيقوي العظام وبيقلل من فرص الاصابة بهشاشة العظام .`,
    img: "1",
  },
  {
    title: "السباحة ",
    desc: `من الرياضة السهلة والممتعة إلي بتساعدك تحافظ على جسمك السباحة فالسباحة تعتبر واحدة من الرياضات التي تساعد على تحسين صحة الجسد حيث أن السباحة لمدة 30 دقيقه يومياً بتساعد على ضبط ضغط الدم وتقوية عضلة القلب وبتقلل من معدلات الكولسترول المرتفعه عند الانسان وكمان السباحة بتنشط الدورة الدموية وتجدد طاقة الجسم وكمان بتساعدك على التخلص من الضغوطات النفسيه و تعمل على الراحه والاسترخاء للعقل والجسد.`,
    img: "2",
  },
  {
    title: "اليوجا",
    desc: `ناس كتير بتتعرض للمشاكل والضغوطات طول اليوم ودا بيأثر على صحتهم النفسية وهنا بيجي دور رياضة اليوجا في دراسات كتير اتعملت عن اليوجا وتأثيرها على العقل واثبتت الدراسات أنك تلعب يوجا  15 دقيقة يومياً بتساعدك انك تغير كميا المخ وتحسن مزاجك  كمان اليوجا مكتفتش إنها بتحسن الصحة النفسية بس لا ده بتحسن في الصحة الجسدية ايضاً عن طريق الوضع التشريحي للجسم فهي بتشد الذراعين والساقيين والكتفين وكمان بتشد الضهر وتخليه على الوضعية الصحيحة.`,
    img: "3",
  },
  {
    title: "ركوب الدراجات",
    desc: `يعتبر واحدة من الرياضيات اللي بتساعد على الصحة النفسية والجسدية  كتير من كبار السن بيلجأوا لركوب الدراجات الصبح علشان يحسنوا من حالتهم النفسية.`,
    img: "4",
  },
  {
    title: "الجري",
    desc: `أول ما تفكر تلعب رياضة أول حاجة بتيجي في دماغك هو الجري بسبب فوائده الكبيرة جداً ومنها   بيساعد الجسم على التعامل مع التوتر النفسي الحالي وكمان بيزيد من مستويات البروتين المشتق من الدماغ في الجسم وكمان بيساعد على تنظيم ضربات القلب وتوسيع الرئتين وبينشط المخ فبيساعدك تاخد القرار الصح وبيزود نسبه التفكير والتركيز في المخ .`,
    img: "5",
  },
];


const negativeHabits = [
  {
      title: 'السهر وقلة النوم ❌',
      desc: `
حلول بسيطه جداً 
بلاش تشرب كافيين فى وقت متاخر زي (الشاي او القهوه ) .  
مارس رياضة بدنية قبل متنام بأربعة  ساعات على الأقل  .
ابعد عن التفكير وانت جالس على السرير  .
مارس تمارين التأمل لأنها بتخلص من التوتر عشان تعرف تنام بعمق .`,
      img: '1'
  },
  {
      title: 'التفكير السلبى ❌',
      desc: `    عشان تعرف تعالج نفسك من التفكير السلبى اتكلم مع هذه الافكار اتعرف عليها قل لها توقفى 
ولو شعرت بفكرة سيئه وقفها من البدايه متخلهاش تسيطر عليك ودا هيمنعك من ولادة افكار كثيرة .
ومهم جدا نمارس رياضة .
والتأمل والاسترخاء .`,
      img: '2'
  },
  {
      title: 'الندم على الماضى ❌',
      desc: `
الندم على الماضى ممكن يكون طريقه بتتعلم بيها فى المستقبل لكن المهم انك تكون متصالح مع تجارب الماضى حاول تحوله من ندم لطريقه تستفيد بيها دايماً فى المستقبل ودا بنسميه ندم ايجابى حط دايماً فى بالك إن كل الناس بتغلط لان دي طبيعة البشر حول شعور الندم الى شعور امتنان 
سامح نفسك دا هيخليك عندك ثقه فى نفسك حط لنفسك جمل تشجيعيه عشان ترفع من حالتك `,
      img: '3'
  },
  {
      title: 'الاستخدام المفرط لوسائل التواصل الاجتماعى ❌',
      desc: `
عشان تتخلص من ادمان وسائل التواصل الاجتماعى ابدأ اتعلم حاجه جديده زى مثلاً ممارسة لغة جديده او قراءة كتاب جديد او اى نشاط مفيد .`,
      img: '4'
  },
  {
      title: 'الكسل وعدم ممارسه التمارين الرياضية ❌',
      desc: `
هبدأ الشهر الجاى وحجج كتير بنقنع نفسنا بيها اتبع هذه النصائح للتخلص من الكسل :  
١-حدد الهدف من ممارسة الرياضة  .
٢-حط جدول يومى لنفسك  .
٣- استمتع بها ومتخسش انها واجب عليك لازم تخلصه  .
٤-افتكر ديما فوائد الرياضة واعتبرها حافز بيشجعك تستمر .`,
      img: '5'
  },
 
]

const habitsHtml = positiveHabits.map((e, i) => {
  return `
    
  <div class="row align-items-center ${i %2 ===0 ? 'flex-row-reverse': ''} justify-content-center  g-0 mb-2-9">
  <div class="col-md-5 col-xl-4 bg-img cover-background min-height-350 ${i %2 ===0 ? 'border-end-md-radius-10 border-bottom-sm-radius-10': 'border-start-md-radius-10 border-top-sm-radius-10'} "
      data-background="../img/positive-habits/${e.img}.jpg"></div>
  <div class="col-md-7 col-xl-6">
  <div class="author">
  <h4 class="display-27 font-weight-800 mb-0 text-center"> ${e.title}</h4>
</div>
      <div class="success-content border-end-md-radius-10 border-bottom-sm-radius-10">
          <p>
          ${e.desc}</p>
         
      </div>
  </div>
  </div>
      `;
});
const negativeHabitsHtml = negativeHabits.map((e, i) => {
  return `
<div class="row   ${i %2 ===0 ? 'flex-row-reverse': ''} justify-content-center  g-0 mb-2-9">
<div class="col-md-5 col-xl-4 bg-img cover-background min-height-350 ${i %2 ===0 ? 'border-end-md-radius-10 border-bottom-sm-radius-10': 'border-start-md-radius-10 border-top-sm-radius-10'} "
    data-background="../img/negative-habits/${e.img}.jfif"></div>
<div class="col-md-7 col-xl-6">
<div class="success-content d-flex flex-column justify-content-center h-100 border-end-md-radius-10 border-bottom-sm-radius-10">
<div class="author mb-3">
<h4 class="display-27 font-weight-800 mb-0 text-center"> ${e.title}</h4>
</div>
        <p style="white-space:pre-line" class="text-start">
        ${e.desc}</p>
      
    </div>
</div>
</div>
      `;
});

window.onload = () => {
  if(document.getElementById("habitsWrapper")){
    document.getElementById("habitsWrapper").innerHTML = habitsHtml.join("");
  }
  if(document.getElementById("negativeHabitsHtml")){
    document.getElementById("negativeHabitsHtml").innerHTML = negativeHabitsHtml.join("");
  }
  // sections background image from data background
  var pageSection = $(".parallax,.bg-img");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css(
        "background-image",
        "url(" + $(this).data("background") + ")"
      );
    }
  });
};
