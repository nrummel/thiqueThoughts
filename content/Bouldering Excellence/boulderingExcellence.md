---
title: Bouldering Excellence - An Overview
date: 2026-01-19
draft: false
---
I have been thinking about this for quite some time, and until recently I was not quite sure how to articulate my position. Currently, I am on an extended trip with one of my best friends [Austin Purdy](https://www.instagram.com/apurdy97/?hl=en). He is one of the [best boulders](https://www.8a.nu/user/austin-purdy) in the world, and it has been so great to have him back in my day-to-day life. In large part, I love being around Austin because he views the world of Bouldering in a complimentary way to myself. We both are analytical by nature; this perspective naturally gets applied to bouldering, not only in our own climbing, but also from as spectators. 

Here, I want to focus on the following:
- Who is or has been an elite boulderer?
- What goes into making that assessment?
- How should we measure *eliteness* in our bouldering?
- Is the sport progressing? Or are climber just changing their behavior?

Ideally, we should assess climbing from two angles. First, we should use data when accurate measurements are available. In this domain, I think we should pull out all the stops and do real statistics, not just use high school level tools. When the reliable data is exhausted, then a more qualitative approach is necessary. This may require us to listen to godforsaken [podcasts](https://www.youtube.com/@testpiece) or read ["Pringle paragraphs"](https://www.instagram.com/p/22V6tnnQl0/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==) to better understand the complexity of the sport. 

This two pronged approach is **not unique** to climbing. In fact, I am very inspired by how much more people can say about sports like basketball. There are great commentators like [JxmyHighroller](https://www.youtube.com/@JxmyHighroller) , [MJ2KALLDAY](https://www.youtube.com/@mj2kallday), and [Nonstop](https://www.youtube.com/@nonstop) who all take the approach I am suggesting. 

It drives me crazy when climbers say things like "well, grades are so subjective, so one really **cannot say anything** meaningful". Climbing is a younger sport, and, yes, reliable data is less available. Even with these obstacles, it is my firm opinion that we can have a much more articulate discussion.

Luckily for us, people in sciences, mathematics, and analysts from other sports have already thought hard about how to assess excellence framed in the way I am proposing. All we need to do is modify the existing tools to suit our beautiful sport.****
# Preliminaries

>[!note] For My Non-Mathy Friends
> If you can't hang in there with the math for a few paragraphs, then skip to [[boulderingExcellence#Historical Analysis|the next section]]. 

Let's get started by grounding ourselves. As with everything it is best viewed (partially) through a mathematical lens 😅. Hang in there, I promise I will get right to the point. Comparing two individual climbs or climbers is the simplest mathematic question one can ask. We want to obtain an [ordering](https://en.wikipedia.org/wiki/Total_order). Given climber $C^{(j)}$ and climber $C^{(k)}$, which one is better (greater)?
$$C^{(j)} < C^{(k)}$$
This is fundamentally a difficult question. Because both climbers $C^{(j)}$ and $C^{(k)}$ are **people**, they are not well represented by one number. In the climbing there are many so objectives. This makes it hard to directly compare climbers who have non-overlapping achievements. The most straight forward way to see how this plays out in math is to just let each climber be represented by **two numbers** instead of one. 

Consider this arbitrary example. Now, for the sake of simplicity say that a climber is completely represented by their redpoint grade and their flash grade. The first climber $C^{(j)}$ can redpoint 7A/V6 and flash 6C+/V5, and the second climber $C^{(j)}$ can redpoint 7A+/V7 but only can flash 6C/V4. If we only consider these two aspects of the climbers, we can represent them mathematically with the vectors 

$$C^{(j)} = (6,5),C^{(k)}=(7,4).$$

Now ask yourself, is  $C^{(j)} < C^{(k)}$ or is $C^{(j)} > C^{(k)}$? The answer depends on how you *weigh* the redpoint grade and the flash grade! 

It is critical to note that the way one chooses *weigh* a climber is a **value claim**. This means that you, **yes you**, bring your preconceived biases, judgment, and years of experience (or lack of). This is **unavoidable**. The presence of some subjectivity does not mean comparison is impossible; this task is not necessarily [ill-posed](https://en.wikipedia.org/wiki/Well-posed_problem). Instead, I urge the reader to think critically when they compare climbers or hear others make comparisons. Be thoughtful. Be precise. Be an adult.

Let's call your *weighing* function $F_\mathrm{dingus}$ (dingus is you). It takes in a climber $C$ and outputs a single number by *weighing* the factors based off your judgment. After your *weights* are applied then the comparison is made easily.

$$\underbrace{F_\mathrm{dingus}(C^{(j)})}_\text{score j} < \underbrace{F_\mathrm{dingus}(C^{(k)})}_\text{score k}$$

Notice, that a priori we had to choose what goes into the data representation of the climber $C$ and how to weigh the data with $F_\mathrm{dingus}$. Both $C$ and $F_\mathrm{dingus}$ can be as simple or complicated as they need to be... For instance, one could consider $C$ to include:
- What is the highest grade a climber has completed in the last year? In their entire life?  
- How quickly can the climber send a particular grade? Is that true in all styles? 
- Does this climber send hard boulders while on short trips or do they need a lot of time?
- How good are their tactics/technique/strength?

The list of potential factors to consider in our assessment can continue on and on, and some people may consider some of the factors listed above as unimportant to measuring climbing excellence. Obviously some factors feel more important than others. The true discussion is how and why.

Pragmatically, it can be hard to obtain reliable data to consider these potential factors can be impossible. Even if a climbers shares most of their climbing life on the internet. Many do not. Thus for the purpose of comparison, it may be reasonable to disregard more wholistic comparisons in general. 

>[!summary] Key Takeaway: How To Quantify Climbers
> Two separate decisions are made when judging climbing ability:
> - First, one defines what should be considered in their calculation $C$. This could be just a climbers highest red point grade, but basic logic demands more than that. 
> - Then, one decides how to *weigh* each components with some function $F_\mathrm{dingus}$. Unfortunately, you too are dingus. 
# A Familiar Example
Let's ground ourselves with an example. Is it more impressive to have spent a season establishing the first ascent of a 8B/V13 boulder or to have spent the same amount of time an energy sending a well established world-class 8C/V15? [8a.nu](https://www.8a.nu/) answers this question in a particular (and arbitrary) way. On the [website](https://www.8a.nu/ranking/bouldering?topAscents), they spell out how they judge a climber. Let's write it down in the framework that I laid out in the previous section. A boulder $x$ is essentially defined as the vector  

$$x := (\text{grade, onsight, flash, firstAscent,  secondTry})$$

where $x \in \mathcal{X}:= \bigl\{(v, o,f,a,s) \mid v \in \{4A,4A+,\cdots,9A\}, (o,f,a,s) \in \{0,1\}^4\bigr\}.$
The *weighing* function for a single boulder $f_\mathrm{8a.nu}(x)$ is defined to be

$$f_\mathrm{8a.nu}(x) := (\text{8A} \times 1000 + \Delta\times 50) + 147\times \text{onsight} + 53 \times \text{flash} + 33 \times \text{firstAscent} + 2\times \text{secondTry}.$$

To break this down for the non-mathy friends; for every grade harder you get 50 more *score points* where 8A+ is a grade harder than 8A. If it is an onsight, a flash, a first ascent, or a second try you get to sprinkle on some bonus. Notably, the points are not adjusted to consider several factors:
- Is the boulder particularly scary?
- Did the boulder take you multiple sessions or just one?
- What does second try really mean? (Second pull on anywhere or just from the start... God is watching you 👀)
- etc.
Furthermore, in this ranking system a climber $C_\mathrm{8a.nu}$ is valued by their top $N$ boulder scores 

$$C_\mathrm{8a.nu} := (x_1, \cdots x_N).$$

And the *weighing* function for a climber is defined as the sum of *weighing* functions across the $N$ top climbs completed

$$F_\mathrm{8a.nu}(C_\mathrm{8a.nu}) := \sum_{i=1}^{N} f_\mathrm{8a.nu}(x_i).$$

The most popular ranking is based off the top ten scores $N=10$ for the most current twelve month window. 

>[!note] Side Note: How Do Grades Even Work
>But what even goes into grading a boulder? See my [[gradesOverview|previous post]] if you are intested in fleshing that out in more detail.
## Historical Analysis
Okay, I don't want to dwell on [Jens Larssen's](https://www.8a.nu/articles/user-guide-and-faq) personal weighting function long because he is just another dingus. Furthermore, his website gamifies climbing in a way that may not be very healthy or conducive to long term progression, but his score is *one valid* way to compare bouldering accomplishment. My hope is by giving you a taste of what can be said with my two pronged approach will get you to come back for more as I develop better statistics and analysis than those that stem from $F_\mathrm{8a.nu}$. 

Before we begin, it is worth noting that many of the best climbers currently do not log their ascents on this website anymore (which is a bummer from data availability perspective). In any case, let's use the data we have and $F_\mathrm{8a.nu}$ to glimpse what comparing climbers robustly can look like. 

Lucky for you, I already did all the b\*\*\*\* work and collected a lot of historical data. I looked at the top ranked 5000 climbers based off their all-time scores (based off top ten ascents $N=10$). Then, I computed each climber's annual score going back to 2001 if it was available. Below is plot that summarizes the results.

![[scoreDistAll.png|center]]

In each row, there are five histograms where each histogram shows the number of climbers with a respective *score.* A [Gaussian mixture model](https://en.wikipedia.org/wiki/Mixture_model) with three modes is fit to the data for each year. Basically, this provides a deeper mathematical footing. Also, there are vertical lines for the median and maximum scores from each year.

Notice, that during the early 00s that half of the climbers in the sample averaged less or equal to than a score of 9,000. You could interpret this as "they accomplished less than nine 8A/V11's in a year". Then as time went on more and more climbers are climbing hard, but the median *score* hovers near this 9,000 mark. Of course, one should note that the website itself was gaining popularity throughout this time window, so there we likely more 9,000 *score* level climbers around in the early 00s. Even still, the data is likely representative of an undeniable trend; the overall popularity of climbing is increasing. Viewed another way, look at the median and maximum grade plotted against time below.

![[scoreTrend.png|center]]

This plot is very interesting because it highlights something that many of us already knew to be true. If the sport progressed in the last twenty years, that progression has been very slow. Between 2005 and 2025, both the median and maximum span about five hundred *score points*, 8750-9250 and 11750-1250 respectively. There is a slight upward trend, but it honestly the progression uninspiring. This could be an artifact of this dataset. Perhaps the best climbers are not represented in this sample. High profile names like Shawn Raboutou and many Japanese climbers refuse to log on this website. Sprinkle some salt on these plots 🧂

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
### Did Bouldering Peak in 2025?
Let's look at a possibly more complicated question and move beyond just comparing two climbers. First, let's leverage the metric defined by $F_\mathrm{8a.nu}$ to begin our analysis. According to this metric bouldering was at its highest level 2019. Recently, I have heard many people consider 2025 to be the best year in climbing ever. I argue that this is only true from the angle that Instagram is selling you... If one chooses to measure climbers by $F_\mathrm{8a.nu}$, then Jimmy Webb and Giuliano both had a better year in 2019 than Will Bosi in 2025. 

![[scoreDist.2019.png|center]]  

![[scoreDist.2025.png|center]]

Personally, I still find Daniel Woods 2013 year to be inspiring. This was the year when he established [*Hypnotized Minds*](https://www.youtube.com/watch?v=Jq6CaFjJJlY) among many other stout boulders. Inspecting the full tick list for Daniel in 2013, the top climbers of 2019 Jimmy and Giul, and the top climbers of 2025 Noah and Will. The plot thickens...

![[index.html.html]]

>[!warning] This Plot is Best on a Computer
> This plot has hover information that is best viewed with desktop browser and the aid of a mouse. When viewed on a mobile device, it is less informative.

While Bosi may have done a 9A in 2025, he climbed far fewer boulders and established fewer new boulders compared to the Daniel, Jimmy, or Guil. Noah apparently is an elite flasher (and also apparently doesn't log anything 8A and down unless he flashes 😂). Will didn't find it noteworthy to log any flashes at all in 2025. Perhaps Will is climbing more than he logs, but I doubt it. This data supports that 2025 was in fact not a clear peak year for bouldering.
### Grade Inflation?
Let's approach another interesting question, are grades really inflating? The data demonstrates that bouldering culture has changed, but clear grade inflation is hard to pinpoint. Clearly, professional boulderers are no longer optimizing to have the best 10 climbs on their *scorecard* according to $F_\mathrm{8a.nu}$. We saw earlier that the sample size of people logging their climbs on the website has decreased since 2022. This could be because competitors like Kaya have stolen market share (I personally doubt that). Or perhaps Mr. Raboutou's place in the zeitgeist is so dominate that all the young guns have followed suite and no longer log anywhere 😪.

![[shawnMeme.png|center]]

Both are unlikely in my opinion. Rather, professional climbers now get more attention on the platforms of today: Instagram, YouTube, etc. At a minimum, this requires one or two big grades a year. The canonical example of this behavior is Simon Lorenzi. Like clock work, since 2021 the man has pumped out at least one send of a boulder he can say is 9A (with a hiccup of *only* sending 8C+ in 2024). Unfortunately, Simon does not have a tick list publicly available. I cannot provide as deep of an analysis as I would like, but a cursory glance of his [wiki](https://en.wikipedia.org/wiki/Simon_Lorenzi) demonstrates that his tick list depth leave much to be desired when we compare it to likes of the true 🐐s.

The attention economy effects more than just the strategy of professional climbers, it also is effecting the grades people take for their ascents. Because "the algorithm" has learned that only 9A gets likes, comments, and shares, climbers have responded by inflating their grades. 

To this see this let's set aside $F_\mathrm{8a.nu}$ metric, and instead look at just the raw ascent data. Inspecting the distribution of the top 50 climbers' ascents for the years of 2020-2025, it is clear that the general behavior of this elite group has changed. 

![[top50ClimbersAscents.2020-2025.png|center]]
In particular, we see that over the last 6 years, the number of **claimed** ascents 8B+ and harder has skyrocketed. This may be because climber are getting better, but I think it is more likely that climbers got a little bit better and at the same time felt the pressure of the attention economy. Then, climbers responded to market forces by **claiming** to send harder boulders than they used to. Just because someone is telling you a boulder is a grade does not necessarily mean the boulder is that grade. Climbs get upgraded and downgraded. Currently, the data only supports the claim that people want us to pay attention to them.

Unfortunately, climbers are not incentivized to build a true consensus on grades. For instance, there is a notable Swiss climber who gets paid bonuses for every first ascent 8C and harder he establishes. Beyond this example, just look at peoples scorecards on 8a.nu or read a few Instagram captions. People love to say "this climb is hard/soft". In private conversations, people are usually much more forth coming with their opinions on grades. I argue people should strive to be open and honest **on** the internet as well. Downgrade when appropriate, upgrade when appropriate (even if the [pros](https://youtu.be/Z7kmVhxaTVc?si=I7aVoniApC26MGhh&t=3907) won't). I am a firm believe that both sandbagging and candy-bagging do a disservice to the sport. 

>[!error] Hot Take: Grade Dishonesty
> In general, unc's think it makes them tough to take harder grades, but this likely comes from a place of personal insecurity as they age. Often they only really do this at grades that don't effect their ego but just other peoples egos... This is petty. 
> ![[theGreyMeme.png]]
> While young guns generally take higher grades because they want to be in the big leagues already, but they likely have years of grinding ahead of them.
> ![[trafficMeme.png]]
> I sympathize with both tendancies, and the stated age related generalizations are not always true. Tautologically, we know that lying is dishonest. I implore you to be aware of your tendancies whatever they might be. 

I liken this grade inflation to the current state of tech stocks with the rise of AI. It's really hard to know if the companies are worth what market says they are... but it stands to reason that many are overvalued. In the same way, the data and my gut instinct tell me grades have been inflating. The analogy breaks down quickly, you should still probably buy the SNP 500. That way we can retire and hangout at Herm's house. When I'm 65, I'll be in his basement drinking plum juice and attempting to manifest 8A. Herm likely will still climb 8A.

![[HermMeme.gif|300]]

>[!note] Side Note: I Made **EVEN MORE** plots
>If you want see more look in the [[appendixBoulderingExcellence|appendix]]. There is no further discussion, so you will have to make up your own mind on what they mean...
# Closing Remarks
Now that I dragged you through some math, or you skipped it because your lazy 🙄, let's close with a brief overview. I grant that quantitative analysis of our sport suffers from many challenges: a lack of reliable data, ambiguity when modeling the system, and other complicating factors. In particular, the grades that climbers report may be wrong. I discussed this previously when we looked at [[gradesDirtyDetails#Bias|reporting bias]] in the discussion on grades. 

I concede it is challenging to understand what it means to be excellent in climbing. I implore everyone to not immediately pigeonhole the discussion before we even start. The complexity of our sport is why climbing is such a compelling topic. Unlike power lifting or the 100m dash, our sport has a lot to more unpack beyond "number is higher/lower". The complexity involved with describing our pursuit is why climbing is a compelling topic of conversation.