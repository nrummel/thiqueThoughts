---
title: 📊 Bouldering Excellence 📊
date: 01.19.2026
draft: false
---
I have been thinking about this for quite some time, and until recently I was not quite sure how to articulate my position. Currently, I am on an extended trip with one of my best friends Austin Purdy. He is one of the best boulders in the world, and it has been so great to have him back in my day-to-day life. In large part, I love being around Austin because he views the world of Bouldering in a complimentary way to myself. We understand the world very analytically, and this perspective naturally is applied to bouldering. Not only in our own climbing, but also from a spectator's perspective. 

Specifically, we have had several conversations about:
- Who is or has been an elite boulderer
- What goes into that assessment
- Why there is debate in measuring *eliteness* in our sport

Luckily for us, people in science and mathematics think about hard questions framed this way all the time. It drives me crazy when climbers say things like "well, grades are so subjective, so you really cannot say anything" or something to that effect. If humans gave up that easily on other hard problems, then we would still be putting leaches on our body to suck the bad humors out or other godforsaken idiocy. 
# Comparing Climbers Mathematically
As with everything in my life these days, I view it (partially) through a mathematical lens 😅. Hang in there, I promise I will get right to the point. In the climbing there are many objectives. This makes it hard to directly compare achievement and climbers who have non-overlapping achievements. Comparing two individual climbs or climbers is the simplest mathematic question we can ask. We want to obtain an ordering. Given climber $C^{(j)}$ and climber $C^{(k)}$, which one is better (greater)?
$$
C^{(j)} < C^{(k)}
$$
This is fundamentally a difficult question. Because both climbers $C^{(j)}$ and $C^{(k)}$ are **people**, they are not well represented by one number. The most straight forward way to see how this plays out in math is to just let each climber be represented by two numbers (wow, crazy). 

Consider this arbitrary example. Now, for the sake of simplicity say that a climber is completely represented by their redpoint grade and their flash grade. The first climber $C^{(j)}$ can redpoint 7A/V6 and flash 6C+/V5, and the second climber $C^{(j)}$ can redpoint 7A+/V7 but only can flash 6C/V4. If we only consider these two aspects of the climbers, we can represent them mathematically with the vectors  $C^{(j)} = (6,5)$ and $C^{(k)}=(7,4)$. Now ask yourself, is  $C^{(j)} < C^{(k)}$ or is $C^{(j)} > C^{(k)}$? The answer depends on how you *weigh* the redpoint grade and the flash grade! 

It is critical to note that the way one chooses *weigh* a climber is a **value claim**. This means that you, yes you, bring your preconceived biases, judgment, and years of experience, or lack of, influences the comparison. 

Let's call your *weighing* function $F_\mathrm{dingus}$ (dingus is you). It takes in a climb(er) and outputs a single number by *weighing* the factors based off your judgment. After your *weights* are applied then the comparison is made easily.
$$F_\mathrm{dingus}(C^{(j)}) < F_\mathrm{dingus}(C^{(k)})$$
Notably, $C$ and $F_\mathrm{dingus}$ can be as complicated as it needs to be... By this I mean, one can consider 
- What is the grade?  How fast/slow one sends said climb? How good were the conditions when the climb was sent? Was the climb in their style? The list can go on and on...

Of course, I have my own personal way I think about climbing from a more qusalitative perspective, and I think it is important to inject subjectivity and set aside computation (from time to time). But this framework gives us footing for an intelligent discussion about climbing which I feel is often lacking clarity.

