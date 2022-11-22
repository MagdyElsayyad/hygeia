const sys = [
  {
    title: "الكيتو دايت",
    desc: `يعد نظام الكيتو دايت من أشهر أنواع أنظمة التخسيس التي تعتمد بشكل أساسي على تقليل كمية الكربوهيدرات في الجسم والاكثار من تناول الدهون ليكون عوضا عن نقص الكربوهيدرات في الجسم.
واكثر الأشخاص استخداما لنظام "الكيتو" هم الأشخاص الذين يعانون من السمنة المفرطة حيث يساعد هذا النظام على إنقاص الوزن حسب العديد من الدراسات التي اقيمت حوله، كما يقوم بخفض الشهية، مما يؤدي إلى انخفاض في تناول السعرات الحرارية ويقلل من ارتفاع مستوى الكوليسترول في الدم.
الجانب السلبي لنظام الكيتو : لكل نظام غذائي فوائد وسلبيات رغم فوائد تلك النظام إلا أنه لا يناسب الجميع خصوصًا لأصحاب الأمراض المزمنة فهو يعد نظام قاسي على أصحاب تلك الأمراض.`,
  },
  {
    title: "نظام دوكان الغذائي",
    desc: `هو نظام غذائي يعتمد على تقليل الكربوهيدرات، وينقسم إلى أربع مراحل، مرحلتان لفقدان الوزن في بدايته ومرحلتان للاستمرار فيما بعد فيما يعرف بـ تثبيت الوزن وتعتمد مراحل إنقاص الوزن على تناول عدد كبير جدًا من الأطعمة الغنية بالبروتين بشكل أساسي.
فوائد نظام الدوكان : لا يوجد فوائد لنظام الدوكان  غير إنقاص الوزن فقط، حسب الدراسات التي أجريت على النظام.`,
  },
  {
    title: "الصيام المتقطع",
    desc: `يعد نظام الصيام المتقطع من أفضل أنواع الرجيم التي تنظم جسمك بين فترات الصيام والأكل ويساعد بشكل كبير في إنقاص الوزن.
من أكثر الطرق شيوعًا لأداء الصيام المتقطع :
أ: هي طريقة 16/8 : وهى تتضمن عدم تناول وجبة الإفطار وتقييد فترة تناول الطعام إلى ثماني ساعات يوميًا، وبالتالي ستصوم لمدة 16 ساعة وهي المتبقية من اليوم، والصيام لمدة 24 ساعة مرة أو مرتين في الأسبوع ولكن في أيام مختلفة أي غير متتالية.
ب: نظام المحارب الغذائي: وهو عبارة عن تناول كميات صغيرة من الفاكهة والخضروات النيئة أثناء النهار، وتناول ووجبة كبيرة في الليل.
فوائد أخرى: يقلل الصيام المتقطع من الاصابة بالتهابات وارتفاع الكوليسترول والدهون الثلاثية وسكر الدم.
الجانب السلبي: الصيام المتقطع قد لا يناسب الجميع فهو يحتاج إلى من يتمتع بصحة جيدة فقط.`,
  },
];

const sysHtml = sys.map((e, i) => {
  return `
    <div class="card">
    <h2 class="card-header" id="heading${i}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
        ${e.title}</button>
    </h2>
    <div id="collapse${i}" class="accordion-collapse collapse " aria-labelledby="heading${i}" data-bs-parent="#accordion">
        <div class="card-body">
           ${e.desc}
        </div>
    </div>
</div>
    `;
});

