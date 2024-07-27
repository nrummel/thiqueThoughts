---
title: Two Boulders on Mount Blue Sky
draft:
---

Let's see the math in action! I applied this model to a case study by comparing two climbs on Mt. Blue Sky, Colorado: "Clear Blue Skies" and "No More Greener Grasses". Both are given the same integer grade of "V11" or "V12", but there is common disagreement in the community. These two climbs were chosen because of their proximity which somewhat controls for the effects of environmental factors (but weather in the alpine is highly variable so perhaps not). They sit only feet from each other on the same piece of rock. Also, both climbs see many repeats every year providing the necessary quantity of data. Studying these problems isolates significant factors that impact climbers' reported grade. 

While the climbs are adjacent to each other on the Dali wall, they pose different challenges to a climber. First, "Clear Blue Skies" (CBS) sits in the middle of the wall with brutally small holds that are slippery to the touch. On the right side of the wall is "No More Greener Grasses" (NMGG). After discussions with many expert climbers, it is well understood that the difficulty of CBS mostly derives itself from making relatively small but powerful moves between these small holds. While NMGG is a similar number of moves, it covers much more distance. The holds are larger, and the wall is steeper. Currently, both are considered to be graded around "V11" or "V12", but their history is rich and people's opinions surrounding the relative difficulty of each climb is fraught with controversy.

  
>[!example]
>![[CBS.jpeg]]
>Elite climber Jess Walker climbing Clear Blue Skies

At the time of writing, it is more common for ascensionists to grade CBS as "V11" and NMGG as "V12". From anecdotal reports, both take a similar amount of effort and time to complete. Which may indicate the climbs are comparable. It appears that CBS suits a narrower range of morphologies and competencies, and NMGG is more amicable to a broader range of morphologies and competencies. The models described above are applied to analyze these two climbs.
## Obtaining the Data

A considerable amount of effort was spent obtaining access to the world's largest collection of reported climbing grades on [8a.nu](https://www.8a.nu/) in such a way to leverage the data. 8a has been used as the primary logging platform for elite and casual climbers for the last two decades. The database gives a unique opportunity to use statistical and these computational tools. I collected all logged ascents of the climb until the spring of 2023, and the estimated the bias for each climber who has done the climb with the algorithm I mentioned earlier. I subtracted the estimated biases from the reported grades to give samples of the *experienced difficulty*. 
This involved going through the publicly available web interface and isolating the data for each ascent. Programmatically the each ascent is the represented as a collection of the following fields:
- Ascensionist's Name
- Reported Grade: reported as an integer
- Hard/Soft Label: this specifies if the ascensionist believes the grade is difficult or easy for the grade respectively
- Other qualitative descriptors not incorporated into the analysis, but may be useful to incorporated physical conditions or personal aptitudes of each climber in a later study
The integer reported grade is digested into the algorithms as that integer plus 0.5 to place it directly between the grade above and below. For instance, a "V11" would be interpreted as a 11.5. The hard and soft identifiers modify the grade by 0.25, so a "hard V11" would be considered 11.75. A "soft V11" would be 11.25.
## Estimating Grade Distributions

