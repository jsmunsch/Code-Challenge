# Coding challenge provided by Thoughtworks -

## To run the code

`npm install` to install JEST
`npm run test` to run JEST tests
`npm run start` to display the tracks

## TASK 2 - Key notes

- Everything is in Minutes, either 5, 30, 45 or 60
- Morning session lasts 3 hours, aka 180 minutes,
- 1 hour lunch aka 60 minutes
- afternoon session lasts a minimum of 3, maximum of 4 hours, 180 or 240 minutes.
- networking event has to start between 4 and 5 pm
- **We have multiple Tracks running at the same time**
- Judging by the Test Output, we can assume each talk can only be held once. (2 total possibilities)
- Total Amount of Talks : 19
- Total Amount of minutes : 770
- Minimum of minutes per Track : 360 hours
- Maximum of minutes per Track : 420 hours

- Duration of morning session : Exactly 180 minutes
- Duration of afternoon session : 180-240 hours (flexible)

- Average Duration of each Track (statistically) : 385 minutes

- Additional information: Presenters will be very punctual, thus there cannot be a gap between sessions
- No talk title has numbers in it

- Conclusion: The morning session has to be **exactly** 180 minutes long, therefore it would be smart to construct the timetable first. Additionally the lightning talk (5 minutes) can only appear during the second half of the track due to there being no gaps between talks.

## Explanation

What my Code does: it reads the txt file and converts it into strings. Then it takes each string (split by lines) and converts it into a single array with each string being an element.

In order to work with this array, I created an object for each element containing the title and the duration of the talk. **this requires duration to be the last position in the string.** lightning will be treated as 5min as requested.

The previoulsy created Array with multiple objects will then be sorted from longest to shorted duration.

The function subsetSum is able to look for all possible combinations of numbers(duration) combined, that equal a specific number, in our case 180. In this case I decided to just use the first combination that is found due to performance. The algorithm is recursive, it generates about 13xx possibilities for a combined sum of 180.

It would theorethically be possible, that out of these 13xx possibilities only 1 can be used in order for the other combinations to also work out. I just assumed that I can use any combination because I wasn't sure how to handle such large operation. What I also did was using the longer durations and more specific targets first. If I were to sort my Array from smallest to largets, chances are that the last remaining (biggest) numbers might not sum up to my target. In this Case our both remaining targets were 180-240, so the range was 60. Since our biggest duration was also 60 we can assume that I will never not be able to land in that range.

The algorithm generates a result (array) with numbers in it that, combined, reach the target (180 or 180-240). These numbers (that each equal the duration of a unique talk) are spliced from the original array the algorithm handles. For each result a track with talks that match the duration is generated and saved.

As a last step I insert the lunch activity and networking event, combine morning with afternoon talks (since they were being handled sperately) and log them.
