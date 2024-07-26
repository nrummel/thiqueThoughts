---
title: <% tp.file.title %>
draft: false
tags:
---
## Background 
Comparison of achievement is fundamental aspect of sport, and for some sports the measurability of the activity allows for an objective view. For instance, in track and field, barring a large wind, times are comparable even if one race took place on the other side of the planet from the other. Other sports the quantification of difficulty is less straight forward. Is a tail fip more impressive than a three sixty on a skate board? Does a double back tuck take more skill and strength than a front layout with a full twist for gymnasts?  Experts in these sports will answer confidentially, but it can be hard as an outsider to know who to believe. Even as those who participate in these less measurable sports can be confused or uncertain on how to judge what feats are the most impressive and ground breaking. In many ways, the experts are just trusted at face value, but to me this is somewhat unsatisfying.

``` ad-bug 
title: Citations
I would like to cite something here for the sports I am less familiar with.
```

Rock climbing poses an interesting landscape of comparison. The sport is still somewhat not measurable in that difficulty does not entirely spring from speed or strength, but climbers attempt to label each climb with a numeric value to specify the difficulty of their experience. This paper focuses on a specialty of the rock climbing called bouldering. Bouldering is a form of rock climbing done without ropes. This form of climbing focuses specifically on difficulty.

Culturally, a main focus of many boulderers is that of progression. The hope is that a climb graded the same grade as another should have comparable difficulty. Their are many grading scales, but in this paper we will be using the Hueco grading system which goes from "V0" to "V17" iterating by integer values. For instance, starting at the bottom and making it to the top of a boulder could be graded "V5", while a more difficult climb would be graded "V6". This quickly becomes complicated because many factors can affect the difficulty an individual experiences on a climb. One's physiology, the weather, and the equipment used all can affect and one own bias all contribute to the grade they report. This can cause disagreement on what the true grade of a boulder is. In someways this can lead to grades seeming somewhat random or at least that the current grading system is flawed.
## Proposed Model
$$W = X + Y$$
- $W$ is the reported grade that is sum of the expierence difficulty and reporting bias
- $X \sim f_X(x; \gamma, \theta)$ is the expierenced difficulty
- $Y \sim f_Y(y, \alpha)$ is the reporting bias
### Expirenced Grades
It is assume that the expienced difficulty can be influenced by a number of personal $\gamma$ and enviornmental factors $\theta$ that are not necessarily random, but this personal information is not always readily available in current datasets or there is not enough data to define the relationship well between $\gamma$ and $\theta$ and the pdf of $X$. If the relationship were well definied one could look at the conditional pdf $f_X(x|\gamma, \theta)$ to estimate their expirence difficulty on a particular climb. Instead our model tries to give an estimate of the expierenced difficulty unconditioned on this individual specific or enviormental condition specific information. 

An obvious realization of this is to see that the best fit distribution is one that is multimodal, and thus a mixture model or at non-Gaussian model is appropriate. 
``` ad-note 
title: Visualizing Expierenced Difficulty
![[dist.png]]
Above are candidate distributions for a hypothetical "V5". All have a mean or consensus grade of "V5", but with different behavior. The normal distribution is probably how most of us think how grades behave, but in reality the Gamma and Gaussian mixture are options as well. The Gamma describes a climb where most people feel the climb easy for "v5", but with a non-negligible minority experiencing the climb much more difficult for the grade. Similarly, the Gaussian mixture describes a climb where 60% feel the climb is around "V3", but 40% feel the climb is around "V8". This could be because the climb is very height dependent.
```
### Reporting Bias
It is a well known phenomena that bias can trickle into many parts of human existence. Bias's presence in climbing grades is somewhat obvious because there are many motivations for climbers to report something other than their true expierence on a climb.  Depending on the individual, the bias they bring into their reported grade could be a function of personal gripe specific to the climb, or a philosophical unwavering position. In general it is assumed that bias is dependent moreso on the individual. Taking this into account, this model attempts to  observe and account bias for each individual. The end goal being to isolate expierenced grade from the reported grade. This is done simple by subtracting the expected bias from each reported grade.  
$$ \{X_i\}_{i=1}^{n} \approx \{W_{i}- E[Y_i]\}_{i=1}^{n}$$
``` ad-question
title: Syntax/Math
Is this really the right way to write/think about this? 
```
Currently, debiasing is done by estimating each user's bias by taking a sample , then comparing each reported grade in the sample to the mean (consensus) grade.  The current algorithm for estimating individuals bias is described more thouroughly in methods.

## Methods
### Data Collection 
I spent a considerable amount of time working out how to get access to the world's largest collection of reported climbing grades on [8a.nu](https://www.8a.nu/) in such a way to leverage the dataset in a reasonable amount of time. This involved writing custom web-scraping tools that directly access the api of the websites backend. This allows for a more efficient transfer of data from the server to the local machine where the computational work presented occurred. The code was written in python, and is availbable on my github (maybe use [binder](https://mybinder.org/)).

The data for each ascent it given in a dictionary form. It contains: 
- The name of the ascentionist (climber)
- The difficulty: reported as an integer
- Intergrade hard/soft: this specifies if the ascentionist believes the grade is difficult or easy for the grade respectively
- Other qualitative descriptors not incorporated into the analysis

The integer grade reported is digested into the algorithms as that integer plus 0.5. For instance a "V11" would be interpreted as a 11.5. The hard and soft identifiers modify the grade by 0.25, so a "hard V11" would be considered 11.75. A "soft V11" would be 11.75.

