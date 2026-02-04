---
title: Bouldering Excellence - An Overview
date: 2026-01-19
draft: false
---
What does it mean to be excellent in Bouldering? Until recently, I was not quite sure how to articulate my position until I went on an extended trip with my friend [Austin Purdy](https://www.instagram.com/apurdy97/?hl=en). He is one of the [best boulders](https://www.8a.nu/user/austin-purdy) in the world, and it has been so great to have him back in my day-to-day life. In large part, I love being around Austin because he views the world of Bouldering in a complimentary way to myself. We both are analytical by nature; this perspective naturally gets applied to bouldering, not only in our own climbing, but also as spectators. 

Our conversation centered around a few key questions:
- Who is or has been an elite boulderer?
- What goes into making that assessment?
- How should we measure *eliteness* in our bouldering?
- Is the sport progressing? Or are climbers just changing their behavior?

To answer these questions climbing should be assessed from two angles ideally. First, exhaustively gather available data. Unfortunately, a lot of the climbing data is buried in godforsaken [podcasts](https://www.youtube.com/@testpiece) and ["Pringle paragraphs"](https://www.instagram.com/p/22V6tnnQl0/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==). Because not all the relevant information is readily available in a central hub, it is necessary to be actively engages in a broad online community to best understand the complex nature of elite bouldering. When sufficient data is accumulated, then both quantitative and qualitative analysis can be performed. I'm talking about pulling out all the stops; Real statistics, not just the high school level tools. I want the discussion to be rooted in good data analysis and legitimate rhetorical arguments.

This two pronged approach is **not unique** to climbing. In fact, I am very inspired by how much more can be said about sports like basketball. There are great commentators like [JxmyHighroller,](https://www.youtube.com/@JxmyHighroller) [MJ2KALLDAY,](https://www.youtube.com/@mj2kallday) and [Nonstop](https://www.youtube.com/@nonstop) who all take the approach I am suggesting. These commentators have a coherent discussion of basketball because good data is available, and then they are using advanced tools to look at that data. Brilliant people in sciences, mathematics, and analysts from other sports have already thought hard about how to assess excellence framed in the way I am proposing. All we need to do is modify the existing tools to suit our beautiful sport.

Climbing is not more complex, we are just not applying ourselves. It drives me crazy when climbers say things like "grades are so subjective. No one can really **say anything** meaningful". Climbing is a younger sport, and, yes, reliable data is less available. Even with these obstacles, it is my firm opinion that a much more articulate discussion is possible, and d\*mn it necessary.
****
# Preliminaries

>[!note] For My Non-Mathy Friends
> If you can't hang in there with the math for a few paragraphs, then skip to [[boulderingExcellence#Historical Analysis|the next section]]. 
>
> ![[sharmaMeme.gif|center]]

Let's get started by grounding ourselves. As with everything it is best viewed (partially) through a mathematical lens 😅. I promise I will get right to the point. Comparing two individual climbs or climbers is the simplest mathematic question one can ask. We want to obtain an [ordering](https://en.wikipedia.org/wiki/Total_order). Given climber $C^{(j)}$ and climber $C^{(k)}$, which one is better (greater)?
```math 
C^{(j)} < C^{(k)}
```
This is fundamentally a difficult question. Because both climbers $C^{(j)}$ and $C^{(k)}$ are **people**, they are not well represented by one number. Outdoor boulder differs from basketball in that all the *game* is not well defined. We do not show up to the same court and put the ball in the hoop as many times as possible. Boulders have to choose what objectives they go after, and in general they have many days to accomplish their goals. This makes it hard to directly compare climbers who have non-overlapping achievements. The most straight forward way to see how this plays out in math is to just let each climber be represented by **two numbers** instead of one. 

Consider this arbitrary example. For the sake of simplicity say that a climber is completely represented by their redpoint grade and their flash grade. The first climber $C^{(j)}$ can redpoint 7A/V6 and flash 6C+/V5, and the second climber $C^{(j)}$ can redpoint 7A+/V7 but only can flash 6C/V4. If we only consider these two aspects of the climbers, we can represent them mathematically with the vectors 

```math 
C^{(j)} = (6,5),C^{(k)}=(7,4).
```

Now ask yourself, is  $C^{(j)} < C^{(k)}$ or is $C^{(j)} > C^{(k)}$? The answer depends on how you *weigh* the redpoint grade and the flash grade! 

It is critical to note that one chooses how to *weigh* a climber. This is a **value claim**. You, **yes you**, bring your preconceived biases, judgment, and years of experience (or lack of) to the assessment. This is **unavoidable**. The presence of some subjectivity does not mean comparison is impossible; the assesment is not necessarily [ill-posed](https://en.wikipedia.org/wiki/Well-posed_problem). Instead, I urge the reader to think critically when they compare climbers or hear others make comparisons. Be thoughtful. Be precise. Be an adult.

Let's call your *weighing* function $F_\mathrm{dingus}$ (dingus is you). It takes in a climber $C$ and outputs a single number by *weighing* the factors based off your judgment. After your *weights* are applied then the comparison is made easily.

```math 
\underbrace{F_\mathrm{dingus}(C^{(j)})}_\text{score j} < \underbrace{F_\mathrm{dingus}(C^{(k)})}_\text{score k}
```

Notice, that a priori we had to choose what goes into the data representation of the climber $C$ and how to weigh the data with $F_\mathrm{dingus}$. Both $C$ and $F_\mathrm{dingus}$ can be as simple or as complicated as they need to be... For instance, one could consider $C$ to include:
- What is the highest grade a climber has completed in the last year? In their entire life?  
- Can the climber only send a few boulders in a year or can build a broad pyramid?
- How quickly can the climber send a particular grade? Is that true in all styles? 
- Does this climber send hard boulders while on short trips or do they need a lot of time?
- How good are their tactics/technique/strength?

The list of potential factors to consider in the assessment can continue on and on, and some people may consider some of the factors listed above as unimportant to measuring climbing excellence. Obviously some feel more important than others. The true discussion is how and why.

Pragmatically, it can be hard to obtain reliable data. Heck, many professional climber do not even keep a public ticklist any more, and forget obtaining accurate metadata (how many sessions, weather information, the true tactics they used, etc.)  


Even if one climbers shares most of their climbing life on the internet, many do not. Thus for the purpose of comparison, it may be pragmatic to disregard wholistic comparisons in general. 

>[!summary] Key Takeaway: How To Quantify Climbers
> Two separate decisions are made when judging climbing ability:
> - First, one defines what should be considered in their calculation $C$. This could be just a climbers highest red point grade, but basic logic demands more than that. 
> - Then, one decides how to *weigh* each components with some function $F_\mathrm{dingus}$. Unfortunately, you too are dingus. 

****
# A Familiar Example
Let's ground ourselves with an example. Is it more impressive to have spent a season establishing the first ascent of a 8B/V13 boulder or to have spent the same amount of time an energy sending a well established world-class 8C/V15? [8a.nu](https://www.8a.nu/) answers this question in a particular (and arbitrary) way. On the [website](https://www.8a.nu/ranking/bouldering?topAscents), they spell out how they judge a climber. Let's write it down in the framework laid out in the previous section. A boulder $x$ is essentially defined as a vector  

```math 
x := (\text{grade, onsight, flash, firstAscent,  secondTry})
```

where $x \in \mathcal{X}:= \bigl\{(v, o,f,a,s) \mid v \in \{4A,4A+,\cdots,9A\}, (o,f,a,s) \in \{0,1\}^4\bigr\}.$

The *weighing* function for a single boulder $f_\mathrm{8a.nu}(x)$ is defined to be

```math 
\begin{aligned}
    f_\mathrm{8a.nu}(x) :&= (\text{8A} \times 1000 + \Delta\times 50) + 147\times \text{onsight} \\&+ 53 \times \text{flash} + 33 \times \text{firstAscent} + 2\times \text{secondTry}.
\end{aligned}
```

To break this down for the non-mathy friends;  a climber gets 50 *score points* for every grade they climb. 8A+/V12 is a grade harder than 8A/V11, and 8A/V11 gives you 1000 score *points*. If the climber onsights, flashes, does a first ascent, or sends second try some bonus points are sprinkled on top. Notably, the points are not adjusted to consider several factors:
- Is the boulder particularly scary?
- Did the boulder take multiple sessions or just one?
- What does second try really mean? (Second pull on anywhere or just from the start... God is watching you 👀)
- Many, many more factors could be listed...
Furthermore, in this ranking system a climber $C_\mathrm{8a.nu}$ is valued by the top $N$ boulder scores 

```math 
C_\mathrm{8a.nu} := (x_1, \cdots x_N)
```

for a particular time interval, and the *weighing* function for a climber is defined as the sum of *weighing* function applied to the top $N$ climbs completed

```math
F_\mathrm{8a.nu}(C_\mathrm{8a.nu}) := \sum_{i=1}^{N} f_\mathrm{8a.nu}(x_i).
```

The most popular ranking is based off the top ten scores $N=10$ for the most recent twelve month window. 

>[!note] Side Note: How Do Grades Even Work
>But what even goes into grading a boulder? See my [[gradesOverview|previous post]] if you are intested in fleshing that out in more detail.

****
## Historical Analysis
Okay, I don't want to dwell on [Jens Larssen's](https://www.8a.nu/articles/user-guide-and-faq) personal weighting function long because he is just another dingus. Furthermore, his website gamifies climbing in a way that may not be very healthy or conducive to long term progression, but his score is *one valid* way to compare bouldering accomplishment. My hope is by giving you a taste of what can be said with my two pronged approach will get you to come back for more as I develop better statistics and analysis than those that stem from $F_\mathrm{8a.nu}$. 

Before we begin, it is worth noting that many of the best climbers currently do not log their ascents on this website anymore (which is a bummer from data availability perspective). In any case, let's use the data we have and $F_\mathrm{8a.nu}$ to glimpse what comparing climbers robustly can look like. 

Lucky for you, I already did all the b\*\*\*\* work and collected a lot of historical data. I looked at the top ranked 5,000 climbers based off their all-time scores (based off top ten ascents $N=10$). Then, I computed each climber's annual score going back to 2001 if it was available. Below is plot that summarizes the results.

![[scoreDistAll.png|center]]

In each row, there are five histograms where each histogram shows the number of climbers with a respective *score.* A [Gaussian mixture model](https://en.wikipedia.org/wiki/Mixture_model) with three modes is fit to the data for each year. Basically, this provides a deeper mathematical footing. Also, there are vertical lines for the median and maximum scores from each year.

Notice, that during the early '00s that half of the climbers in the sample averaged less or equal to than a score of 9,000. You could interpret this as "they accomplished less than nine 8A/V11's in a year". Then as time went on more and more climbers are climbing hard, but the median *score* hovers near this 9,000 mark. Of course, one should note that the website itself was gaining popularity throughout this time window, so there were likely more 9,000 *score* level climbers around in the early '00s. Even still, the data is likely representative of an undeniable trend; the overall popularity of climbing is increasing. Viewed another way, look at the median and maximum grade plotted against time below.

![[scoreTrend.png|center]]

This plot highlights something that many of us already knew to be true. If the sport progressed in the last twenty years, that progression has been very slow. Between 2005 and 2025, both the median and maximum scores span about five hundred *score points*, 8750-9250 and 11750-1250 respectively. There is a slight upward trend, but it honestly the progression uninspiring. This could be an artifact of this dataset. Perhaps the best climbers are not represented in this sample. High profile names like Shawn Raboutou and many Japanese climbers refuse to log on this website. Sprinkle some salt on these plots 🧂

>[!note] Side Note: Expectations For Pro's
>From my perspective, all professional climbers should be forth coming with their accomplishments. A centralized hub like 8a.nu used to serve as a form of accountability. Granted there were flaws in this system, but it was a step in the right direction. If climbing is your job, you should have to tell the world what you are doing when you are *at work.* It is absurd to me that sponsors allow their athletes to effectively never punch their time sheet.
> 
>Social media is not the right solution. Professional athletes in other sports vary in how much they share about their personal lives. This is fair. It is valid to not want to share every aspect of your entire life. This is why the current status quo is worse than when 8a.nu was at peak popularity. 
>
>Social media platforms do not facilitate fans of the sport to easily track the sport. They do not allow for easy or robust comparison. Whether you are casual fan of the sport of a data nerd, Instagram does not provide clear of a picture of who is elite and who is not. This is why so many people are convinced of things that are likely not true. More on that later... 
>
>Bringing it back to a basketball analogy, fans of climbing deserve to be able to *tune into the game*. Knowing what the professional climbers are sending is equivalent to getting the [box scores](https://en.wikipedia.org/wiki/Box_score). This is such a small request from fans...

>[!error]  SPONSORS
> **Please require your athletes to make their ticklists publicly available.** 
> I do not care where they log their climbs, but it is a true loss to climbing spectators everywhere when we do not get to know what is happening in the sport we love.

Returning to our analysis, the above plot demonstrates the sport popularity has increased dramatically in the last 25 years. At the very least, the data demonstrates that many more people are serious enough to be logging climbing in a diligent way. 
****
### Did Bouldering Peak in 2025?
Let's look at a possibly more complicated question and move beyond just comparing two climbers. First, let's leverage the metric defined by $F_\mathrm{8a.nu}$ to begin our analysis. According to this metric bouldering was at its highest level 2019. Recently, I have heard many people consider 2025 to be the best year in climbing ever. I argue that this is only true from the angle that Instagram is selling you. If one chooses to measure climbers by $F_\mathrm{8a.nu}$, then Jimmy Webb and Giuliano both had a better year in 2019 than Noah Wheeler or Will Bosi in 2025. 

![[scoreDist.2019.png|center]]  

![[scoreDist.2025.png|center]]

Personally, I still find Daniel Woods 2013 year to be inspiring and on par with all of these guys. This was the year when he established [*Hypnotized Minds*](https://www.youtube.com/watch?v=Jq6CaFjJJlY) among many other stout boulders. Inspecting the full tick list for Daniel in 2013, the top climbers of 2019 Jimmy and Giul, and the top climbers of 2025 Noah and Will. The plot thickens:

![[peakYearComparison.html.html]]
>[!warning] This Plot is Best on a Computer
> This plot has hover information that is best viewed with desktop browser and the aid of a mouse. When viewed on a mobile device, it is less informative. At least turn your phone sideways you animal.

While Bosi may have done a 9A in 2025, he climbed far fewer boulders and established fewer new boulders compared to the Daniel, Jimmy, or Guil. Noah apparently is an elite flasher (and also apparently doesn't log anything 8A and down unless he flashes 😂). Will didn't find it noteworthy to log any flashes at all in 2025. Perhaps Will is climbing more than he logs, but I doubt it. This data supports that 2025 was in fact not a clear peak year for bouldering.
****
### Grade Inflation?
Let's approach another interesting question, are grades really inflating? My read of the data points to a clear change in the bouldering culture, but clear grade inflation is hard to pinpoint. Clearly, professional boulderers are no longer optimizing to have the best 10 climbs on their *scorecard* according to $F_\mathrm{8a.nu}$. We saw earlier that the sample size of people logging their climbs on the website has decreased since 2022. This could be because competitors like Kaya have stolen market share, or perhaps Mr. Raboutou's place in the zeitgeist is so dominate that all the young guns have followed suite and no longer log anywhere 😪

![[shawnMeme.png|center]]

Kaya likely has gained market share for more casual climbers, but a cursory glance demonstrates that the elite climbers have not migrated (yet). Instead, professional climbers now get more attention on the platforms of today: Instagram, YouTube, etc. At a minimum, this requires one or two big grades a year. The canonical example of this behavior is Simon Lorenzi. Like clock work, since 2021 the man has pumped out at least one send of a boulder he can say is 9A/V17 (with a hiccup of *only* sending 8C+/V16 in 2024). Unfortunately, Simon does not have a tick list publicly available. I cannot provide as deep of an analysis as I would like, but a cursory glance of his [wiki](https://en.wikipedia.org/wiki/Simon_Lorenzi) demonstrates that his tick list depth leaves much to be desired when we compare it to likes of the true 🐐s.

The attention economy effects more than just the strategy of professional climbers, it also is effecting the grades people take for their ascents. Because "the algorithm" has learned that only 9A/V17 gets likes, comments, and shares, climbers have responded by inflating their grades. 

To this see this let's set aside $F_\mathrm{8a.nu}$ metric, and instead look at just the raw ascent data. Inspecting the distribution of the top 50 climbers' ascents for the years of 2020-2025, it is clear that the general behavior of this elite group has changed. 

![[top50ClimbersAscents.2020-2025.png|center]]
In particular, we see that over the last 6 years, the number of **claimed** ascents 8C/V15 and harder has skyrocketed. While the number of ascents has increased in general over the last 25 years for all the grades shown, in the last two years fewers climbs are being reports for the grads 7C/V9-8a/V11. 
![[ascentsByYear.html.html]]

>[!note] Plot is Best on Desktop Browser
> Isolate a particular grade by double clicking on it in the legend, or you can turn a grade on and off with a single click. Zoom in by clicking and dragging.

Climber are getting better, but it is more likely that climbers got a little bit better and at the same time felt the pressure of the attention economy. Climbers rationally responded to market forces by focusing on and **claiming** to send harder boulders than they used to. 

>[!error] 🌡️ Lukewarm Take
>Just because someone is telling you a boulder is a grade does not necessarily mean the boulder is that grade.

 Climbs should upgraded and downgraded. Clearly, the data supports the claim that people want us to pay attention to them. There is statistical evidence that elite boulders changed their behavior. To see this, let's use some real statistical tools.

![[arimaxGrades.2001.2023.html.html]]

>[!note] Plot is Best on Desktop Browser
>Scroll down to see plots for 8C+/V16 and 9A/V17. Hover your mouse to see confidence interval information. Zoom in by clicking and dragging.

The dots correspond to the number of ascents logged for in a given year. Each dashed line corresponds to the expected number ascents according to an [ARIMA]() model that was fit to predict the number of ascents for the grades of $y_t =(8C, 8C+, 9A)^\top$. The shading corresponds to a 99% confidence interval. These models provide a predicted mean and uncertainty information. This gives us the ability to have confidence intervals and run hypothesis tests with ease. Basically, at each time the number of ascents is modeled by a [Gaussian](https://en.wikipedia.org/wiki/Normal_distribution). The ascents logged between 2001-2023 were used to fit these models. 

Also, the ascents logged 8A+/V12 up to the grade of interest were used as [*exogenous*](https://en.wikipedia.org/wiki/Exogenous_and_endogenous_variables) data. For the 8C/V15 model in yellow, the model is aware of how many 8B+/V14, 8B/V13, and 8A+/V12 were reported in that year and the years leading up to the current year. If there was a meaniful trend in the slightly lower grades corresponding to younger climbers *moving up the ranks*, then the model would *learn* this. In essence, the model tries to account rising elite boulderers or rising level of the sport as a whole. Thus, if the sport has been *ramping* up in the years leading up to 2024 and 2025, the model would use this information to predict that more hard boulders would get completed in the coming year. 

The years of 2024 and 2025 were excluded from the fit, because the goal of this excercise was to see if their is a **statistically significant** change in the behavior of climbers, and there is a drastic change in the dynamics of the system in these years. Breaking down the hypothesis tests: 
- At a significance level of $\alpha=0.05=5\%$, the hypothesis test would reject the null hypothesis for 8C+ and 9A in both 2024 and 2025. 
- The test barely fails to reject for the number of 8C ascents logged in 2024 with $\mathbb{P}\left(\frac{x_{2024} - \bar{x}_{2024}}{s_{2024}} \geq z_{\alpha=0.05}\right) = 0.06$, and the test for 8C does fail in 2025. 
If you want to understand time series, I suggest reading [[Brockwell and Davis - 2016 - Introduction to Time Series and Forecasting.pdf#page=169|Brockwell and Davis (2016)]] and if you want to better understand mathematical statistics, I suggest reading [[Corcoran - The Simple and Inﬁnite Joy of Mathematical Statist.pdf|Corcoran (2022)]]

>[!summary] Take Away : Climbers certainly have changed their behavior; Grade inflation is possible
>There is statistically significant evidence that climbers behavior changed in 2024 and 2025. This could mean they are just allocating their time differently, and elite boulderers are prioritizing climbing more 8C, 8C+, 9A boulders than ever before. Because the number of 8B and 8B+ did not go down during this time, the idea that they are just allocating their time differently raises my eyebrows. More likely, the grades are inflated.

---
### A Cry in the Darkness: Consensus 

>[!note] It's in Da Bible
>I'm usually note on to pull together the Judeo-Christian philosophy, math, and climbing all in the same breath, but y'all pagans scared Jesus into me.
>**Proverbs 12:22a**
><center>Lying lips are an abomination</center>
>
> **Jeremiah 13:17**
> <center>"But if you do not listen, I will weep in secret because of your pride. My eyes will overflow with tears, because the flock has been taken captive"</center>

Unfortunately, there are currently not incentives to build a true consensus on grades. Anecdotally, there is a notable Swiss climber who gets paid bonuses for every first ascent 8C and harder he establishes. Beyond this example, just look at peoples scorecards on 8a.nu or read a few Instagram captions. People love to say "this climb is hard/soft". In private conversations, people are usually much more forth coming with their opinions on grades. I argue people should strive to be open and honest **on** the internet as well. Downgrade when appropriate, upgrade when appropriate (even if the [pros](https://youtu.be/Z7kmVhxaTVc?si=I7aVoniApC26MGhh&t=3907) won't). I am a firm believe that both sandbagging and candy-bagging do a disservice to the sport. 

>[!error] Hot Take: Grade Dishonesty is Bad Up and Down
> In general, unc's think it makes them tough to take harder grades, but this likely comes from a place of personal insecurity as they age. Often they only really do this at grades that don't effect their ego but just other peoples egos... This is petty. 
> 
> ![[theGreyMeme.png]]
> 
> While young guns generally take higher grades because they want to be in the big leagues already, but they likely have years of grinding ahead of them.
> 
> ![[exodiaMeme.png]]
> 
> ![[trafficMeme.png]]
> 
>I sympathize with both tendencies, and the stated age related generalizations are not always true. Tautologically, we know that lying is dishonest. I implore you to be aware of your tendencies whatever they might be. 

I liken this grade inflation to the current state of tech stocks with the rise of AI. It's really hard to know if the companies are worth what market says they are... but it stands to reason that many are overvalued. In the same way, the data and my gut instinct tell me grades have been inflating. The analogy breaks down quickly, you should still probably buy the SNP 500. That way we can retire and hangout at Herm's house. When I'm 65, I'll be in his basement drinking plum juice watching 100 year old Herm stilling climbing 8A/V11.

![[HermMeme.gif|center]]

# Closing Remarks
Now that I dragged you through some math and a sermon, or you skipped it because your lazy 🙄, let's close with a brief overview. I grant that quantitative analysis of our sport suffers from many challenges: a lack of reliable data, ambiguity when modeling the system, and other complicating factors. In particular, the grades that climbers report may be wrong. This was discussed previously in the discussion of [[gradesDirtyDetails#Bias|reporting bias]] effecting bouldering grades. 

I concede it is challenging to understand what it means to be excellent in climbing. I implore everyone to not immediately pigeonhole the discussion before we even start. The complexity of our sport is why climbing is such a compelling topic. Unlike power lifting or the 100m dash, our sport has a lot to more unpack beyond "number is higher/lower". The complexity involved with describing our pursuit is why climbing is a compelling topic of conversation.

>[!tip] Acknowledgements
> A huge shoutout to all my prereaders/reviewers: Austin Purdy, Paige Witter, Ethan Rummel, and Sam Struthers. The clean copy award goes to them.

>[!note] Side Note: I Made **EVEN MORE** plots
>If you want see more look in the [[appendixBoulderingExcellence|appendix]]. There is no further discussion, so you will have to make up your own mind on what they mean...