We assume the form of each distribution, and then this becomes a parameter estimation problem. This was done through third party software from [scipy](https://scipy.org/) and [sklearn](https://scikit-learn.org/). Both are python packages widely used for machine learning and statistics. The Normal and Gamma distribution's parameters are estimated using maximum likelihood estimation (MLE). For the Gaussian Mixtures [expectation maximization](https://scikit-learn.org/stable/modules/generated/sklearn.mixture.GaussianMixture.html#sklearn.mixture.GaussianMixture.fit). It is worth noting that parameter estimation generally is a nonconvex nonlinear optimization problem and thus there are few guarantees that we estimate the parameters well. In practice, parameter estimation is necessary, and thus we must try. The techniques used here are standard and used in the sciences widely.  
### Assessing the Distributions

You might ask, "How good of a job am I doing?" I want to know that as well. Good for us mathematicians have developed ways for evaluate how well a distribution matches a sample. 

The first thing to do is a qualitative analysis, look at the histogram of the debiased grades with a fit distribution superimposed. This can give a valuable qualitative picture of if the fit distribution "looks right". 

You should feel unsatisfied with that step, and should ask, "how should the fit distribution be evaluated quantitatively?" There are many metrics one could consider, but one with a particularly interesting interpretation is the *Kullback-Leibler divergence* (KL divergence) defined below. Mathematically, this divergence is rich in meaning, but in this application, it can be interpreted at the "expected surprise" by choosing the fit distribution rather than some true distribution. The KL divergence measures how well the choice of model describes the true behavior of the data.


$$\begin{align*}
D_{KL}(p || f) &= \int_{-\infty}^\infty p(x) \log\left(\frac{p(x)} {f(x)}\right)dx \\
p & \text{ is the pdf of the fit model}\\
f & \text{ is the pdf of the true distribution}
\end{align*}$$

If the KL divergence is small, the fit distribution is, in some sense, equivalent to the true distribution. If the KL divergence is large, the fit distribution does not represent the true distribution. Comparing KL divergences between models can help determine which model better fits the data, i.e., the model with the smaller KL divergence.

An important caveat to note, is that the KL divergence cannot be computed exactly for any of the candidate models because the exact distribution is not known. Instead the KL divergence is estimated by using the CDF of the fit distribution to that of the empirical CDF of the data, see this [paper](https://www.scirp.org/reference/referencespapers?referenceid=2697925) for more details. This is shown asymptotically converges to the true KL divergence, so as the size of the data set increases, so does the accuracy of the estimate.

  

$$\begin{align*}
	\hat{D}_{KL}(p || f) &= \frac{1}{n} \sum_{i=1}^n \log(\dfrac{\delta P_n}{\delta Q_n})\\
	\delta P_n & \text{ is the difference in the fit distributions cdf from the ordered data $i-1$ to $i$}\\
	\delta Q_n & \text{ is the difference in the empircal cdf from the ordered data $i-1$ to $i$}\\
\end{align*}$$

  
>[!example]
>![[cbsFit.png]]
>For all of the available debiased CBS's grades, I fit the Uniform, Gamma and Normal distributions to the data, as well as a Gaussian Mixture, and KDE. We see that the Gaussian Mixture or KDE performs best.
>![[nmggFit.png]]
>For all of the available debiased NMGG's grades, I fit the Uniform, Gamma and Normal distributions to the data, as well as a Gaussian Mixture, and KDE. We see that the Gaussian Mixture or KDE performs best.

The KL divergence varies depending on which distribution is used. While it may be tempting to blindly select the Gaussian Mixture for both climbs, because it does minimize the KL divergence for both out of the distributions tested. Qualitatively, CBS appears to have two modes (peaks) while NMGG visually has one mode with a single outlier. Thus the Gaussian Mixture and the KDE could be overfitting the data in the case of NMGG and likely selecting the Gamma or Normal distribution is more prudent.

>[! todo] 
>Another way to investigate how the new RV models perform is to look at the Kolmorgorov-Smirnov Test (KS Test). The KS Test computes the probability that the data came from a specified distribution. In our case this is almost looking at the process of estimation in reverse. We are asking if the samples of estimated experienced difficulties could have come from the fit distributions. Below is a table for a larger dataset of climbs that corresponds to climbs where the process of fitting distributions to the data is performed and then evaluated with KL divergence and performing the KS Test.

## Convergence to a Distribution

Oftentimes, climbers will say that the grade has come to a consensus. Usually this is conceptualized, that while there may be disagreement on the grade during early ascents, as time progresses the community comes to an agreement that the climb is "V11". Culturally, the consensus grade is valued. Sometimes, this consensus is a calculated average. Many websites collect logbooks of ascents and corresponding grades. Two of the most relevant are [8a.nu](https://www.8a.nu/) and [27crags.com](https://27crags.com/). Still, it is often decided by a de facto authority figure like a guidebook author.

Mathematically, this hypothesis can be tested to see what grades actually converge to. If in fact, a climbing grade converged to a single number, as the number of ascents increased, the fit distribution would eventually become more and more sharply peaked around a specific number. This is called a Dirac function. If on the other hand the grade converges to a distribution then there is proof that a grade is in fact not a single number, but instead a random variable.

The fit distributions form a sequence $\{X_n\}_{i=1}^n$, and if the distribution is converging to a single number then this would be shown by the limit converging $\lim_{n \rightarrow \infty} X_n = C$ where $C$ is a constant. Algorithmically, convergence can be met when consecutive elements in the sequence get close to each other $D_{KL}(X_n - X_{n-1}) \leq \epsilon$. where $\epsilon$ is a small number corresponding to an error tolerance. In practice, this means, that after a certain number of ascents if the $D_{KL}$ is small enough, then $X_n$ can be used a proxy to the data. In essence, now the distribution is of the data is known, and it is the same as $X_n$'s distribution.

In the histograms in the section above, both CBS and NMGG have not converged to a single grade as seen clearly in the data. But what about the fit distributions? Below are plots of how the KDE changes as more ascents occur over time. The ascents were ordered in time, and then a distribution was fit to a subset of the data, starting with the first ten ascents, then adding one ascent and then another and so on. The KL divergence between fit distributions is computed to see if the sequence is in fact converging. \footnote{For those who don't commonly see logarithms, recall as $\log(D_{KL})$ approaches $-\infty$, $D_{KL}$ approaches 0.}.

>[!eexample] 
>![[cbsConverge.png]]
>On the left a surface of fit distributions, and on the right is the pairwise KL divergence between the adjacent fit distributions.

>[!eexample] 
>![[nmggConverge.png]]
>On the left a surface of fit distributions, and on the right is the pairwise KL divergence between the adjacent fit distributions.}

A Gaussian Mixture model was selected for CBS, and a Normal distribution was used for NMGG. Setting $\epsilon = 10^{-8}$, both sequences can be considered to have converged. This demonstrates that the climbs are in fact generating a grade that is random rather than a fixed number.
 
# Conclusion

What you gain from using this model over the conventional consensus or personal integer grade? For one, these fit models can be interpreted into actionable information. If one were to integrate under the curve from 0 to 11.75 for the Gaussian Mixture fit to the ascents of CBS, they would get $\approx 54\%$. This represents the probability that someone would experience a "hard V11" or less. One could then use this information to prepare themselves for the likelihood that they might experience a "V11" but there is almost an equal probability that they will experience "V12". Using the same process for the fit Gamma distribution for NMGG, one can only expect a $\approx2\%$ chance that they will experience a "hard V11" or less.

>[!example]
>![[cbsInt.png]]
>![[nmggInt.png]]
>Above is a visualization of computing the probability of expierencing at most a "hard V11" on both CBS and NMGG. 

Also, this interpretation of grades can better inform how grades are philosophically considered. Viewing grades as a random variable that each climber samples from when they complete an ascent adds an interesting perspective on grades in general. This injects a certain amount of grace when hearing what others think about a particular climb. Because it is mathematically impossible that one will have the same experience as another.

Hopefully climbers will think critically about *bias*. As discussed earlier *bias* is not easily estimated and the assumptions made to do so are inherently flawed. Hopefully this motivates climbers to be thoughtful when reporting their grade. Choose to report not just the grade that feels good or the one that others take, but really what one thinks they experienced. Conscious *bias* is dishonest and does not help others in estimating the difficulty they will experience when they attempt the climb.