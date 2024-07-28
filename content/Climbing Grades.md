---
title: Climbing Grades, Mathematically 😈
draft: false
tags:
---
Discussions around grades circulate in rock climbing all the time. The sport is multifaceted, and each climb poses a variety of challenges. Historically, climbers have given each route or boulder a grade, a single number. Grades allow climbers to understand the level of challenge they can expect. Also, it allows for comparison between ascents, and ideally one climb on a continent across the ocean is comparable to one at the local crag or gym.

Comparison of achievement is a fundamental aspect of sport, and for some sports the measurability of the activity allows for an objective view. For instance, in track and field, barring a large wind, times are comparable even if one race took place on the other side of the planet from the other. Other sports share the difficulty in quantifying excellence. Is a kickflip more impressive than a three-sixty on a skateboard? Does a double back tuck take more skill and strength than a front layout with a full twist for gymnasts? This ambiguity is addressed in a variety of ways. For instance in gymnastics and ice skating skills are given a score prior to the competition, and a panel of judges grades each performance based on a rubric with another score for style and execution. In other sports like surfing, skateboarding and freestyle skiing/snowboarding a more qualitative approach has been used. Judges are allowed to scale points based on prior experience and general principles laid out by the [skateboarding community.](https://www.skateboarding.worldskate.org/news/1477-understanding-skateboarding-judging.html)

No system is without its flaws, and many within these sports have qualms with their current system. For instance, [bias among ice-skating judges](https://libjournals.unca.edu/OJS/index.php/mas/article/view/23) has been reported, and while steps have been taken to address the problem, many believe it is still present. While in surfing, many factors are supposed to contribute to each athlete's score, but it appears that some specific attributes contribute far more than others, which [may or may not be fair](https://www.scielo.br/j/rbcdh/a/sBhkpSkgv3FD6YjkFQTxk7j/?lang=en).

Currently, most rock climbing competitions get around the difficulty of relying on grades by instead having the entire field of climbers attempt the same problems, and then evaluating performance by see who can complete the most climbs. There are also some nuances for partial credit and tie-breaking, see the [IFSC Rules](https://images.ifsc-climbing.org/ifsc/image/private/t_q_good/prd/y8rbz5wvclz31na8qs2s.pdf). These competitions are held on synthetic climbing walls with rock climbs made specifically for competition.  

Unfortunately this does not address a core aspect to rock climbing which is the activity done outside on real rock, and many of the best climbers do not participate in competition. Instead, some elite climbers spend their time attempting the most difficult outdoor problems in the world, so there is motivation to quantify the difficulty of the top end rock climbs. Also, for the recreational climber, the grade of a rock climb is of great interest for safety concerns as well as specifying a level of challenge for personal growth.

Rock climbing grades pose a unique challenge because measurability is limited. A grade should  not be entirely derived from the strength required, but also take into account the necessary skill, flexibility, mental fortitude, and perhaps even more intangible aspects of a climb. In spite of the complexity, climbers attempt to label each climb with one numeric value, a grade, to specify the difficulty of their own experience. In some ways climbers assign difficult themselves. On the other hand, there is a community aspect where bystanders often feel comfortable or obligated to vocalize their opinion on the difficulty of climbs. 

The current relationship many climbers have with quantifying difficulty is problematic in my opinion. Many assert that grades are useless. This is a naive and displays a lack of intellectual engagement. Grades are useful. Sport necessitates comparison. It allows one to compare between themselves and others, and to compare between their current and past self. That said, grades also are limited, and a single number cannot encapsulate all the complexity of a climb. So let's try to better understand grades and how we can them gain useful information.  
# What is a Grade?

Let's try to better understand grades, by thinking about them as a scientist would. What is a grade? I like to think of a grade like a measurement or a function. Doing a climb is an experience, and at the end of the experience (upon completion of a climb) the climber can reflect and label what they just did. This is analogous to a scientist using an instrument to measure some physical phenomena. The underlying system has some features, the instrument takes those features as inputs to produce a numeric output. We can use math to describe this. The instrument can be thought of as a function and the physical features are input variables. The function evaluated at particular inputs produces measurement. In the real world, measurements have error. This can come from a variety of sources. A simple example is that of precision. If the ruler only has marks for millimeters, then it is impossible to measure more accurately that up to a millimeter. Thus, we have uncertainty of $\approx \frac{1}{2}$mm on each measurement. We can account for this by saying that the measurement has some random error. 

>[!question] You are probably thinking
> "This is all nice and good, but I thought we were talking about grades?" 

I know, we are getting there I promise. Let's root ourselves in what we came here to think about. For now, I think it is worth thinking about the function that represents the process of experiencing a climb to have multiple inputs. 
## What Contributes to a Grade 

For example, climbers will often reference elements like physical strength, flexibility, morphology, and technique. All could come into play on a climb, and depending on an individual's propensities, one climb may feel easier or harder. That said many believe that a climb that derives its difficulty from demanding that a climber use very subtle features with their feet can be the same *grade* as a climb that derives its difficulty from demanding that a climber be able to move their body towards the end of a climb using only their hands.

Another complicating factor to grades is that of conditions. Physically, holds may be easier to use depending on the temperature and humidity due to changes in how skin or rubber deform as well as how the friction between surfaces changes. Also, wind can help keep skin and rock dry. This leads us to believe that climbers experience difficulty not only due to an individual ability and morphology, but also because of environmental factors.

We also should account for a lack of precision in a climber's ability to accurately assess difficulty. Just like some rulers only have lines for centimeters and others measure down to millimeters, some individuals are better at assessing difficulty than others. The accuracy of a particular measurement can change based off whether someone has experience at that grade. Also, many say that it is difficult to measure a grade that is too far away from their current *level*. Grades that are *easy* for an individual may be hard to distinguish between. On the other hand, some setters and well seasoned climbers appear to have the ability to accurately assess difficulty far above and below their *level*.

Furthermore, depending on an individuals background and internal motivations, they may feel inclined to report not the real grade but instead choose to change the grade they tell others (and even themselves). This type of error is fundamentally different from measurement error. I like to call this bias. I think it is worth being generous towards others with respect to what I may perceive as bias. The reason someone has bias can depend on where they started climbing, their phase of life, and other extenuating factors. This is not to say that we won't account for it in our math, but don't hate on people just because their bias is obvious. If you want discussion on this bias, see [[Climbing Grades Dirty Details#Bias|my longer rant]].
# Math Time

Here, I introduce a mathematical framework that extends the familiar climbing grading system, but allows us to ask and answer more nuanced questions about the difficulty of climbs. I considered [[Climbing Grades Dirty Details#A Short Discussion on Modeling|other modeling choices]]. At a high level, we model the system of "doing a rock climb" as a function, $f$, that takes the climber $x$, the climb, $y$, and the environment, $\theta$, as inputs, and then this produces a grade, $g$. 
$$ 
    g = f(x,y,\theta)
$$
I further specify the form of this function $f$. 
$$ 
    f(x,y,\theta) = h(x,y,\theta) + b(x)
$$
This form allows us to separate a black box function, $h$, that produces *experienced difficulty* and another function, $b$, which only depends on the climber and produces a *bias*. The final output $g$ is the *reported grade*. This is the grade that climbers share in conversation or on the internet. The model separates these two because I want to be able to easily estimate how each climber contributes bias, and then eventually account for it so we can look directly at *debiased grades*. 

One might ask what are $x,y$ and $\theta$? They signify the climber, the climb and the environment, sure... but are they numbers, vectors, something more exotic. Hypothetically, we could consider a completely deterministic model, and we could specify:
$$ 
\begin{align*}
    x &= \{\text{Height, Weight, Flexibility, Coordination, ect.}\} \\
    y &= \text{This Climb's Identifier}\\
    \theta &=  \{\text{Temperature, Humidity, Cloud Cover, ect.}\}
\end{align*}
$$
Because this data is not easily available for each reported grade on the internet, we assume that the climber and environment factors can vary randomly. This means that there is an underlying stochastic component to the system. This also allows us to account for measurement error as discussed earlier. A common modeling technique when  modeling error is present or the system is chaotic; modeling these hard to model dynamics with a stochastic process rather than relying on purely deterministic behavior.
## We Should Use a Stochastic Model
That's a really long-winded way of saying that for the time being, we really don't care what $x$ and $\theta$ are... We assume that climbs will be done in a variety of environmental factors and by a variety of different climbers. Instead, we say that each particular reported grade $g_n$ is a realization of random variable $G_y$. This random variable is a function of other random variables:

$$
\underbrace{G_y}_{\text{reported grade}} = \underbrace{h(X,y,\Theta)}_\text{expierenced grade} + \underbrace{b(X)}_{\text{bias}}
$$

The change to upper case letters signifies that those are random variables with some underlying distribution. Thinking of them this way allow us to formally (mathematically) push a bunch of stuff we cannot measure under the rug. 

Notice, that we assume that the climb doesn't change, thus $y$ stays lower case and is not random. The index $n$ specifies a particular individual's reported grade for a particular climb. This is nice because will have a many samples $\{g_n\}_{n=1}^N$. Because we assume climbers and the environmental factors can change (they can and do vary), then we expect and do see in the data that climbing grades will vary. 

This hopefully gives useful and actionable information by capturing most of the behavior of how difficulty is actualized. If we did have more data for a particular climb on multiple ascents, we could incorporate this data through [[Extending Random Climbing Grades|conditional distributions]].

One can visualize continuous random variables through their probability distribution function (when it exists).

>[!example]
>![[fig/dist.png]]
>Above are candidate distributions for a hypothetical "V5". All have an average grade of "V5", but with different behavior. This allows us to model one "V5" where mostly everyone agrees (Uniform or Normal), and another "V5" where there is much disagreement (Gamma or Gaussian Mixture Model).
## Bias
To account for *bias*, I wrote a (simple, perhaps naive) [[Debiasing Algo.png|algorithm]] to estimate the expected bias for a particular climber $\mathbb{E}[b(X)]$. This allows us to then estimate the *experienced grade*. You can think of this as a Bayesian approach. We are conditioning on the expected bias. Thus, we can obtain the debiased grade:
$$ 
g_n - \mathbb{E}[b(X)] \approx d_n
$$
Now given a sample $\{g_n\}_{n=1}^N$ of these debiased grades we can estimate a distribution for the debiased grade of a particular climb $D_y$. You can read more about how this is done [[Climbing Grades Dirty Details#Bias|here]].
# Takeaways

>[!question] Now, you are probably asking:
>"Ok,ok... but Mr. Thique, why? Like who cares, I get you had a good time thinking about this and you sound a lot like a guy who spend too much time on his computer. That's nice, but like does this help climbers?"

Yes! This allows us to leverage the data we have to give us actionable information. We can better answer questions like: 
- *How hard is that climb?* Now, we can compute the probability that YOU will think a climb is a certain grade. 
- *Can you give me hard evidence that how you describe grades is better than how we thought about them before?* Yes... see the [[Climbing Grades Case Study#Convergence to a Distribution|convergence discussion]] in the case study.
- *Why do climbers disagree on grades?* We can give evidence that a climb is a different grade to different people in different conditions.
- *How should I think about what so-and-so said about a climb being hard or not?* Now you can say there is variability, measurement error, and bias. This allows us to embrace one person's reported grade for the information it provides, while simultaneously weighing it with the all the uncertainty that is involved. 
- *Which grade is right?* Ah, now we see that the grade is a random variable, so really you should be asking, "What is the probability that I will think that climb feels a certain grade to me on a particular day?"
- *Can I take personal grades?* YES! In fact by taking personal grades, you give others more accurate information about what they may experience on that climb.

This mathematical interpretation of grades can better inform how grades are philosophically considered. A grade is a function of random variables (therefore a grade is also a random variable). We think of each climber realizing this random variable when they send. In other words, they are sampling when they complete an ascent. This adds an interesting perspective on grades in general and injects a certain amount of grace when hearing what others think about a particular climb, because it is mathematically impossible that one will have the same experience as another.

Hopefully climbers will think critically about *bias*. As discussed earlier, *bias*, is not easily estimated and the assumptions made to do so are inherently flawed, see [[Climbing Grades Dirty Details#Bias|the dirty details]]. Hopefully this motivates climbers to be thoughtful when reporting their grade. Choose to report not just the grade that feels good or the one that others take, but really what one thinks they experienced. Conscious *bias* is dishonest and does not help others in estimating the difficulty they will experience when they attempt the climb.

>[!question] Ok, you made it to the end, and now you are saying: 
>"But like I want to see this done for real...."
>Ah... go checkout a short [[Climbing Grades Case Study|case study]] I did for two notorious climbs on Mt. Blue Sky.

>[!seealso] Further Reading
>I just took a class on measure theory that made sense of how random variables can be thought of as "measurable functions". Going deep on the theory can help take the mysticism out of randomness. This is definitely too much for this discussion, but if you are interested I followed [Measure Theory, Probability, and Stochastic Processes by Le Gall](https://books.google.com/books/about/Measure_Theory_Probability_and_Stochasti.html?id=Ba2YEAAAQBAJ&source=kp_book_description).
>
>If that is a bit too much too fast then you also could read [The Simple and Infinite Joy ofMathematical Statistics by Corcoran](https://books.google.com/books/about/The_Simple_and_Infinite_Joy_of_Mathemati.html?id=uy6DzwEACAAJ) which I have read twice! This definitely helps explain enough without getting too into the proof-y details.

>[!tip] Acknowledgements
> This is not just my brain child 🧠👶. Thoughtful conversations, edits and ideas were contributed by: 
> - Will Anglin
> - Dr. Dale Jennings
> - Dr. Jem Corcoran 
> - Dr. Stephen Becker
> - Paige Witter
> - Sam Struthers