### Debiasing 
Estimating bias is tricky in many ways. For starters, bias may not be random at all. Depending on the individuals background and expierence, they have a different idea of what "V$\#$" means. Some feel it is their duty to say climbs are easy to keep others in check, or they may believe grading climbs more difficult allows to counter balance this phenomena. Other motivations exist, but it remains that bias is a product of the individual climber. Bias may be a subconsious piece that a climber adds to their reported grade, or it could be very premeditated. Unconsious bias may be better modeled by a random variable, while the consious bias may be more or less constant. 
``` ad-note
title: Debiasing Algorithm Psuedocode
![[Debiasing Algo.png]]
```
``` ad-question 
title: Bias
I am not being very precise. 
*Jem how would you approach discussing this mathematically?*
```
### Fitting the data
Used out of the box solutions from *scipy* and *sklearn* both are python packages widely used for machine learning and statistics. *scipy* uses maximum likelihood estimation (MLE) for parameter estimation. While *sklearn* uses [expectation maximimization](https://scikit-learn.org/stable/modules/generated/sklearn.mixture.GaussianMixture.html#sklearn.mixture.GaussianMixture.fit) . My understanding is that this is just an iterative method to approximated MLE's ([Wiki](https://en.wikipedia.org/wiki/Expectation%E2%80%93maximization_algorithm)).

``` ad-question
title: Paramater Estimation
This is obviously a minimum working example, but gives an initial glance how these distributions behave, but I am unconvinced this is a final solutions. *Perhaps custom UMVUE* (I think that we did this for $\Gamma$, albeit with one param fixed).? 

Also, EM seems too heavy duty for our use case, but that doesn't mean that it is inaccurate/incorrect. *What do you think Jem*?
```

## Case Study: "The Dali Wall" 
Two boulder problems where chosen from Mt. Evans. While the climbs are adjacent to each other on "the Dali Wall," they pose different challenges to a climber. First, "Clear Blue Skies" (CBS) sits in the middle of the wall with brutally small holds that are slippery to the touch. The difficulty mostly derives itself from making relatively small but powerful moves between these small holds. On the right side of the wall is "No More Greener Grasses" (NMGG). This climb is a similar number of moves, but covers much more distance. The holds are larger and the wall is steeper. Currently, both are considered to be around "V11" or "V12", but their history is rich and peoples opinion's surrounding the relative difficulty of each climb is fraught with controversy.
``` ad-note
title: "Clear Blue Skies"
![[CBS.jpeg]]
Above we see Jess Walker climbing on Clear Blue Skies at Mt. Evans. Jess has done both climbs, and was of the opinion that Clear Blues Skies is the more difficult of the two.
```
### Establishing Convergence
In mathematics, the idea of convergence is rich with meaning. Pertinate to this discussion of modeling climbing grades is demonstrating that the behavior of the data eventually reaches an equilibrium. Commonly, climbers discuss the current grading system reaching a "consensus" grade. The data for these two climbs does not really demonstrate a convergence to a constant,  but it does converge to a distribution. (Possibly mp4 showing the fit of the data not changing over time...)

``` ad-note 
title: Visualization of Consensus 
![[nmggTime.jpeg]]
![[cbsTime.jpeg]]
Both show the running average debiased grade with error bars showing one standard deveation from the mean. This is establishing that while the grade had more variability in early ascents as time went on a consensus was reached. 
```
``` ad-question
title: Convergence
Jem: 
- What should I be trying to show here?
- Is this worth bringing up? 
```
### Discussion of Dependence on Conditions
While the mathematical formal relationship between conditions and the expierence grade is not considered in this paper. Qualitatively looking at the time each ascent occured and the grade reported can give insight in if a climb is noticably condition dependent.
``` ad-note
title: Visualization of Conditions
![[nmggMonths.jpeg]]
![[cbsMonths.jpeg]]
This shows what debiased grades are taken in which months. If it is assumed similary conditions exist in certain months, then dependence on condtions can be qualitatively established. Here is appears that CBS is much more condition depended that NMGG, because the ratio of "V11" vs "V12" in a given month changes.
```
### Modeling Real World Data
After running the debiasing algorithm and fitting several distributions to the data, the following were produced
``` ad-note
title: Fitting to the Data
![[nmggFit.jpeg]]

After debiasing the data this climb appears to be unimodal. Which indicateds that regardless of the conditions or personal aptitudes, one can expect to expierence a "soft V12" when they attempt "No More Greener Grasses". Some variablity in the grades taken versus the month of the ascent indicates that this boulder may be easier when conditions allow.

![[cbsFit.jpeg]]

"Clear Blues Skies" after using several models, the gaussian mixture model describes the data the best. This shoes that depending on one's procivities or the conditions, this climb may feel noticably different in difficulty. Qualitatively, this makes sense because the holds are much "glassier" and the positions may suite those with smaller bodies or more flexible hips. 
```
``` ad-question
title: Measuring "Goodness of Fit"
My thought is to look at KL-divergence because of it's application in many optimization routines I have used before. I don't think this is exactly what I want to do, but I would like to persue a rigorous metric.

*Jem*:
- What would be a good path forward?
- Should I report difference between different models used? 
```
## Conclusions
Using random variables to model climbing grades gives a more accurate view of how climbs pose difficulty to the climber. It also allows for there to be a precise discussion around difficulty. Also, including bias allows us to account for climber specific information rather than only considering the reported grades by themselves. 