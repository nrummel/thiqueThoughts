---
title: "Climbing Grades: A Mathematical Modeler Perspective"
draft: false
tags:
---
# Motivation/Introduction

Discussions around grades circulate in rock climbing all the time. How does one express the complexity of the difficulty each climb poses? The sport is multifaceted, and each climb poses a variety of challenges. Historically, climbers have given each route or boulder a grade, a single number. Grades allow climbers to understand the level of challenge they can expect. Also, it allows for comparison between ascents, and ideally one climb on a continent across the ocean is comparable to one at the local crag or gym.

Comparison of achievement is a fundamental aspect of sport, and for some sports the measurability of the activity allows for an objective view. For instance, in track and field, barring a large wind, times are comparable even if one race took place on the other side of the planet from the other. Other sports share the difficulty in quantifying excellence. Is a kick-flip more impressive than a three-sixty on a skateboard? Does a double back tuck take more skill and strength than a front layout with a full twist for gymnasts? This ambiguity in competition in variety of ways. For instance in gymnastics and ice skating skills are given a score prior to the competition and a panel of judges grades each performance based on the rubric with another score for style and execution. While in other sports like surfing, skateboarding and freestyle skiing/snowboarding a more qualitative approach has been used. Judges are allowed to scale points based of prior experience and general principles laid out by the [community skateboarding](https://www.skateboarding.worldskate.org/news/1477-understanding-skateboarding-judging.html).

No system is without its flaws, and many within these sports have qualms with their current system. For instance, [bias among ice-skating judges](https://libjournals.unca.edu/OJS/index.php/mas/article/view/23) has been reported, and while steps have been taken to address the problem many believe it is still present. While in surfing, while many factors are supposed to contribute to each athletes score, it appears that some specific attributes contribute far more than other which may or may not be fair, see [this study](https://www.scielo.br/j/rbcdh/a/sBhkpSkgv3FD6YjkFQTxk7j/?lang=en).

Currently, most rock climbing competitions get around the difficulty in grading problems by instead having the entire field of climbers try all of the same problems and then evaluating performance by see who can complete the most climbs with some more nuances for partial credit and tie-breaking, see the [IFSC Rule](https://images.ifsc-climbing.org/ifsc/image/private/t_q_good/prd/y8rbz5wvclz31na8qs2s.pdf). These competitions are held on synthetic climbing walls with rock climbs made specifically for competition.  

Unfortunately this does not address a core aspect to rock climbing which is the activity done outside on real rock, and some of the best athletes in the sport of rock climbing do not participate in competition. Instead, many of the elite climbers spend their time attempting to climb the most difficult rock faces in the world, so there is motivation in quantifying how difficult any particular rock climb is. Also, for the recreational climber, the grade of a rock climb is of great interest for safety concerns as well as specifying a level of challenge for personal growth or other motivations.

Rock climbing poses an interesting landscape of comparison. The difficulty's measurability is limited because it does not entirely derive itself from speed or strength. In spite of the complexity, climbers attempt to label each climb with one numeric value, grade, to specify the difficulty of their own experience. In some ways we are self judged. On the other hand, there is a community aspect where others often feel comfortable or obligated to vocalize their opinion on the difficult of climbs that others have done. 

The current relationship many climbers have with quantifying difficulty is problematic in my opinion. Many assert that grades are useless. This is a naive and displays a lack of intellectual engagement. Grades are tautologically useful. Sport necessitates comparison. It allows one to compare between themselves and others, and to compare between their current and past self. Grades also are limited, and a single number cannot encapsulate all the complexity of a climb.  
# Constructing a Better Mathematical Model

  
Translating real world phenomena into a mathematical model is both an art and a science. The goal is to capture the fundamentals of the system. This is a balancing act of keeping the model simple enough that it is not prone to over-fitting without losing the complexity of the true system. With climbing grades this process has occupied my brain for a decade and a half. What is a climbing grade? For most people it is just a number, but can a single number really capture the nature of the difficulty that a climb poses to a climber? It has become more commonplace to consider "personal grades" where each person decides what grade is appropriate to describe what they experienced on the climb. Still, culturally, the consensus grade is valued. Sometimes, this consensus is a calculated average \footnote{Many websites collect logs of ascents and corresponding grades. Two of the most relevant are [8a.nu](https://www.8a.nu/) and [27crags.com](https://27crags.com/), but it is often decided by a de facto authority figure like a guidebook author.

  

The variability in "personal grades" suggests that grades are not a constant, i.e., a single number is not sufficient information to describe the system. While this demonstrates that the model of a single number is flawed, it can still be useful. Looking at individuals' reported grade gives a decent first glance at how difficult a climb could be. As a rough estimate, this helps inform others on whether they would like to try a particular climb and gives them an idea about the difficulty they might experience. It is naive to think that the current representation of climbing grades is either useless or perfect. The system is obviously more complex than the original model of a single number, thus motivating a new model.

There are many directions that one could take when developing a new model for describing the difficulty of a climb. For instance, one could stratify components of climbing and give a grade to each one. For instance, each climb could get a flexibility, skill, and strength score. This would give a multidimensional picture of the difficulty of each climb. This stratification could be as simple as these three categories or could be done ad nauseam. Climbing difficulty is multidimensional and a model that takes this into account is attractive but projecting the difficulty onto one-dimension allows for easy comparison between climbs. Also, extending the existing one-dimensional model allows us to use the existing data to compare with our model. Culturally, this approach may be more widely accepted because it is in line with the history of the sport.

Here I will focus on a special form of rock climbing, bouldering. Bouldering is a form of rock climbing done without ropes typically on shorter climbs. The sport's culture focuses primarily on difficulty, and many boulderers desire progression. Meaning boulders hope to complete more difficult boulders as time progresses. This motivates a better understanding of how to quantify the difficulty of bouldering.  

The hope is that a climb labeled the same grade as another should have comparable difficulty. There are many grading scales, but here we use the Hueco grading system. There are well established conversions from other grading systems to the Hueco scale. Boulders are graded easiest to hardest from "V0" to "V17" iterating by integer values. For instance, starting at the bottom and making it to the top of a boulder could be labeled "V5", while a more difficult climb would be labeled "V6". Complications arise because many factors can affect the difficulty an individual experiences on a climb. One's physiology, the weather, the number of movements required, the climber's technical competency and strength capacity, and the equipment used all contribute to the experience of difficulty for any given climb. Disagreement on grades commonly occurs, which may lead one to the conclusion that the current grading system is flawed.

Currently, climbers' achievements are not easily comparable. If climber $A$ and climber $B$ both say that they have climbed boulders at a grade of "V$X$", then can it be said that they both have accomplished similarly difficult feats? While it is tempting to give a definitive answer, teasing out the truth is complex. While comparing accomplishments may not be the only purpose for grades, it is a part of their purpose and how they are used today.
## Qualitative Aspects The Model *Should* Consider
The model extends the current system by viewing each *reported grade* as a sample from an underlying distribution. This conclusion comes from viewing grades as a function of multiple factors some of which can be random. For example, climbers will often reference elements like, physical strength, flexibility, morphology, and technique. All could come into play on a climb, and depending on an individual's propensities, one climb may feel easier or harder. That said, after becoming proficient in the aspects of climbing, many believe that a climb that derives its difficulty from demanding that a climber use, with precision, very subtle features with their feet, can be "the same grade" as a climb that derives its difficulty from demanding that a climber be able to move their body towards the end of a climb using only their hands.

Another complicating factor to grades is that of conditions. Physically, holds may be more easy to use depending on the temperature and humidity due to changes in how skin, rubber deform as well as how the friction between surfaces changes \todo{Citation needed}. Also, wind can help keep skin and rock dry. This leads us to believe that climbers can experience climbs' difficulty not only due to individual ability and morphology, but also because of environmental factors.

A final complexity that our model should account for is underlying randomness that may not be easily explained. Many climbers describe that the climb feels overly difficult or inexplicably easy. Hence, grades are modeled as a sample from underlying distribution. This may seem confusing, but so much of the natural world has an underlying stochastic nature. Unsurprisingly, humans' experience interacting with rock could be described this way. A good way to conceptualize the model is to think of the difficulty one experiences from a climb as a sample from a distribution.
  
## Let's Start

Here, I introduce a mathematical framework that extends the familiar climbing grading system, but allows us to ask and answer more nuanced questions about the difficulty of climbs. At a high level, we model the system of "doing a rock climb" as a function that takes the climber $x$, the climb, $y$, and the environment, $\theta$, as inputs, and then this produces an output. 

$$ 
    g = f(x,y,\theta)
$$

I further specify the form of this function $f$. 

$$ 
    f(x,y,\theta) = g(x,y,\theta) + b(x)
$$

This form allows us to separate a black box function, $g$, that produces *experienced difficulty* and another function, $r$, which only depends on the climber and produces a *bias*. The final output I call the *reported grade*. This is the grade that climbers share in conversation or on the internet. The model separates these two because I want to model how each climber contributes bias when they discuss climbing grades. 

Bias is philosophically fascinating to contemplate, and in the science/mathematics bias is just a blanket term to describe a type of error that we can separate out from the underlying model. I want to be clear that climber have a variety of reasons to contribute this *bias* to the grade they report to others. It may be a conscious or unconscious decision of the climber. Intentional or not it is a factor. From analysis of the data and consideration of the physical system, the model describes grades as random variables. 

One might ask what are $x,y$ and $\theta$? They signify the climber, the climb and the environment, sure... but are they numbers, vectors, something more exotic. Hypothetically, we could consider a completely deterministic model, and we could specify:

$$ 
\begin{align*}
    y &= \{\text{height, weight, flexibility, coordination, ect.}\} \\
    \theta &=  \{\text{temperature, humidity, cloud cover, ect.}\}
\end{align*}
$$

Because this data is not easily available for each reported grade on the internet, we assume that the climber and environment factors can vary randomly. Meaning that there is an underlying stochastic component to the system. This is a common modeling technique when we have modeling error or the system is chaotic, is to model this hard to model dynamics with a stochastic process rather than relying on purely deterministic behavior.

That's a really long winded way of saying that for the time being, we really don't care what $x$ and $\theta$ are... We assume that climbs will be done in a variety of environmental factors and by a variety of different climbers. Because we don't specify a particular reported grade with "meta data" like temperature that day or the height of the climber. Instead we say that each particular reported grade $g_i$ is a realization of random variable. This random variable is 

$$
G_y = g(X,y,\Theta) + b(X)
$$

The change to upper case letters signifies that those are random variables with some underlying distribution. Notice, that we assume that the climb doesn't change, thus $y$ stays lower case and is not random. But because we assume climbers and the environmental factors come from distributions (they can and do vary), then we expect and do see in the data that climbing grades will vary. 
This model hopes to give useful and actionable information by capturing most of the behavior of how difficulty is actualized. We now can ask more nuanced questions like:
- Can we isolate the *experienced difficulty* by estimating and then removing of *bias* 
- What is the probability that I will experience this grade or easier?
  
To answer the first question, I wrote an (simple) algorithm to estimate the expected bias for a particular climber $\mathbb{E}[b(X)]$. This allows use to then estimate the distribution function $D$ conditioned on the bias being the expected bias. Thus we can obtained the "debiased" grade:

$$ 
G_y - \mathbb{E}[b(X)] \approx D
$$

I applied this model to a case study by comparing two climbs on Mt. Blue Sky, Colorado: "Clear Blue Skies" and "No More Greener Grasses". Both are given the same integer grade of "V11" or "V12", but there is common disagreement in the community. These two climbs were chosen because of their proximity which somewhat controls for the effects of environmental factors. They sit only feet from each other on the same piece of rock. Also, both climbs see many repeats every year providing the necessary quantity of data. Studying these problems isolates significant factors that impact climbers' reported grade. The data collected comes from the publicly available website [8a.nu](https://www.8a.nu) which has been used as the primary logging platform for elite and casual climbers for the last two decades. The database gives a unique opportunity to use statistical and computational tools at scale.
  
Next, the model hopes to allow for the isolation of the underlying *experienced difficulty* from the *reported grade*. This model assumes that estimating the true grade of a climb is impossible. All that can be observed is the grade experienced by oneself or reported by other climbers. It is assumed that after every ascent a climber experiences some difficulty, estimates what numerical value corresponds to this experience, and simulations incorporate personal bias before reporting that grade to themselves and others. Our model separates this *experienced difficulty* and the *reported grade* by describing the *reported grade* as the sum of *experienced difficulty* and *bias*.

The goal of the model is to improve what is presented in a guidebook, or some equivalent. The model more accurately communicates to a prospective climber the experience of difficulty that they are likely to encounter during a possible future ascent. By effectively accounting for the multidimensional nature of the difficulty of the sport, the stochastic nature of the physical system, and reducing the contribution of reporting bias, the model gives more information than the old conceptualization of grades.

Below is a formalization of these ideas into a mathematical expression. If it intimidates the reader, feel free to glance over it and continue. This paper is intended to be accessible to any engaged reader. The important aspects of the model will be described in the text as the reader continues.
  
### Getting Into The Details 

>[!info]
>If you don't really care about *how* I flesh the math out, then skip this part, much of the qualitative discussion continues past this discussion.

While it has been discussed why and how a one-dimensional stochastic model was chosen, it has not yet been specified whether a discrete or continuous model is used. A continuous random variable can take on values such as 3.0, 3.1 $\pi\approx 3.13159$, or any number in between, and discrete random variables take on values predetermined. Depending on the distribution, a discrete random variable could take on values of "V0", "V1", "V2", and so on, but a climb could not be "V3.5" \footnote{For those unfamiliar with the Hueco grading scale, the "V" is a prefix added before the numeric grade to specify it as such.}. \unsure{After discussion with Dale, I think this clearly shows that there is a nonlinear rounding operation occuring when reporting data. This makes it more advantageous to keep all RV's as discrete. }{In practice it may be advantageous to discretize climbing grades because it is often difficult for individuals to accurately differentiate between a "V5" and "V6" let alone a "V5" and a "V5.1"}. This argument is based on the precision of climbers to measure the underlying system. Also, it is possible that bias may be on a scale larger or smaller than the precision of these measurements. That all said, modeling grades on the continuum probably better describes climbing grades. For starters, this could help explain the common experience of one climb feeling noticeably harder than another while both are decidedly the "V$X$" grade. Hence, climbing grades are modeled here as continuous random variables.

>[!todo]
> After discussions with another mathematician, Dr. Jennings, I would like to look at using catagorical distributions for $X,Y,$ and $W$.

Given that random variables are continuous, how then are they distributed? There is a choice of distribution for both the *experienced difficulty* ($X$) and the *bias* ($Y$). As with many scientific applications, it would be convenient if these random variables came from well-known distributions, but this may not be the case. The most familiar distribution being the normal distribution. While specific statistics are guaranteed to asymptotically converge to known distributions, a pertinent question remains. How does *experienced difficulty* and *bias* behave? 

>[!info]
>When enough samples are collected the mean of samples is another random variable that is distributed normally. This is known as the Central Limit Theorem.

>[!example]
>![[dist.png]]
>Above are candidate distributions for a hypothetical "V5". All have a mean grade of "V5", but with different behavior.
  
While the normal distribution is how most readers may first conceptualize a grade viewed as a random variable, there is good reason to think that the *experienced difficulty* could be distributed in a variety of ways. In this paper, the uniform, the normal distribution, the Gamma distribution, Gaussian Mixtures and Kernel Density Estimates (KDE) are considered. Uniform distribution is describe equally likely outcomes over an interval, and there is an argument to be made that when someone says that a climb is V$X$, then the grade would take on the distribution if Uniform($X$,$X+1$). The Gamma distribution was chosen as a candidate because of the possibility of asymmetry. Thus a Gamma distribution better describes a climb where most people feel the climb easy for "v5", but with a non-negligible minority experiencing the climb much more difficult for the grade. Gaussian Mixtures are conceptually what they sound like, a weighted sum of Gaussians. This can allow for multi-modal distributions which better describes a climb where $\approx$ 60% feel the climb is around "V3", but $\approx$ 40% feel the climb is around "V8". This could be because the climb is such that it significantly advantages a specific morphology, which is generally outside the climber's control. In this case, a unimodal distribution would poorly describe the data, so a distribution like Gaussian Mixtures is an attractive option. KDE's are a general tool used to construct a continuous distribution to fit data. This is done by convolving the data with a kernel. In this study a Gaussian Kernel is used. KDE's allow us to fit arbitrarily well to the data, so that model mismatch is not a concern.

#### Conditional Experienced Difficulty

>[!todo]
>Harden this...

One may want to understand how the *experienced difficulty* ($g(X,y,\Theta$) is distributed for a particular individual on a particular day. To do this one could estimate the conditional distribution. Meaning, given the specifications of oneself ($X=x$), how is *experienced difficulty* distributed? Further, one could also condition the *experienced difficulty* on the environmental conditions ($\Theta=\theta$). We can continue to model some randomness and assume that the function $g$ has intrinsic randomness, or we can say that $g$ is fully deterministic. There are arguments for both in this use case. 

This is contrasted with the marginal probability distribution function (pdf) for $X$ which is what was described by $D_X = \int g(X, y,\theta) d\theta$ or $D_\Theta = \int g(x, y,\Theta) dx$. The marginal pdf describes the *experienced difficulty* without knowing the individuals' propensities or the conditions of the day. In order to obtain the conditional pdf described, one could estimate the joint pdf and then use Bayesian principles to find the conditional distribution. Being able to estimate the conditional distribution could be more actionable for climbers and hopefully will be explored more in a follow-on study. This paper focuses on isolating the marginal distribution of *experienced difficulty*.

#### Reporting Bias

A key component of this model is estimating reporting bias so that it can be removed to isolate an estimate of experience difficulty. This poses some challenges because *bias* may not be random at all. Depending on the individual, the bias they bring into their reported grade could be a function of personal complaint specific to the climb, or a particular conceptual position regarding grades in general. Furthermore, anthropological or psychological reasons contribute to bias. Human beings are prone to social influence and exposure to grades proposed by other climbers may affect the grade another climber chooses to report.

Some reasonable motivations for bias are wanting others to think more of an individual accomplishment and thus incentivizing the inflation of a reported grade. Alternatively a climber may feel incentivized to report a grade as easier than what they experienced as a way to downplay others' accomplishments. This is commonly referred to as "sand-bagging". While it is up for debate which is more ethically or morally corrosive, both are inherently dishonest. It is worth reiterating that these biases may be subconscious and not intentionally added but could be done without any conscious ill will from the climber. This lack of intention does not preclude bias's presence in reported grades.

Also, there is a built-in incentive in this dataset to take the higher grade because of the ranking system. 8a provides a rolling ranking board for each country and the world. Each climb is given a point value with extra points for doing climbs as a first ascent or in one or two tries. This motivates climbers to report climbs a grade that is more difficult than they actually believe that it is. This also has created a counterculture movement that is vocal and creates \href{https://www.youtube.com/watch?v=e15_IOKrJtg&t=593s}{media} that publicly shames others for trying to maximize their points on 8a by misreporting. In many circles taking a lower grade is applauded because it demonstrates to one's compatriots that they are at a level where a climb feels easier than the others who have completed that climb.

In either case, these non-random motivations create roadblocks for accurately estimating bias for any ascent or climber. Despite these pitfalls, the bias for each individual may be observed and accounted for to some degree. The method used to debias \emph{reported grades} is done by estimating the expected (average) *bias* through an algorithm of comparing reported grade of an individual to the mean *reported grade*. Assuming that over the entire population of reports that *bias* is centered at 0, this algorithm should properly estimate an individual's average *bias* given enough data. While these assumptions may be violated, this debiasing process should recover *experienced difficulty* with some accuracy. This algorithm is more fully described in the appendix. Extending the framework set in \unsure{After discussions with Dale, I believe we could better recover $X$ if instead we write $f_X(x) = f_W(w) * f_Y(-y)$. There is more to flesh out here. }{Equation \ref{eq:abstractModel} }:

$$
\begin{align*}
\{g_i\}_{n=1}^N & \text{is the set of $N$ report grades}\\
\{b_i\}_{n=1}^N &\approx \big\{g_i - \mathbb{E}[b(X_i)]\big\}_{n=1}^N
\end{align*}
$$
# Applying Our Model Real Data

Two boulder problems were chosen from Mt. Evans. While the climbs are adjacent to each other on the Dali wall, they pose different challenges to a climber. First, "Clear Blue Skies" (CBS) sits in the middle of the wall with brutally small holds that are slippery to the touch. On the right side of the wall is "No More Greener Grasses" (NMGG). After discussions with many expert climbers, it is well understood that the difficulty of CBS mostly derives itself from making relatively small but powerful moves between these small holds. While NMGG is a similar number of moves, it covers much more distance. The holds are larger, and the wall is steeper. Currently, both are considered to be graded around "V11" or "V12", but their history is rich and people's opinions surrounding the relative difficulty of each climb is fraught with controversy.

  
>[!example]
>![[CBS.jpeg]]
>Elite climber Jess Walker climbing Clear Blue Skies

At the time of writing, it is more common for ascensionists to grade CBS as "V11" and NMGG as "V12". From anecdotal reports, both take a similar amount of effort and time to complete. Which may indicate the climbs are comparable. It appears that CBS suits a narrower range of morphologies and competencies, and NMGG is more amicable to a broader range of morphologies and competencies. The models described above are applied to analyze these two climbs.

## Obtaining the Data


A considerable amount of time was spent obtaining access to the world's largest collection of reported climbing grades on [8a.nu](https://www.8a.nu/) in such a way to leverage the dataset in a reasonable amount of time. This involved going through the publicly available web interface and isolating the data for each ascent. Programmatically the each ascent is the represented as a collection of the following fields:
 
- Ascensionist's Name

- Reported Grade: reported as an integer

- Hard/Soft Label: this specifies if the ascensionist believes the grade is difficult or easy for the grade respectively

- Other qualitative descriptors not incorporated into the analysis, but may be useful to incorporated physical conditions or personal aptitudes of each climber in a later study
  

The integer reported grade is digested into the algorithms as that integer plus 0.5 to place it directly between the grade above and below. For instance, a "V11" would be interpreted as a 11.5. The hard and soft identifiers modify the grade by 0.25, so a "hard V11" would be considered 11.75. A "soft V11" would be 11.25.

## Estimating Distribution For Each Climb


We assume the form of each distribution, and then this becomes a parameter estimation problem. This was done through third party software from [scipy](https://scipy.org/) and [sklearn](https://scikit-learn.org/). Both are python packages widely used for machine learning and statistics. The Normal and Gamma distribution's parameters are estimated using maximum likelihood estimation (MLE). For the Gaussian Mixtures [expectation maximization](https://scikit-learn.org/stable/modules/generated/sklearn.mixture.GaussianMixture.html#sklearn.mixture.GaussianMixture.fit). It is worth noting that parameter estimation generally is a non-convex non-linear optimization problem and thus there are few gaurentees that we estimate the parameters well. In practice, parameter estiimation is necessary, and thus we must try. The techniques used here are standard and used in the sciences widely.  

## Comparing Fit Distributions

While looking at the histograms with a fit distribution superimposed can give a valuable qualitative picture, how should the new model be evaluated quantitatively? There are many metrics one could consider, but one with a particularly interesting interpretation is the *Kullback-Leibler divergence* (KL divergence) defined below. Mathematically, this divergence is rich in meaning, but in this application, it can be interpreted at the "expected surprise" by choosing the fit distribution rather than some true distribution. The KL divergence measures how well the choice of model describes the true behavior of the data.


$$\begin{align*}
D_{KL}(p || f) &= \int_{-\infty}^\infty p(x) \log\left(\frac{p(x)} {f(x)}\right)dx \\
p & \text{ is the pdf of the fit model}\\
f & \text{ is the pdf of the true distribution}
\end{align*}$$

If the KL divergence is small, the fit distribution is, in some sense, equivalent to the true distribution. If the KL divergence is large, the fit distribution does not represent the true distribution. Comparing KL divergences between models can help determine which model better fits the data, i.e., the model with the smaller KL divergence.

An important caveat to note, is that the KL divergence cannot be computed exactly for any of the candidate models because the exact distribution is not known. Instead the KL divergence is estimated by using the CDF of the fit distribution to that of the empirical CDF of the data, see this [paper](https://www.scirp.org/reference/referencespapers?referenceid=2697925) for more details. This is shown asymptotically converges to the true KL divergence, so as the size of the data set increases, so does the accuracy of the estimate.

  

$$\begin{align*}
	\hat{D}_{KL}(p || f) &= \frac{1}{n} \sum_{i=1}^n \log(\dfrac{\delta P_i}{\delta Q_i})\\
	\delta P_i & \text{ is the difference in the fit distributions cdf from the ordered data $i-1$ to $i$}\\
	\delta Q_i & \text{ is the difference in the empircal cdf from the ordered data $i-1$ to $i$}\\
\end{align*}$$

  
>[!example]
>![[cbsFit.png]]
>A Gamma, Normal and Gaussian Mixture are fit to all of the available CBS's ascents. We see that the Gaussian Mixture performs best.
>![[nmggFit.png]]
>A Gamma, Normal and Gaussian mixture are fit to all the available NMGG's ascents.
>Debiased samples of \emph{experienced difficulties} are labeled as ascents. All other lines correspond to fit distributions and the estimated KL divergence between the data and the fit distribution is in the legend below. 

The KL divergence varies depending on which distribution is used. While it may be tempting to blindly select the Gaussian Mixture for both climbs, because it does minimize the KL divergence for both out of the distributions tested. Qualitatively, CBS appears to have two modes while NMGG visually has one mode with a single outlier. Thus the Gaussian Mixture and the KDE could be overfitting the data in the case of NMGG and likely selecting the Gamma or Normal distribution is more prudent.

>[! todo] 
>Another way to investigate how the new RV models perform is to look at the Kolmorgorov-Smirnov Test (KS Test). The KS Test computes the probability that the data came from a specified distribution. In our case this is almost looking at the process of estimation in reverse. We are asking if the samples of estimated experienced difficulties could have come from the fit distributions. Below is a table for a larger dataset of climbs that corresponds to climbs where the process of fitting distributions to the data is performed and then evaluated with KL divergence and performing the KS Test.

## Convergence to a Distribution

Oftentimes, climbers will say that the grade has come to a consensus. Usually this is conceptualized, that while there may be disagreement on the grade during early ascents, as time progresses the community comes to an agreement that the climb is V$X$. Mathematically, this hypothesis can be tested to see what grades actually converge to. If in fact, a climbing grade converged to a single number, as the number of ascents increased, the fit distribution would eventually become more and more sharply peaked around a specific number. This is called a Dirac function. If on the other hand the grade converges to a distribution then there is proof that a grade is in fact not a single number, but instead a random variable.

The fit distributions form a sequence $\{X_i\}_{i=1}^n$, and if the distribution is converging to a single number then this would be shown by the limit converging $\lim_{n \rightarrow \infty} X_i = C$ where $C$ is a constant. Algorithmically, convergence can be met when consecutive elements in the sequence get close to each other $D_{KL}(X_n - X_{n-1}) \leq \epsilon$. where $\epsilon$ is a small number corresponding to an error tolerance. In practice, this means, that after a certain number of ascents if the $D_{KL}$ is small enough, then $X_n$ can be used a proxy to the data. In essence, now the distribution is of the data is known, and it is the same as $X_n$'s distribution.

In the histograms in the section above, both CBS and NMGG have not converged to a single grade as seen clearly in the data. But what about the fit distributions? Below are plots of how the KDE changes as more ascents occur over time. The ascents were ordered in time, and then a distribution was fit to a subset of the data, starting with the first ten ascents, then adding one ascent and then another and so on. The KL divergence between fit distributions is computed to see if the sequence is in fact converging. \footnote{For those who don't commonly see logarithms, recall as $\log(D_{KL})$ approaches $-\infty$, $D_{KL}$ approaches 0.}.

>[!eexample] 
>![[cbsConverge.png]]
>On the left a surface of fit distributions, and on the right is the pairwise KL divergence between the adjacent fit distributions.

>[!eexample] 
>![[nmggConverge.png]]
>On the left a surface of fit distributions, and on the right is the pairwise KL divergence between the adjacent fit distributions.}

A Gaussian Mixture model was selected for CBS, and a Normal distribution was used for NMGG. Setting $\epsilon = 10^{-8}$, both sequences can be considered to have converged. This demonstrates that the climbs are in fact generating a grade that is random quantity rather than a fixed number.
 
# Conclusion

What does a climber or interested sports fan gain from using this model over the conventional consensus or personal integer grade? For one, these fit models can be interpreted into actionable information. If one were to integrate under the curve from 0 to 11.75 for the Gaussian Mixture fit to the ascents of CBS, they would get $\approx 54\%$. This represents the probability that someone would experience a "hard V11" or less. One could then use this information to prepare themselves for the likelihood that they might experience a "V11" but there is almost an equal probability that they will experience "V12". Using the same process for the fit Gamma distribution for NMGG, one can only expect a $\approx2\%$ chance that they will experience a "hard V11" or less.

>[!example]
>![[cbsInt.png]]
>![[nmggInt.png]]
>Above is a visualization of computing the probability of expierencing at most a "hard V11" on both CBS and NMGG. 

Also, this interpretation of grades can better inform how grades are philosophically considered. Viewing grades as a random variable that each climber samples from when they complete an ascent adds an interesting perspective on grades in general. This injects a certain amount of grace when hearing what others think about a particular climb. Because it is mathematically impossible that one will have the same experience as another.

Hopefully climbers will think critically about *bias*. As discussed earlier *bias* is not easily estimated and the assumptions made to do so are inherently flawed. Hopefully this motivates climbers to be thoughtful when reporting their grade. Choose to report not just the grade that feels good or the one that others take, but really what one thinks they experienced. Conscious *bias* is dishonest and does not help others in estimating the difficulty they will experience when they attempt the climb.