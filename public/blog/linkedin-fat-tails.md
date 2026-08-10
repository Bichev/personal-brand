# LinkedIn Post: Fat Tails

---

The bell curve says an 8-sigma day in the S&P 500 should happen once every three trillion years. That is 216 times the age of the universe.

I measured 8,437 trading days. It happens every 5.6 years.

I spent two months on this. 186 crypto pairs, 180 US stocks, the S&P back to 1993, all parameters locked in a JSON file before the first backtest ran so I could not tune my way to a nice answer.

What I found:

Zero of 366 assets were thin-tailed. Not one. Median tail index 1.70 for crypto, 2.25 for stocks. For SPY I measured 3.03, which lands almost exactly on the inverse cubic law physicists published in 1999 from a different dataset. I was not aiming for that number and it showed up anyway.

Bitcoin's extreme days breed more extreme days at a rate of 0.59. More than half of its violent days are echoes of previous violent days rather than fresh news.

Then I tried to make money from it, and this is the part worth reading.

Long breakouts on crypto: 5.4% a year, while holding Bitcoin returned about 50%. Shorting crashes: lost money in both markets and ranked worse than 93% of random-timing campaigns. Buying puts when my fragility signal fired: 76 cents back per dollar of premium. Better than buying blind, still a loss, because VIX averages 30 on exactly those days. The option market can see the dry forest too, and it charges for the view.

Crash probability really does quadruple when my signals arm. The average path after they arm is still up. Being right about the tail and wrong about the middle is still being wrong.

So I went looking for an edge and came back with a ruler. The ruler is genuinely useful, mostly for deciding how large a position can be before a single day ends you.

I wrote it up with five things you can actually play with in the browser: a sampler that shows why one billionaire breaks an average and one tall person does not, the real tail plot with 33 years of data, a forest fire that organises itself into a power law from two rules, a contagion model where two lanes fire the same number of times and only one of them bankrupts you, and all 366 assets on a single ruler, where the entire half of the chart that risk models assume you live in is empty.

Before the equation, the phenomenon. That has been the rule for everything I build.

vladbichev.com/blog/fat-tails.html

Also worth saying: my first data integrity check failed so loudly that I assumed the check was broken. It was not. Coinbase returns candles as low, high, open, close, and my ingest had read them as open, high, low. Roughly 98% of my daily bars had two fields swapped. Everything above sits on the corrected data, cross-checked at 0.9975 correlation against an independent source. Run the check. Then run it again.

#Quant #PowerLaws #RiskManagement #FatTails #Statistics #Trading #Crypto #DataScience #Backtesting #Python #ComplexSystems #Volatility #Finance #Research #Visualization #InteractiveDataViz