>[!summary] Key Takeaway: How To Quantify Climbers
> Two separate decisions are made when judging climbers:
> - First, one defines what should be considered in their calculation $C$. This could be just the grade, but it probably should be more than just a grade. 
> - Then, one decides how to *weigh* each components with some function $F_\mathrm{dingus}$. Unfortunately, you too are dingus. 
## A Concrete Example
Is it more impressive to have spent a season establishing the first ascent of a 8B/V13 boulder or to have spent the same amount of time an energy sending a well established world-class 8C/V15? [8a.nu](https://www.8a.nu/) answers this question in a particular (and arbitrary) way. On the [website](https://www.8a.nu/ranking/bouldering?topAscents), they spell out how they judge a climber. Let's write it down in the framework that I laid out in the previous section. A boulder $x$ is essentially defined as the vector  

$$x := (\text{grade, onsight, flash, firstAscent,  secondTry})$$

where $x \in \mathcal{X}:= \bigl\{(v, o,f,a,s) \mid v \in \{4A,4A+,\cdots,9A\}, (o,f,a,s) \in \{0,1\}^4\bigr\}.$
The *weighing* function for a single boulder $f_\mathrm{8a.nu}(x)$ is defined to be

$$f_\mathrm{8a.nu}(x) := (\text{8A} \times 1000 + \Delta\times 50) + 147\times \text{onsight} + 53 \times \text{flash} + 33 \times \text{firstAscent} + 2\times \text{secondTry}.$$

To break this down for the non-mathy friends; for every grade harder you get 50 more *score points* where 8A+ is a grade harder than 8A. If it is an onsight, a flash, a first ascent, or a second try you get to sprinkle on some bonus. Furthermore, in this ranking system a climber $C_\mathrm{8a.nu}$ is valued by their top $N$ boulder scores 

$$C_\mathrm{8a.nu} := (x_1, \cdots x_N).$$

And the *weighing* function for a climber is defined as the sum of weiging functions accross the $N$ top climbs completed

$$F_\mathrm{8a.nu}(C_\mathrm{8a.nu}) := \sum_{i=1}^{N} f_\mathrm{8a.nu}(x_i).$$

The most popular ranking is based off the top ten scores $N=10$ for the most current twelve month window. 

>[!note] Side Note: How Do Grades Even Work
>But what even goes into grading a boulder? See my [[Climbing Grades|previous post]] if you are intested in fleshing that out in more detail.
## Deep Dive
Ok, I don't want to dwell on [Jens Larssen's](https://www.8a.nu/articles/user-guide-and-faq) personal weighting function because he is just another dingus, but I do think his score is *one valid* way to compare bouldering accomplishment. Furthermore, his website gamifies climbing in a way that may not be very healthy or conducive to long term progression. Also, it is worth noting that many of the best climbers currently do not log their ascents on this website anymore (which is a bummer from statistical perspective). In any case, let's use $f_\mathrm{8a.nu}$ and $F_\mathrm{8a.nu}$ as a first pass for comparing climbers throughout time. 

Lucky for you, I already did the b\*\*\*\* work and collected a lot of historical data. I looked at the top ranked 5000 climbers based off their all-time scores. Then, I computed each climber's annual score going back to 2001 if it was available. Below is plot that summarizes the high level results.
![[scoreDistAll.png]]
In each row, there are five histograms where each histogram shows the number of climbers with a respective *score*. A [Gaussian mixture model](https://en.wikipedia.org/wiki/Mixture_model) with three modes is fit to the data for each year. Basically, this provides a qualitative interpretation of the data's distribution. Also, there are vertical lines for the median and maximum scores from each year.

Notice, that during the early 00s that half of the climbers in the sample averaged less or equal to than a score of 9,000. You could interpret this as "they accomplished less than nine 8A/V11's in a year". Then as time went on more and more climbers are climbing hard, but the median *score* hovers near this 9,000 mark. Of course, one should note that the website itself was gaining popularity throughout this time window, so there we likely more 9,000 *score* level climbers around in the early 00s. Even still, this trend is likely representative of an undeniable phenomena. The overall popularity of climbing is increasing. Viewed another way, look at the median and maximum grade plotted against time below.
![[scoreTrend.png]]
This plot is very interesting because I think it highlights something that many of us already knew to be true. If the sport progressed in the last twenty years, that progression has been very slow in terms of difficulty. Between 2005 and 2025, both the median and maximum span about five hundred *scores*, 8750-9250 and 11750-1250 respectively. There is a slight upward trend, but it honestly is the progression quite uninspiring. This could be an artifact of this dataset, perhaps the best climbers are not represented in this sample. High profile names like Shawn Raboutou and many Japanese climbers refuse to log on this website. This could make the lack of a trend untrustworthy. 
>[!note] Side Note: Expectations For Pro's
>From my perspective, all professional should be forth coming with their accomplishments. A  centralized hub like 8a.nu used to serve as a form of accounabilty. Granted there were flaws in this system. 
>That being said, the social media platforms are a worse platform for fans of the sport of climbing. This is because it is impossible to get as clear of a picture of who is elite and who is not. 

In the same breath, the above plot demonstrates the sport popularity has increased dramatically in the last 25 years. At the very least, the data demonstrates that many more people are serious enough to be logging climbing in a diligent way. 
## Did Bouldering Peak in 2025?
According to the metric defined by $F_\mathrm{8a.nu}$, bouldering arguably was at its highest level 2019. While many people consider 2025 to be the best year in climbing ever, that is only true from the angle that Instagram is selling us... If one chooses to measure climbers by this *score*, then Jimmy Webb and Giuliano had a better year in 2019 than Will Bosi in 2025.

 ![[scoreDist2019.png|300]]  ![[scoreDist2025.png|300]]

If we inspect the full tick list for the top climbers in 2019 (a tie between Jimmy and Giul) and the top climber of 2025, the plot thickens further.

![[peakYearComparison.png]]

It is apparent that Will Bosi, while he may have done a 9A in 2025, he climbed far fewer boulders and established fewer new boulders as well. He actually didn't find it noteworthy to log any flashes either. Perhaps Will is climbing more climbs than he logs, but I doubt it. This data furthers my thesis that 2025 was in fact not a peak year for bouldering.

Furthermore, if we zoom into the tale of the distribution of 2025 we see: 
- **TODO MAKE NEW PLOT and continue analysis**
[[evenMore8aAnalysis|Link]] to more deep dives
To me this demonstrates that climbers are changing their behavior. Instead of trying to improve a more broad metric of 10 climbs, the new social media dominated climbing world incentivizes professional climbers to chase one or two big accomplishments each year. 

To this point, we see that the sample size of people logging their climbs on the website has decreased since 2022. This could be because competitors like Kaya have stolen market share, or perhaps Mr. Raboutou's place in the zeitgeist is so dominated, that all the young guns chose to no longer log on the platform. Both are unlikely in my opinion. Rather, I think that serious climbers have migrated their attention even more so to the big social media platform, Instagram.
# Wholistic Comparison
Now that I dragged you through some math, or you skipped it because your lazy 🙄, let's get to how I think we should compare different climbs and climbers. I grant that quantitative analysis of our sport suffers from many challenges: a lack of reliable data, ambiguity when modeling the system, and other complicating factors. In particular, the grades that climbers report may be wrong. This was discussed toughly when looking [[Climbing Grades Dirty Details#Bias|reporting bias]] in how I think we should interpret bouldering grades. 

In light of this, I think it is best to take a more qualitative approach. The incentives especially for professional climbers have become more nuanced in the past decade. The media is less of a monolith, and thus climbers rely on the algorithm and sensationalism to gain attention online. This has a direct impact on their livelihood, so it is not fair to judge the climbers too harshly for their behavior. Needless to say, it feels like grades at the highest level have seen a recent inflation. 

I liken this to tech stocks with the rise of AI. It's really hard to know if the companies are worth what market says they are... Regardless should you still probably buy the SNP 500, so you can retire and hangout with me at Herm's house. We are going to be drinking plum juice in an attempt to manifest 8A (Herm likely will still climb 8A).
![[HermMeme.gif|300]]
# Wrap Up
I concede it is challenging to understand what it means for one climb(er) to be better than another, but we as climbers love challenges. Don't immediately pigeonhole yourself before you even begin to tackle the problem. In fact, I think this is why climbing is a compelling sport to discuss. Unlike power lifting or the 100m dash, our sports have a lot to wrestle with beyond "is number higher/lower"... The complexity involved with describing our pursuit is why climbing is a compelling topic of conversation.
