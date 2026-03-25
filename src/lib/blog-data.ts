export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  tag: string;
  date: string;
  readTime: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-on-earth-are-cecs",
    title: "What on Earth Are CECs?",
    description:
      "An introduction to Contaminants of Emerging Concern — what they are, where they come from, and why they matter.",
    content: `Contaminants of Emerging Concern (CECs) are chemicals that have only recently been identified as potential threats to the environment and human health. Unlike traditional pollutants, CECs are not yet widely regulated, but growing scientific evidence suggests they may pose significant risks.

CECs include a broad range of substances: pharmaceuticals flushed down toilets, microplastics shed from clothing, flame retardants in furniture, and "forever chemicals" like PFAS used in non-stick coatings. What makes them particularly concerning is their persistence — many don't break down in the environment and can accumulate in water, soil, and living organisms over time.

## Where Do CECs Come From?

The sources are surprisingly everyday. Washing synthetic clothing releases thousands of microplastic fibres into wastewater. Sunscreen washed off at the beach introduces UV filters into coastal waters. Agricultural runoff carries pesticides and veterinary medicines into rivers and eventually the ocean.

Wastewater treatment plants, designed decades ago, were never built to filter out these modern chemicals. As a result, CECs pass through treatment processes largely intact and enter our waterways.

## Why Should We Care?

Even at very low concentrations, CECs can disrupt ecosystems. Synthetic hormones from contraceptive pills have been shown to feminise male fish in rivers. Microplastics have been found in the deepest ocean trenches, in Arctic ice, and even in human blood.

The science is still developing, but the precautionary principle suggests we should act now. Understanding CECs is the first step toward meaningful change — and that's exactly what A New Formula is here to help with.

## What Can You Do?

Start by learning which everyday products contain CECs. Choose natural fabrics where possible, dispose of medicines properly, and support policies that push for better wastewater treatment. Small actions, multiplied across millions of people, create real impact.`,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    tag: "CECs",
    date: "2026-03-01",
    readTime: "5 min",
    author: "CONTRAST Project",
  },
  {
    slug: "pfas-forever-chemicals-explained",
    title: "PFAS: The Forever Chemicals Explained",
    description:
      "Why PFAS are called 'forever chemicals', where they hide in everyday products, and what the science says about their effects.",
    content: `Per- and polyfluoroalkyl substances — better known as PFAS — are a family of over 12,000 synthetic chemicals that have earned the ominous nickname "forever chemicals." The name isn't hyperbole: PFAS contain carbon-fluorine bonds, among the strongest in organic chemistry, which means they essentially never break down in the environment.

## A Brief History

PFAS were first developed in the 1940s and quickly found their way into countless products. Their unique properties — they repel water, oil, and heat — made them ideal for non-stick cookware, waterproof clothing, food packaging, and firefighting foam.

For decades, they were considered miracle chemicals. It wasn't until the early 2000s that scientists began uncovering the extent of PFAS contamination and its health implications.

## Where Are PFAS Found?

The answer is almost everywhere. PFAS have been detected in:

- Drinking water supplies worldwide
- Non-stick pans and cookware
- Waterproof and stain-resistant clothing
- Fast food wrappers and microwave popcorn bags
- Firefighting foam (AFFF)
- Cosmetics and personal care products
- Even in rainwater globally

A 2022 study found that rainwater everywhere on Earth now contains PFAS levels that exceed safe drinking water guidelines. There is essentially no pristine environment left untouched.

## Health Concerns

Research has linked PFAS exposure to a range of health issues including thyroid disease, liver damage, immune system suppression, reproductive problems, and certain cancers. Children may be particularly vulnerable, as PFAS can cross the placenta and are found in breast milk.

## What's Being Done?

The EU is currently considering the most comprehensive PFAS restriction ever proposed, covering all non-essential uses. Meanwhile, water utilities are investing in advanced filtration technologies capable of removing PFAS. But the sheer volume of contamination means cleanup will take decades.

## How to Reduce Your Exposure

Choose PFAS-free cookware, avoid stain-resistant fabric treatments, check cosmetics for ingredients containing "fluoro" or "perfluoro," and consider a quality water filter for your drinking water.`,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80",
    tag: "PFAS",
    date: "2026-03-03",
    readTime: "6 min",
    author: "CONTRAST Project",
  },
  {
    slug: "microplastics-in-our-oceans",
    title: "Microplastics in Our Oceans: The Invisible Threat",
    description:
      "How tiny plastic particles are infiltrating marine ecosystems, entering the food chain, and what it means for ocean health.",
    content: `Every year, an estimated 8 million tonnes of plastic enter the ocean. Much of it breaks down into tiny fragments less than 5mm in size — microplastics. But they don't disappear. They persist for hundreds of years, accumulating in every corner of the marine environment.

## What Are Microplastics?

Microplastics come in two forms. Primary microplastics are manufactured small — think microbeads in cosmetics or plastic pellets used in manufacturing. Secondary microplastics result from larger plastic items breaking down through UV radiation, wave action, and weathering.

A single fleece jacket can shed up to 250,000 microplastic fibres in one wash. A car tyre releases microplastic particles with every kilometre driven. Even tea bags and disposable face masks contribute.

## The Scale of the Problem

Microplastics have been found in the Mariana Trench, 11km below the surface. They're in Arctic sea ice, Antarctic snow, and on the summit of Mount Everest. A 2023 study estimated there are over 170 trillion microplastic particles floating in the world's oceans.

## Impact on Marine Life

Marine organisms from zooplankton to whales ingest microplastics. Filter feeders like mussels and oysters are particularly affected. The plastics themselves can cause physical harm, but they also act as vectors for other pollutants — absorbing chemicals like PCBs and pesticides from the water and delivering concentrated doses to the animals that eat them.

Coral reefs are affected too. Research shows corals actively ingest microplastics, which can cause tissue damage and reduce their ability to photosynthesize.

## Microplastics and Human Health

We eat, drink, and breathe microplastics daily. Studies have found them in human blood, lungs, liver, and placenta. The long-term health implications are still being researched, but early evidence suggests potential links to inflammation, cellular damage, and disruption of the gut microbiome.

## Solutions

Reducing plastic production is the most effective strategy. Supporting extended producer responsibility legislation, choosing natural materials, using microplastic-catching laundry bags, and properly disposing of waste all help. But systemic change — not just individual action — is what's needed most.`,
    image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=1200&q=80",
    tag: "Microplastics",
    date: "2026-03-05",
    readTime: "6 min",
    author: "CONTRAST Project",
  },
  {
    slug: "endocrine-disruptors-and-marine-life",
    title: "Endocrine Disruptors: When Chemicals Mimic Hormones",
    description:
      "How endocrine-disrupting chemicals interfere with hormonal systems in marine organisms and what this means for biodiversity.",
    content: `Hormones are the body's chemical messengers, regulating everything from growth and metabolism to reproduction and behaviour. Endocrine-disrupting chemicals (EDCs) interfere with this delicate system — and marine life is paying the price.

## What Are Endocrine Disruptors?

EDCs are substances that can mimic, block, or alter the body's hormones. They include synthetic oestrogens from contraceptive pills, bisphenol A (BPA) from plastics, phthalates from personal care products, and certain pesticides.

Even at incredibly low concentrations — parts per trillion — EDCs can have profound biological effects. This is because hormonal systems are designed to respond to minute chemical signals.

## Effects on Marine Life

The evidence is alarming. Male fish downstream of wastewater treatment plants have been found producing eggs — a condition called intersex, caused by synthetic oestrogens in the water. In some rivers, up to 100% of male roach show signs of feminisation.

Sea turtles' sex is determined by temperature during egg incubation, but EDCs can override this, skewing sex ratios. Molluscs exposed to tributyltin (an anti-fouling paint chemical) develop imposex — females growing male reproductive organs.

Marine mammals at the top of the food chain accumulate the highest concentrations through biomagnification. Polar bears, seals, and dolphins show some of the highest EDC levels of any animals on Earth.

## The Cocktail Effect

In the real world, organisms aren't exposed to a single EDC — they encounter complex mixtures. Research shows these "cocktails" can produce effects greater than the sum of their parts, making risk assessment extremely challenging.

## What's the CONTRAST Project Doing?

CONTRAST is developing new tools to detect and assess EDCs in marine environments, including advanced biomarker techniques and in silico (computer-based) modelling. The goal is to understand not just individual chemicals, but how real-world mixtures affect marine ecosystems.

## Taking Action

Support bans on harmful chemicals, choose products free from BPA and phthalates, and dispose of pharmaceuticals at designated collection points rather than flushing them.`,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
    tag: "Endocrine Disruptors",
    date: "2026-03-07",
    readTime: "6 min",
    author: "CONTRAST Project",
  },
  {
    slug: "how-wastewater-reaches-the-ocean",
    title: "From Drain to Ocean: The Journey of Wastewater",
    description:
      "Tracing the path of chemicals from our homes through treatment plants and into marine environments.",
    content: `Every time you wash your hands, flush a toilet, or run a washing machine, the water carries a cocktail of chemicals on a journey that often ends in the ocean. Understanding this pathway is crucial to addressing chemical pollution at its source.

## The Household Source

An average household sends dozens of chemicals down the drain daily: detergents, cosmetics, cleaning products, food waste, and pharmaceuticals. A single shower can introduce microplastics from body scrubs, parabens from shampoo, and triclosan from antibacterial soap.

## The Treatment Plant

Wastewater treatment plants are engineering marvels designed to remove organic matter, nutrients, and pathogens. Most use a three-stage process: primary (physical settling), secondary (biological treatment), and sometimes tertiary (advanced filtration).

However, these plants were designed in an era before CECs were understood. While they effectively remove traditional pollutants, they struggle with modern synthetic chemicals. Studies show that 30–70% of pharmaceuticals pass through treatment largely unchanged.

## Into the Environment

Treated wastewater — called effluent — is discharged into rivers, estuaries, and coastal waters. In many coastal cities, it flows directly into the ocean. During heavy rainfall, combined sewer systems can overflow, releasing untreated sewage directly into waterways.

The chemicals in effluent don't stay put. Ocean currents distribute them globally. PFAS from European factories have been detected in Antarctic wildlife. Pharmaceuticals from Asian cities appear in Pacific fish populations.

## Emerging Solutions

Advanced treatment technologies like activated carbon filtration, ozonation, and membrane bioreactors can remove many CECs. Switzerland has mandated that major treatment plants install such systems. The EU is developing similar requirements through its revised Urban Wastewater Treatment Directive.

Nature-based solutions like constructed wetlands and reed beds also show promise, using natural biological processes to break down certain pollutants.

## What You Can Do

Reduce the chemicals entering the system in the first place. Use eco-labelled cleaning products, never flush medicines, install a washing machine microplastic filter, and support investment in wastewater infrastructure.`,
    image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?w=1200&q=80",
    tag: "Pollution",
    date: "2026-03-09",
    readTime: "5 min",
    author: "CONTRAST Project",
  },
  {
    slug: "sunscreen-and-coral-reefs",
    title: "Sunscreen and Coral Reefs: A Hidden Connection",
    description:
      "How UV filters in sunscreen contribute to coral bleaching and what reef-safe alternatives exist.",
    content: `An estimated 14,000 tonnes of sunscreen end up in the ocean every year. While protecting our skin from UV radiation is essential, certain sunscreen ingredients are causing serious harm to coral reefs — ecosystems that support 25% of all marine life.

## The Problem Chemicals

Two ingredients have drawn particular scientific attention: oxybenzone (BP-3) and octinoxate (ethylhexyl methoxycinnamate). Research published in the journal Archives of Environmental Contamination and Toxicology showed that oxybenzone can cause coral bleaching at concentrations as low as 62 parts per trillion.

These chemicals don't just bleach coral — they damage coral DNA, deform larvae, and disrupt reproduction. Young coral is particularly vulnerable, with studies showing that oxybenzone can induce coral larvae to prematurely encase themselves in their own skeleton, effectively killing them.

## Scale of the Issue

Popular tourist beaches can see sunscreen concentrations thousands of times above the threshold for coral damage. In Hawaii's Hanauma Bay, an estimated 190 kg of sunscreen enters the water daily during peak season.

The problem extends beyond beaches. Sunscreen washes off in showers and enters wastewater systems, eventually reaching coastal waters through treatment plant discharge.

## Reef-Safe Alternatives

Mineral sunscreens using zinc oxide or titanium dioxide sit on top of the skin rather than being absorbed, and are generally considered safer for marine life. Look for "reef-safe" or "reef-friendly" labels, though be aware these terms aren't yet regulated in most countries.

Physical sun protection — hats, rash guards, shade — remains the most marine-friendly option.

## Legislative Action

Hawaii became the first US state to ban oxybenzone and octinoxate sunscreens in 2021. Palau, the US Virgin Islands, and Key West have followed. The EU is reviewing the safety of several UV filters under its chemicals strategy.

## Beyond Sunscreen

While sunscreen is a visible issue, it's important to remember it's just one of many chemical threats to coral reefs. Climate change, ocean acidification, agricultural runoff, and overfishing all play larger roles. Addressing the full picture is what the CONTRAST project is all about.`,
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1200&q=80",
    tag: "Marine Life",
    date: "2026-03-11",
    readTime: "5 min",
    author: "CONTRAST Project",
  },
  {
    slug: "pharmaceuticals-in-the-sea",
    title: "Pharmaceuticals in the Sea: An Unintended Experiment",
    description:
      "How medicines we take end up in the ocean and what effects they have on marine organisms.",
    content: `The pharmaceuticals we rely on for health are conducting an unintended experiment on marine ecosystems. From antidepressants to painkillers, our medicines are finding their way into the ocean — with consequences we're only beginning to understand.

## How Medicines Reach the Sea

When we take medication, our bodies metabolise only a fraction. The rest is excreted and enters the sewage system. Wastewater treatment plants remove some pharmaceutical residues, but many pass through intact. Unused medicines flushed down toilets add to the problem.

Veterinary medicines from agriculture enter waterways through runoff. Aquaculture — fish farming — introduces antibiotics and antiparasitics directly into marine environments.

## Effects on Marine Life

The effects are often subtle but significant. Antidepressants (SSRIs) at environmental concentrations make shrimp swim towards light rather than away from it — a behaviour change that makes them more likely to be eaten by predators. Anti-anxiety drugs make fish bolder and less social, disrupting natural behaviours critical for survival.

Anti-inflammatory drugs like diclofenac have been linked to organ damage in fish. Contraceptive hormones cause feminisation of male fish. Antibiotics in the environment contribute to antimicrobial resistance — one of the biggest threats to global public health.

## The Mixture Problem

Marine organisms encounter not one pharmaceutical but dozens simultaneously. These cocktails can produce unpredictable effects. A combination of drugs that are individually harmless at environmental concentrations can become toxic together.

## Solutions

Green pharmacy — designing drugs that break down more easily in the environment — is an emerging field. Better wastewater treatment is essential. Take-back schemes for unused medicines prevent them entering the sewage system.

As individuals, we can return unused medicines to pharmacies, never flush them, and support investment in advanced wastewater treatment.`,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80",
    tag: "Pharmaceuticals",
    date: "2026-03-13",
    readTime: "5 min",
    author: "CONTRAST Project",
  },
  {
    slug: "what-is-biomonitoring",
    title: "What Is Biomonitoring? Using Life to Measure Pollution",
    description:
      "How scientists use living organisms as early warning systems for chemical contamination in marine environments.",
    content: `Rather than just measuring chemicals in water samples, scientists increasingly use living organisms themselves as pollution detectors. This approach — biomonitoring — provides a more complete picture of how contaminants affect real ecosystems.

## The Concept

Traditional chemical monitoring tells us what's in the water at a single point in time. But organisms integrate exposure over days, weeks, or months, accumulating chemicals in their tissues. By studying these organisms, we can understand not just what chemicals are present, but what biological effects they're having.

## Sentinel Species

Mussels are the quintessential biomonitor. As filter feeders, they process vast quantities of water and accumulate pollutants in their tissues. The "Mussel Watch" programme, running since the 1980s, uses mussels to track pollution trends globally.

Fish are monitored for biomarkers — measurable biological responses to chemical exposure. Vitellogenin, an egg yolk protein normally found only in female fish, appears in males exposed to oestrogenic chemicals, serving as a clear indicator of endocrine disruption.

Seabirds and marine mammals, as top predators, reveal the cumulative burden of persistent pollutants through biomagnification.

## Modern Biomonitoring

The CONTRAST project is advancing biomonitoring with cutting-edge techniques. Environmental DNA (eDNA) analysis can detect species and assess ecosystem health from water samples alone. "Omics" technologies — genomics, proteomics, metabolomics — reveal how organisms respond to pollutants at the molecular level.

In silico models use computer simulations to predict how chemicals will behave in organisms, reducing the need for animal testing while expanding our understanding.

## Why It Matters

Biomonitoring bridges the gap between chemistry and ecology. A chemical might be present in water, but is it actually affecting life? Biomonitoring answers that question, helping policymakers set meaningful environmental standards based on real biological outcomes.

## Citizen Science

You can contribute to biomonitoring efforts. Beach clean surveys, water quality testing kits, and species monitoring apps all generate valuable data. The more eyes on our coastlines, the better we can protect them.`,
    image: "https://images.unsplash.com/photo-1530053969600-caed2596d242?w=1200&q=80",
    tag: "Science",
    date: "2026-03-15",
    readTime: "5 min",
    author: "CONTRAST Project",
  },
  {
    slug: "antifouling-paints-and-marine-ecosystems",
    title: "Antifouling Paints: Protecting Ships, Harming Seas",
    description:
      "The environmental cost of chemicals used to keep ship hulls clean and the search for greener alternatives.",
    content: `Barnacles, algae, and mussels love attaching themselves to ship hulls. This biofouling increases drag, fuel consumption, and greenhouse gas emissions. Antifouling paints prevent this — but at a significant environmental cost.

## A Toxic History

Tributyltin (TBT), once the most effective antifouling agent, caused devastating environmental damage. It was found to cause imposex in sea snails — females developing male reproductive organs — at concentrations as low as 1 nanogram per litre. Entire populations of dog whelks were wiped out near busy shipping lanes.

TBT was globally banned by the International Maritime Organisation in 2008, but its legacy persists. TBT remains in harbour sediments, continuing to leach into the water column decades later.

## Current Alternatives

Today's antifouling paints typically use copper-based biocides. While less acutely toxic than TBT, copper accumulates in harbour sediments and is toxic to many marine organisms at elevated concentrations. Some marinas now exceed copper environmental quality standards.

Booster biocides — additional chemicals like Irgarol, diuron, and zinc pyrithione — are added to enhance effectiveness. Several of these are now flagged as CECs, with emerging evidence of environmental harm.

## The Innovation Challenge

The shipping industry needs solutions that prevent biofouling without poisoning the sea. Promising alternatives include:

- **Foul-release coatings** — ultra-smooth silicone surfaces that organisms can't grip
- **Biomimetic surfaces** — textures inspired by shark skin or dolphin skin
- **UV-based systems** — LED arrays that prevent settlement
- **Ultrasonic devices** — sound waves that deter organisms

## The Bigger Picture

Biofouling isn't just an environmental issue — it's a biosecurity one. Organisms attached to hulls can be transported across oceans, introducing invasive species to new environments. Finding effective, non-toxic antifouling solutions addresses multiple challenges simultaneously.`,
    image: "https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?w=1200&q=80",
    tag: "Marine Life",
    date: "2026-03-17",
    readTime: "5 min",
    author: "CONTRAST Project",
  },
  {
    slug: "the-food-chain-connection",
    title: "The Food Chain Connection: From Plankton to Plate",
    description:
      "How contaminants accumulate and concentrate as they move up the marine food chain — and eventually reach us.",
    content: `A chemical released into the ocean at barely detectable levels can end up on your dinner plate at concentrations millions of times higher. This process — biomagnification — is one of the most important concepts in understanding how CECs affect both ecosystems and human health.

## Bioaccumulation vs Biomagnification

Bioaccumulation occurs when an organism absorbs a chemical faster than it can break it down or excrete it. The chemical builds up in tissues over the organism's lifetime.

Biomagnification takes this further. When a predator eats many contaminated prey items, it absorbs all of their accumulated chemicals. Each step up the food chain concentrates the pollutant further.

## A Real-World Example

Consider mercury, one of the best-studied biomagnifying pollutants. Bacteria in ocean sediments convert mercury to methylmercury. Phytoplankton absorb it. Zooplankton eat the phytoplankton. Small fish eat the zooplankton. Larger fish eat the smaller fish. A tuna at the top of the chain can contain mercury at concentrations 10 million times higher than the surrounding seawater.

The same process occurs with PCBs, PFAS, flame retardants, and many other persistent organic pollutants.

## Implications for Seafood

This is why dietary advice often includes limits on consumption of large predatory fish like tuna, swordfish, and shark — particularly for pregnant women and children. It's also why monitoring programmes focus on top predators as indicators of ocean contamination.

## The CEC Dimension

Many CECs are lipophilic (fat-soluble) and persistent — exactly the properties that lead to biomagnification. As new chemicals enter the ocean, understanding their potential for biomagnification is crucial for predicting ecological and health risks.

## What You Can Do

Vary your seafood choices, favour smaller species lower on the food chain, and check local advisories. Support sustainable fisheries and ocean protection policies that address the root causes of chemical pollution.`,
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1200&q=80",
    tag: "Food Chain",
    date: "2026-03-19",
    readTime: "5 min",
    author: "CONTRAST Project",
  },
  {
    slug: "climate-change-and-ocean-pollutants",
    title: "Climate Change and Ocean Pollutants: A Double Threat",
    description:
      "How rising temperatures and ocean acidification interact with chemical pollution to create compounding risks.",
    content: `Climate change and chemical pollution are often discussed separately, but in the ocean they interact in ways that amplify both problems. Warming waters, acidification, and changing currents are altering how pollutants behave — with potentially devastating consequences.

## Temperature and Toxicity

As water temperatures rise, the toxicity of many chemicals increases. Marine organisms under heat stress are also more vulnerable to pollutant exposure — their detoxification systems are already working overtime. The combination can push species past tipping points that neither stressor would reach alone.

## Melting Ice, Releasing Pollutants

Decades of persistent organic pollutants have accumulated in Arctic and Antarctic ice. As climate change accelerates ice melt, these stored chemicals are being released back into the ocean in a pulse of contamination. Legacy pollutants banned years ago — like DDT and PCBs — are getting a second life.

Permafrost thaw is releasing mercury that has been locked away for thousands of years, adding to the burden on Arctic marine ecosystems.

## Ocean Acidification

The ocean absorbs about 30% of human CO₂ emissions, making it more acidic. This acidification can change the speciation (chemical form) of metals, potentially making them more bioavailable and toxic. It also stresses organisms like corals and shellfish, reducing their resilience to chemical exposure.

## Changing Currents

Climate-driven changes in ocean circulation patterns are redistributing pollutants. Chemicals that were confined to certain regions may spread to previously clean areas. Upwelling patterns that bring nutrients to surface waters can also bring contaminants from the deep.

## The Research Challenge

Understanding these interactions requires interdisciplinary research combining climate science, chemistry, and marine biology. The CONTRAST project is contributing to this effort, studying how climate variables modify the effects of CECs on marine organisms.

## A Unified Response

Addressing climate change and chemical pollution together — rather than in silos — is essential. Reducing fossil fuel use, for example, reduces both greenhouse gas emissions and the release of pollutants from combustion. A circular economy approach addresses both plastic pollution and carbon emissions.`,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
    tag: "Climate",
    date: "2026-03-21",
    readTime: "6 min",
    author: "CONTRAST Project",
  },
  {
    slug: "in-silico-testing-future-of-safety",
    title: "In Silico Testing: The Computer-Powered Future of Chemical Safety",
    description:
      "How computer models are revolutionising our ability to predict the environmental effects of chemicals without animal testing.",
    content: `There are over 350,000 chemicals registered for commercial use globally, but only a fraction have been thoroughly tested for environmental safety. Traditional testing — exposing organisms to chemicals in laboratories — is slow, expensive, and raises ethical concerns. In silico testing offers a transformative alternative.

## What Is In Silico Testing?

"In silico" means "in silicon" — a reference to computer chips. In silico testing uses computational models to predict how chemicals will behave in the environment and interact with biological systems. It's the digital counterpart to in vitro (test tube) and in vivo (living organism) testing.

## How It Works

In silico approaches include:

- **QSAR models** (Quantitative Structure-Activity Relationships) — predicting a chemical's toxicity based on its molecular structure
- **Molecular docking** — simulating how a chemical binds to biological receptors
- **Physiologically-based pharmacokinetic (PBPK) models** — predicting how chemicals distribute through an organism's body
- **Ecosystem models** — simulating how chemicals move through food webs and environments

These models draw on vast databases of existing experimental data, using machine learning and AI to identify patterns and make predictions for untested chemicals.

## Advantages

Speed is the biggest advantage. Testing a single chemical in the laboratory can take years and cost millions. In silico screening can evaluate thousands of chemicals in days. This is crucial given the enormous number of chemicals in commerce that haven't been assessed.

The approach also reduces animal testing — an increasingly important ethical and regulatory consideration. The EU's REACH regulation actively encourages the use of computational methods.

## The CONTRAST Contribution

CONTRAST researchers are developing in silico tools specifically for predicting the effects of CECs on marine organisms. These models account for the unique challenges of the marine environment — species that don't have standard test protocols, complex exposure scenarios, and mixture effects.

## Limitations and the Future

In silico models are powerful but not perfect. They require high-quality data to train on, and novel chemical structures may fall outside their predictive domain. The future lies in integrating in silico with in vitro and targeted in vivo testing — a "tiered" approach that maximises information while minimising cost and animal use.`,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    tag: "Technology",
    date: "2026-03-23",
    readTime: "6 min",
    author: "CONTRAST Project",
  },
  {
    slug: "microplastic-fibres-from-your-wardrobe",
    title: "Microplastic Fibres: The Pollution Hiding in Your Wardrobe",
    description:
      "How synthetic clothing is one of the largest sources of microplastic pollution in the ocean.",
    content: `Your fleece jacket, yoga pants, and polyester shirt have something in common beyond comfort — they're shedding thousands of microscopic plastic fibres every time they're washed. Textile microplastics are now recognised as one of the most significant sources of microplastic pollution entering the ocean.

## The Scale

A single wash cycle can release between 700,000 and 12 million microplastic fibres, depending on the garment type, age, and washing conditions. Globally, an estimated 500,000 tonnes of microplastic fibres enter the ocean from textile washing every year — equivalent to 50 billion plastic bottles.

## Why Textiles?

Synthetic fabrics — polyester, nylon, acrylic, and elastane — now make up over 60% of all clothing produced worldwide. These materials are essentially plastic. The fibres are thin (typically 10–30 micrometres in diameter) and light, making them difficult to capture in wastewater treatment.

Older, more worn garments shed more fibres. Higher wash temperatures, longer cycles, and more aggressive detergents increase shedding. Front-loading machines produce fewer fibres than top-loaders.

## Environmental Impact

Textile microfibres are the most common type of microplastic found in marine environments. They've been identified in deep-sea sediments, Arctic ice, and marine organisms from zooplankton to fish. Their thin, elongated shape may make them particularly harmful — research suggests fibres cause more physical damage to organisms than spherical microplastics.

Fibres also carry chemical additives — dyes, flame retardants, and finishing agents — that can leach into the environment and organisms.

## Solutions

- **Microplastic-catching laundry bags** (like the Guppyfriend) can capture 80–90% of fibres
- **External washing machine filters** are even more effective and are now mandatory in France
- **Choosing natural fibres** — cotton, wool, linen — reduces shedding
- **Washing less frequently** at lower temperatures with liquid detergent helps
- **Designing better fabrics** — manufacturers are developing low-shedding synthetic textiles

## The Policy Landscape

France now requires microplastic filters on all new washing machines. The EU is considering similar measures. Extended producer responsibility schemes could make fashion brands accountable for the microplastic pollution their products cause.`,
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80",
    tag: "Microplastics",
    date: "2026-03-25",
    readTime: "5 min",
    author: "CONTRAST Project",
  },
  {
    slug: "citizen-science-and-ocean-health",
    title: "Citizen Science: How You Can Help Monitor Ocean Health",
    description:
      "Practical ways ordinary people are contributing to marine pollution research and making a real difference.",
    content: `You don't need a PhD to contribute to ocean science. Citizen science projects around the world are harnessing the power of everyday people to monitor pollution, track marine life, and generate data that shapes policy. And the contributions are genuinely valuable.

## What Is Citizen Science?

Citizen science involves members of the public participating in scientific research — collecting data, making observations, or analysing information. In marine science, this can range from beach litter surveys to water quality monitoring and species identification.

## Making a Real Impact

The Marine Conservation Society's Great British Beach Clean has run for over 30 years, generating the UK's longest-running dataset on beach litter. This data has directly influenced policy — it was instrumental in the campaign for England's plastic bag charge and the ban on microbeads.

Surfers Against Sewage's water quality alerts, powered by citizen reports, have pushed water companies to reduce sewage discharges. Bird survey data from volunteers has revealed the impact of plastic ingestion on seabird populations.

## How to Get Involved

- **Beach cleans and litter surveys** — organised events or simply recording what you find on your local beach using apps like Marine Debris Tracker
- **Water quality testing** — affordable test kits can measure basic parameters; some projects provide more advanced equipment
- **Species monitoring** — apps like iNaturalist let you photograph and identify marine species, contributing to biodiversity databases
- **Nurdle hunts** — searching for plastic pellets on beaches helps map industrial plastic pollution
- **Reporting pollution incidents** — documenting and reporting sewage discharges, oil spills, or unusual events

## The Data Matters

Citizen science data fills gaps that professional monitoring can't cover — nobody can be everywhere all the time. When standardised and quality-controlled, citizen data is published in scientific journals and used by government agencies.

## Getting Schools Involved

A New Formula's educational resources include activities designed to involve students in real scientific data collection. Engaging young people in citizen science builds scientific literacy while generating valuable data — a genuine win-win.`,
    image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1200&q=80",
    tag: "Take Action",
    date: "2026-02-15",
    readTime: "5 min",
    author: "CONTRAST Project",
  },
  {
    slug: "the-eu-chemicals-strategy",
    title: "The EU Chemicals Strategy: What It Means for Our Oceans",
    description:
      "How European policy is evolving to address the chemical pollution crisis and protect marine environments.",
    content: `The European Union is undertaking the most ambitious overhaul of chemicals regulation in a generation. The Chemicals Strategy for Sustainability, part of the European Green Deal, has far-reaching implications for ocean health.

## The Current Landscape

The EU's existing chemicals framework — REACH (Registration, Evaluation, Authorisation, and Restriction of Chemicals) — was groundbreaking when introduced in 2006. But it has limitations. Assessment is slow, mixture effects aren't adequately addressed, and many chemicals of concern remain on the market while regulatory processes grind forward.

## Key Proposals

The strategy introduces several important principles:

- **One substance, one assessment** — streamlining how chemicals are evaluated across different regulations
- **Mixture assessment factor** — for the first time, accounting for the fact that we're exposed to multiple chemicals simultaneously
- **Essential use concept** — restricting the most harmful chemicals to uses where no safer alternative exists
- **Safe and sustainable by design** — building environmental safety into chemical development from the start

## PFAS Restriction

The most high-profile proposal is a near-universal restriction on PFAS. Five EU member states have proposed banning all non-essential PFAS uses — potentially the largest chemicals restriction in history, affecting thousands of products.

## What It Means for Oceans

If implemented fully, the strategy would significantly reduce the flow of harmful chemicals into marine environments. Better regulation of pharmaceuticals, pesticides, and industrial chemicals would address CECs at source — far more effective than trying to clean them up after release.

## The CONTRAST Connection

CONTRAST research directly supports EU policy development. By generating evidence on how CECs affect marine ecosystems, the project helps policymakers set science-based environmental quality standards and prioritise chemicals for regulatory action.

## Challenges Ahead

Industry resistance, implementation complexity, and the sheer number of chemicals in commerce make this an enormous undertaking. But the direction is clear: the era of treating the environment as an unlimited chemical sink is ending.`,
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&q=80",
    tag: "Policy",
    date: "2026-02-20",
    readTime: "6 min",
    author: "CONTRAST Project",
  },
  {
    slug: "flame-retardants-in-our-seas",
    title: "Flame Retardants: From Your Sofa to the Sea",
    description:
      "How chemicals designed to prevent fires are becoming persistent ocean pollutants.",
    content: `The sofa you sit on, the electronics you use, and the car you drive likely contain flame retardant chemicals. Designed to slow the spread of fire, these substances are now found throughout the marine environment — from coastal sediments to the blubber of deep-diving whales.

## What Are Flame Retardants?

Flame retardants are chemicals added to materials to make them less flammable. They're found in furniture foam, textiles, electronics, building insulation, and vehicle interiors. The most common types include brominated flame retardants (BFRs), organophosphate flame retardants (OPFRs), and chlorinated paraffins.

## How They Reach the Ocean

Flame retardants leach from products throughout their lifetime. Household dust — a major exposure route for humans — eventually washes down drains. Electronic waste, often poorly recycled, releases flame retardants into soil and water. Landfill leachate carries them into groundwater and eventually to the sea.

## Environmental Persistence

Many flame retardants are persistent, bioaccumulative, and toxic (PBT) — the trifecta of environmental concern. Polybrominated diphenyl ethers (PBDEs), though now largely banned, remain in the environment and continue to accumulate in marine food chains. They've been found in marine organisms from every ocean on Earth.

## Health and Ecological Effects

In marine mammals, flame retardants have been linked to thyroid disruption, immune suppression, and reproductive problems. Laboratory studies show developmental effects in fish. In humans, exposure has been associated with hormone disruption, neurodevelopmental effects in children, and cancer risk.

## The Replacement Problem

When harmful flame retardants are banned, they're often replaced with chemically similar alternatives — a pattern known as "regrettable substitution." The replacement may turn out to be equally harmful, but it takes years of research to demonstrate this. Better regulation needs to address entire chemical classes, not just individual substances.

## Moving Forward

Fire safety doesn't have to come at environmental cost. Better product design, inherently fire-resistant materials, and smarter building standards can reduce the need for chemical flame retardants. The EU is working on criteria for safe and sustainable alternatives.`,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
    tag: "CECs",
    date: "2026-02-25",
    readTime: "5 min",
    author: "CONTRAST Project",
  },
  {
    slug: "pesticides-and-coastal-waters",
    title: "Pesticides and Coastal Waters: The Agricultural Connection",
    description:
      "How agricultural chemicals travel from fields to the sea and their effects on marine ecosystems.",
    content: `Agriculture feeds the world, but the chemicals it relies on don't stay on the farm. Pesticides, herbicides, and fertilisers travel through soil, into rivers, and eventually reach coastal waters — where they can devastate marine ecosystems.

## The Pathway

When it rains, water flowing across treated fields carries pesticide residues into ditches, streams, and rivers. This agricultural runoff is the primary route by which pesticides enter aquatic environments. In coastal regions, these chemicals reach estuaries and the sea.

The problem is exacerbated by the timing of application. Pesticides are often applied in spring and early summer — precisely when rainfall is frequent and many marine species are in critical reproductive phases.

## Neonicotinoids: A Case Study

Neonicotinoid insecticides, widely used on crops, have drawn attention for their devastating effects on pollinators. But their impact on aquatic life is equally concerning. Studies show they are highly toxic to aquatic invertebrates at environmental concentrations — the insects, crustaceans, and worms that form the base of aquatic food chains.

Research in the Netherlands found that neonicotinoid concentrations in surface water correlated directly with declining populations of aquatic insects, with cascading effects on the fish and birds that depend on them.

## Herbicides and Seagrass

Herbicides from agricultural and urban runoff are a major threat to seagrass meadows — vital marine habitats that store carbon, nursery fish, and stabilise sediments. The herbicide diuron, used in both agriculture and antifouling paints, inhibits photosynthesis in seagrass at concentrations commonly found in coastal waters.

Australia's Great Barrier Reef has suffered significant seagrass loss linked to herbicide-laden runoff from sugarcane and grazing land.

## Solutions

Precision agriculture — applying chemicals only where and when needed — can dramatically reduce runoff. Buffer strips of vegetation along waterways filter agricultural chemicals before they reach water. Integrated pest management reduces reliance on chemical pesticides.

At a policy level, the EU's Farm to Fork Strategy aims to reduce pesticide use by 50% by 2030. Stronger water quality monitoring and enforcement are essential to protect coastal ecosystems.`,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80",
    tag: "Pollution",
    date: "2026-02-10",
    readTime: "5 min",
    author: "CONTRAST Project",
  },
  {
    slug: "the-role-of-biomarkers",
    title: "Biomarkers: Reading the Body's Warning Signs",
    description:
      "How scientists measure biological responses to pollution at the molecular level to detect harm before it becomes visible.",
    content: `By the time pollution damage is visible — dead fish, bleached coral, algal blooms — it's often too late for effective intervention. Biomarkers offer a way to detect harm much earlier, reading the subtle molecular warning signs that organisms produce when stressed by chemicals.

## What Are Biomarkers?

A biomarker is any measurable biological response that indicates exposure to, or effects of, a pollutant. They operate at multiple levels:

- **Molecular biomarkers** — changes in gene expression, enzyme activity, or protein levels
- **Cellular biomarkers** — DNA damage, changes in cell structure
- **Physiological biomarkers** — altered immune function, hormone levels, growth rates
- **Behavioural biomarkers** — changes in feeding, swimming, or reproduction

## Key Biomarkers in Marine Science

Some biomarkers have become standard tools:

**Vitellogenin in male fish** — this egg yolk protein, normally only produced by females, indicates exposure to oestrogenic chemicals. Its presence in male fish is one of the clearest signals of endocrine disruption.

**EROD activity** — this enzyme, induced in fish liver by certain pollutants (particularly PAHs and dioxins), indicates the body's attempt to detoxify harmful chemicals.

**Acetylcholinesterase inhibition** — reduced activity of this nervous system enzyme indicates exposure to organophosphate or carbamate pesticides.

**Metallothionein levels** — elevated levels of this protein indicate exposure to heavy metals as the organism attempts to bind and neutralise them.

## The CONTRAST Approach

CONTRAST researchers are developing next-generation biomarker approaches using "omics" technologies. Rather than measuring single biomarkers, they analyse thousands of molecular changes simultaneously — creating comprehensive "fingerprints" of pollutant exposure.

This approach can detect effects at lower concentrations, distinguish between different types of pollution, and identify novel biomarkers for emerging contaminants.

## From Lab to Field

The challenge is translating laboratory biomarker knowledge to field conditions, where organisms face multiple stressors simultaneously. Temperature, salinity, food availability, and natural variation all influence biomarker responses. Distinguishing pollution effects from natural variability is an active area of research.`,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=80",
    tag: "Science",
    date: "2026-02-05",
    readTime: "6 min",
    author: "CONTRAST Project",
  },
  {
    slug: "ocean-pollution-and-biodiversity",
    title: "Ocean Pollution and Biodiversity: What We Stand to Lose",
    description:
      "The link between chemical pollution and declining marine biodiversity — and why it matters for everyone.",
    content: `The ocean covers 71% of Earth's surface and contains an estimated 2.2 million species — most still undiscovered. But marine biodiversity is declining at an alarming rate, and chemical pollution is a significant but often overlooked driver.

## The Biodiversity Crisis

The Living Planet Index shows marine vertebrate populations have declined by 49% since 1970. While overfishing, habitat destruction, and climate change are primary drivers, chemical pollution compounds these pressures — weakening organisms' ability to cope with other stressors.

## How Chemicals Reduce Biodiversity

Chemical pollution affects biodiversity through multiple pathways:

**Direct toxicity** — chemicals at high concentrations kill organisms outright. Pollution incidents like oil spills or industrial discharges can devastate local ecosystems.

**Sublethal effects** — at lower concentrations, chemicals reduce fitness without killing. Impaired reproduction, weakened immune systems, and altered behaviour all reduce population viability over time. These subtle effects are harder to detect but may be more significant at a global scale.

**Habitat degradation** — nutrient pollution causes eutrophication and dead zones. Herbicides damage seagrass and kelp forests. Acidification from absorbed CO₂ dissolves coral and shellfish.

**Food web disruption** — when key species are affected, cascading effects ripple through ecosystems. The loss of filter feeders, for example, reduces water clarity, affecting photosynthetic organisms.

## Why Biodiversity Matters

Marine biodiversity isn't just a conservation issue — it's an economic and food security one. Ocean ecosystems provide food for billions of people, regulate climate, produce oxygen, and support livelihoods. The economic value of marine ecosystem services is estimated at over $20 trillion annually.

Diverse ecosystems are more resilient to stress. As we lose species, we lose the ocean's ability to adapt to change — making every subsequent stress harder to weather.

## The Knowledge Gap

For most marine species, we simply don't know how they respond to CECs. Regulatory testing focuses on a handful of model species that may not represent the vast diversity of marine life. The CONTRAST project is working to address this, developing tools that can predict effects across species.

## What Needs to Happen

Protecting marine biodiversity requires reducing chemical inputs, expanding marine protected areas, enforcing existing regulations, and investing in research. It also requires recognising that chemical pollution, climate change, and biodiversity loss are interconnected crises that demand integrated solutions.`,
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&q=80",
    tag: "Biodiversity",
    date: "2026-01-28",
    readTime: "6 min",
    author: "CONTRAST Project",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getAdjacentPosts(slug: string) {
  const index = blogPosts.findIndex((post) => post.slug === slug);
  return {
    prev: index > 0 ? blogPosts[index - 1] : null,
    next: index < blogPosts.length - 1 ? blogPosts[index + 1] : null,
  };
}

export function getSortedPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
