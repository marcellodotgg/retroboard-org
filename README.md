# <img src="https://raw.githubusercontent.com/bytebury/retroboard-org/dfe18d872bc710f0a3b4b1c1656e7e17823fc6d5/public/logo.svg" height="24" width="24" alt="logo"> Retroboard.org

An application that allows you to run feedback loops for yourself or with your organization. A retrospective, or
"retro", activity is when an individual or a team comes together and discusses what went well,
what didn't go well, and what actionable things we can do to improve. It's an important practice to
do in order to foster continuous improvement ideas.

The official code behind the https://retroboard.org website. Opened-source for educational purposes. If you, or your company would like to run an on-premises version of Retroboard.org, then please reach out to hey@bytebury.com for licensing agreements.

## About

Retroboard was born out of wanting an opinionated way to run retrospectives. There are many tools today that exist; however, they all require you to sign-in, limit your boards, or want you to pay.

Retroboard.org is different. You don't need an account to create a Retroboard, just enter a name, press go, and share the link with your team. We also are _opinionated_. We think that's a good thing. We give you three columns, What Went Well, What Didn't Go Well, and Action Items. We believe that this will help with decision fatigue. You won't have to worry about changing how you run retro, just follow the pattern so you can focus on these three items.

Retroboard.org is also anonymous. There's no sign-in, so you can feel safe by saying things the team might need to hear &mdash; but keep it professional.

The application is simple by design with only a few core parts of our domain:

## Board

Contains all of the columns for our retrospective as well as all the feedback within those columns.

## Columns

Contains feedback, but they are a grouping of the "kinds" of feedback. For example: What went well,
What didn't go well, Action items.

## Feedback

This contains the feedback from a user, whether it be praise, or something that should be called out.

# 🧠 Core Values

- Keep it simple &mdash; we're an opinionated board, what you see is what you get. No decision fatigue with deciding on colors, column names, etc. Just name your board and get to work.
- Respect each individual's feedback, keep the retroboard a safe place to be listened and heard. Avoid "the blame game" or calling individuals out by name.
- Anonymous &mdash; we have anonmousity built into the application by default. People can share their thoughts candidly; don't ask who wrote what. That isn't the point.
