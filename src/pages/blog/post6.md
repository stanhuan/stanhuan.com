---
title: Implementing a collaborative knowledge management system
subtitle: Design Challenge
date: '2019-03-01'
featuredImage: https://cdn-images-1.medium.com/max/4092/1*dfx_vc6N3F7vHuzPppVahQ.png
---

![](https://cdn-images-1.medium.com/max/4092/1*dfx_vc6N3F7vHuzPppVahQ.png)

The following is a report based on the design decisions that I had made during my second internship.

## Executive Summary

In January of 2017, work began on implementing the knowledge management system. This new knowledge management system was meant to be an internal platform which will help improve knowledge sharing within PointClickCare. A knowledge management platform is a system where information can be accessed, stored and shared. The purpose of this report is to explain the need for such a system, define design criteria and requirements and describe design decisions that were made when selecting the best solution as opposed to the other alternative solutions.

The main goal for this application was to provide a collaborative, question and answer platform for employees to ask and answer questions which will improve the availability of knowledge within the organization. Solutions were expected to be scalable for future growth, quick and snappy, completely self-sustaining, free, implemented in less than four months and meet all the security requirements for the company. Solutions for this project were judged based on three evaluation criteria: features, customizability and support.

The best and final implemented solution was AppOverflow, powered by the open-source platform Question2Answer. This solution met all the functional, non-functional, constraint and evaluation criteria and was rolled out to select departments on April 24. The final product is heavily influenced by Stack **Overflow, a popular website for programmers to ask and answer questions. This is due to the gamification element to the website which can incentives users to continue interacting with the website regularly.

Several alternative platforms were also considered for this project but were ultimately determined to be inferior when compared to the final solution due reasons such as lack of support, implementation cost or lack of customizability.

Limitations were also discussed and analyzed in this report. It is recommended that resources continued to be put into further development of AppOverflow and that the platform is closely monitored so that new improvements can continue to be made, helping the platform achieve the goal of improving knowledge sharing within the organization.

## Introduction

### Purpose of the Report

PointClickCare Technologies Inc., headquartered in Mississauga, Ontario, Canada is “North American’s leading cloud-based software platform for the senior care continuum” [1]. “For the past 20 years, PointClickCare has been the leading electronic health record (EHR) vendor for the long-term and post-acute care (LTPAC) market” [1]. Recognized as the #1 long-term care software vendor by KLAS Research and one of Canada’s best managed [1] and fastest growing technology companies by Deloitte [2] “the company employs over 1,200 people and serves over 14,000 skilled nursing facilities, senior living communities, and home health agencies across North America” [1].

With such a fast-growing company like PointClickCare there are unique challenges that they face regarding knowledge management and information access between employees. In January 2017, as a part of the UI/UX architecture team under the Technology and Shared Services department at PointClickCare, I was tasked with the problem of improving knowledge sharing with a new software platform.

This report will go into some technical details and it is expected that the reader will have a basic programming and user interface/experience knowledge. The reader is also encouraged to have background knowledge in knowledge management systems such as *Stack Overflow.* This report covers the design decisions made for the implementation of AppOverflow, a collaborative knowledge sharing platform for questions and answers to be used by PointClickCare employees. First, this report will specify the problem and the design criteria and specifications for this project. Next, this report will detail the implemented solution and explain some of the design decisions that were made. Finally, this report will discuss some alternative solutions that were considered, list advantages and limitations to each solution and compare the different solutions.

### Background Information

PointClickCare employees are divided into a wide range of different departments, with each department supporting the different goals of the company. Appendix A1 lists the four organization pillars (build, sell, deliver and enable) and show how the twenty-five departments within PointClickCare fall into them.

With the vast number of employees and departments at PointClickCare, a knowledge management system will make it easy for employees to quickly learn and share valuable organizational information. The objective of a knowledge management system is to “support creation, transfer and application of knowledge in organizations” [3]. The collaborative knowledge management platform project is designed to facilitate this process within the company.

There were already several knowledge sharing platforms in place prior to the conceptualization of this project. Examples of these include Confluence, the PointClickCare Employee Community, Yammer and GreenPages. One thing that is missing from the existing array of solutions is a place for employees to ask questions and contribute their knowledge. This new collaborative question and answer (also referred to as “q&a”) system is designed to enhance and work with these existing platforms to facilitate the sharing of knowledge within PointClickCare.

A knowledge management system is used to “provide a means to assemble and act on the knowledge accumulated throughout an organization” [4] and a collaborative system is used to “facilitate communication and teamwork among the members of an organization and across organizations [4]. With these definitions in mind, this project will aim to satisfy both definitions.

## Problem Specifications

### The Current State

Organizations spend countless amounts of money and time to ensure that their employees are as knowledgeable as possible. Information and knowledge has always been an invaluable asset at the core of every company which is why knowledge management systems are commonplace in most businesses. Organizations need a way to store and share all this information in a way that is accessible for employees. For this reason, employees at PointClickCare have access to several different platforms. Table 2.1 shows the existing options available for storing and sharing information.

![*Existing Methods of Receiving Information at PointClickCare*](https://cdn-images-1.medium.com/max/2000/1*qlOdTVuZps76l6ha3PRriw.png)

Each existing method provides different types of information presented in different ways with various levels of interactivity. The Employee Community is a SharePoint website that employees can view but not edit while the Confluence page is a wiki which is a “site that can be modified or contributed by users” (e.g. Wikipedia) [4]. The Yammer platform is an enterprise social network more akin to Facebook which allows users to post anything as opposed to email alerts which can only be viewed. The GreenPages is a question and answer directory, which allows users to add new questions with their own answer. With all these existing systems in place, there still is a major use case that is not accounted for.

### Problem Description

A major use case that is missing from the existing portfolio of information management systems is a collaborative question and answer platform. An example of this scenario would be if an employee had a question about an error message that appeared while setting up specific PointClickCare software. If they do not immediately know the answer or know of someone who would have the answer to this question they would have to resort to using one of the platforms listed in Table 2.1. Confluence may have a developer software setup guide but may not have documentation about the specific error that the employee might be facing. The question would be off-topic and a solution will be unlikely to be found in an Email Alert, the Employee Community, Yammer or the GreenPages. When and if the employee finds a solution to their problem they can add it to the Confluence page but have no incentive to do so. With this new platform in place, the employee can post their question which can be viewed by the entire company and users can contribute their answer and collaborate to determine which is the best answer. The question then remains on the website for future reference.

Information is currently spread over 1,200 employees in 25 different departments and 8 office locations across 3 different countries. This can make it extremely difficult to locate which employee has an answer to a specific question. There is a need to implement a new knowledge management platform where employees can collaborate by asking questions and providing answers to help the employee community. This will improve the accessibility of information allowing employees to get quick answers to their questions, which can drastically improve the efficiency and productivity of employees. The product will be an internal question and answer (Q&A) website for the 1,200+ employees at PointClickCare.

### Design Criteria and Constraints

The goal of this project is to create an application that would allow all employees to collaborate and share questions and answers. There are some functional requirements that are required to be met for this new application. Table 2.2 is an Engineering design specification which lists the functional and constraint requirements of this project. The application must be able to support an account for every employee of the company, which makes 1,200 the minimum number of users it can support. We also want the web application to be quick and easy to use, aiming for a performance of 1s or better when interaction with the site. This new application should also be self-sustaining, meaning that once it is set-up and running it will not require intervention to keep the site from achieving the goal of improving the accessibility of information by providing a collaborative place for questions and answers.

A constraint requirement of the application is that it should not require any additional cost to implement. Because this project is to be implemented during the Winter 2017 coop term, the implementation time required should be less than four months. One final constraint requirement is that the work and information employees encounter is proprietary and confidential and because this information has the potential to appear on this website, it must meet all the security standards in place. Security standards such as, on-site hosting, inaccessibility outside the company intranet and the disabling of persistent cookies.

![*Engineering design specification for the project*](https://cdn-images-1.medium.com/max/2000/1*HL8oBymlPzbkQPl8Y6LtnQ.png)

A number of non-functional requirements also apply to this project. First of all, if modifications to the function, features or style of the website are required than it should be relatively easy for changes to be made. Secondly, there should be an easy way for users to add code, which will display with correct syntax highlighting. This is an important requirement for any software company looking to store corporate information. Furthermore, there should be a way to categorize questions which will allow users to see information that is relevant to them. Finally, a reward system feature would encourage participation and encourage users to post quality questions and answers on the website making it extremely beneficial.

Solutions that meet the above requirements are then judged by three evaluation criteria. The first criteria is features. These features are additional functions outside the basic question and answer collaboration which will can improve the user experience in a variety of ways. Whether it allows users to share interesting questions to colleagues or contains powerful reporting functionality, any relevant additional feature will be considered as an advantage when evaluating solutions.

The next evaluation criteria is customizability. We recognize that every organization is unique and want the ability to make any changes to the platform to fit with our organization. This also helps us add custom features and additions which will improve the experience with using the application.

The final evaluation criteria is support. The platform that is chosen in the end should be well supported by the developers and the community. A well-supported piece of software will allow for continued updates which can improve functionality and security. It will also allow for community modifications and should ideally have documentation that is easy to understand.

## Accepted Solution

The accepted solution, named “AppOverflow” was launched in alpha on February 2, 2017. As shown in Figure 3.1, it then followed a phased rollout schedule before a general release to the Engineering and Product departments on April 24, 2017.

![*Software Release Life Cycle for AppOverflow*](https://cdn-images-1.medium.com/max/2000/1*lU_5uijnxY_1UXcrfRXqoA.png)

The final product is heavily inspired by Stack Overflow, the popular programming knowledge sharing community from the Stack Exchange network of communities. One reason why Stack Overflow is so popular is because of its “unique motivation features” [5]. The Stack Overflow website uses a point and badge system as symbols of achievement to incentives participation. This leverages the power of collaboration by adopting principles of gamification [5]. Gamification refers to the practice of acknowledging users’ achievements, encouraging them as they progress through levels and eventually gets users emotionally engaged in the desired behaviour. It can foster the feeling of connectedness within the community, which “can elicit continued contributions” [5]. According to a 2015 study published for the ACM conference on Computer-Supported Cooperative Work and Social Computing, badges and achievements received by a user had a significant impact on the activity which reaffirms that these achievements induce users to engage more in the activity. They also found that badges “induce more engagement in a broader set of activities (not just the activity for which the badge is designed), presenting evidence that users internalize the incentives provided by earned badges” [5]. These effects outlined in the study will greatly enhance the effectiveness of this new knowledge management system.

The implemented solution is based off the open source platform Question2Answer designed to power Q&A websites. Question2Answer is built with PHP and MySQL which is “scalable to millions of users and posts” [6]. It is currently powering 20,674 sites in 40 different languages, some of which have over 60,000 users and 98,000 questions [6]. It is clearly a powerful system able to fulfil our constraint requirement of supporting 1,200 users or more. The final solution is also quick and snappy, the average loading time of the homepage (Figure 3.2) is 420ms, and all other interactions with the website are well below the 1s limit in our second constraint requirement. The website is also completely self-sustaining, requiring no intervention for users to use all features of the site. Employees can use the website to register, sign in, edit their account, discover and post questions and answers themselves. There is also a flagging functionality which allows users to flag inappropriate questions which automatically are hidden. This clearly demonstrates that the implemented solution satisfies all the given constraint requirements outlined in Section 2.3.

![Screenshot of the AppOverflow home page](https://cdn-images-1.medium.com/max/3196/1*B8BPvpbq8_7QVsyDj42_sQ.png)

All the constraint requirements are also being satisfied in this implementation. Since AppOverflow is based of free, open-source software, there was no additional cost associated with implementing this project. It was also relatively easy to develop and launch, launching before the end of April 2017 and satisfying the second constraint requirements. Finally, security is very important for a web application of this nature. AppOverflow contains security features including on-premise hosting, disabling of persistent cookies and autocomplete and resistant against cross-site scripting and SQL injection attacks. A security review was done on this product and the security department at PointClickCare approved the application.

In regards to non-functional requirements, AppOverflow is extremely easy to modify. The platform that AppOverflow is based off, Question2Answer is open source complete with developer documentation to assist others in changing the code. Functions of the application can be changed with the use of plugins which can be created by anyone to add additional features to the application. One example of a plugin is the Syntax Highlighter and Code Snippet plugin. These plugins allow the application to support code snippets when asking and answering questions with the correct syntax highlighting which enhances the ease of use of the website. By default, the application allows for tagging and categories up to 4 levels deep [6] which helps organize the questions posted onto the site. Finally, AppOverflow contains may ways to incentives users through awards. Users can earn points and badges through interactions with the website. There is also a monthly and tag leaderboards which promote users who have the most points in a given month, or users who are experts in a given field which is the final non-function requirement.

4 Alternative Solutions

4.1 Mamute

Mamute is another question and answer platform like Question2Answer “developed in Java on top of CDI and VRaptor 4” [7]. This is advantageous because Java is the main programming language used at PointClickCare. It provides unique features out of the box such as edit history and thread following. Unfortunately, there were also major disadvantages to using this platform such as the limited documentation and support from the developers and the community, which prevented us from selecting Mamute.

4.2 Stack Overflow Enterprise

The success and popularity of the website Stack Overflow lead us to consider Stack Overflow Enterprise. Stack Overflow Enterprise is a private version of Stack Overflow for businesses that wish to allow employees to share and find answers to proprietary questions [8]. This option has one distinct advantage: brand recognition. “Unlike standard knowledge sharing platforms, over 95% of the world’s programmers know and use Stack Overflow to learn and grow their technical skills” [8]. This means that almost all programmers are already familiar with Stack Overflow and can instantly understand and benefit from this platform. In the end, we did not choose this solution because it is a closed system sold in a software as a service (SAAS) model. This means that it would be more difficult to make changes and it would be an additional cost.

4.3 Atlassian Questions for Confluence

Another popular choice is Atlassian’s Questions for Confluence which is used by over 3,000 organizations worldwide [9]. Questions for Confluence is also an internal Q&A tool for businesses to crowdsource answers. The main advantage of Questions for Confluence is that it is created by Atlassian, the company behind Confluence (wiki document system) and JIRA (issue tracking system) both of which are used at PointClickCare. Because of this, Questions for Confluence also features integration with Confluence and JIRA and can integrate easily with the existing setup. The additional cost required for this platform and the closed source system again caused us to remove this option from consideration.

4.4 Comparing the Implemented Solution with the Alternative Solutions

According to the decision matrix analysis in Table 4.1, Question2Answer is the best design option for implementing a question and answer platform. Stack Overflow Enterprise and Atlassian Questions for Confluence are paid options, lack customizability and have limited features compared to the open source options. Stack Overflow did have the advantage of having a smaller learning curve due to the brand recognition mentioned in Section 4.2. Mamute lacks community support when compared to the rest of the solutions.

![Decision Matrix Comparing the Implemented Solution with the Alternative Solutions](https://cdn-images-1.medium.com/max/3396/1*iTYzyHpmwbDpJpQsA_hYvg.png)

Regarding the evaluation criteria, features, customizability and support, Question2Answer again is shown to be the best option. Although there are unique advantages and disadvantages to each system, this shows that Question2Answer is the most favourable solution in this context. The main advantages of choosing Question2Answer as the platform for AppOverflow is the extensibility of the free open-source software and the amount of community support behind the product.

### Limitations to the Implemented Solution

There are certain limitations to the implemented solution. First, there is a possibility that the gamification aspect may promote quantity over quality. This is because badges and points are awarded for interactions on the website. We want to promote quality questions and answers but those trying to maximize their amount of points may feel the need to provide low-quality responses in order to boost their scores on the website. A possible solution for this problem is changing the point scoring system to promote quality over quantity or educating users of the site. The gamification aspect can also detract new users who may become intimidated with having scores and points associated with their personal profile. Another limitation to a question and answer platform is the possibility of promoting inaccurate or out-of-date information. Some questions may not be viewed by the right people to elicit the correct response, incorrect responses may be posted as answers or answers that were once correct become incorrect which causes the platform to spread false information. These limitations are common for all collaborative knowledge sharing websites and these limitations described will need to be monitored. Finally, Question2Answer is open-sourced software which depends on volunteer contributors to update features and improve the platform. There is currently a very small team working to add updates to the platform which leads to very infrequent updates for the platform.

One limitation that was observed during the rollout of AppOverflow was a lack of new questions being created on the website. During the rollout of AppOverflow, upon receiving an invitation, most users signed up for an account and explored the website. Some provided feedback, voted on questions and answered questions that were posted but there were no new questions being created. It was clear that there was an interest in this platform but without any new content being created this brought user retention rates down as shown in Figure 4.1.

![30 Days Statistics (March 29 — April 28) for AppOverflow](https://cdn-images-1.medium.com/max/3716/1*OCmvGUNvVKWwKuARwDUcFw.png)

## Conclusions

The original problem set out in this report was to implement a new collaborative knowledge management platform for employees of PointClickCare to ask questions and contribute answers. Specifications were laid out for the project including user load, user experience, performance, maintainability, cost, and security requirements. Solutions were to be determined based on the evaluation criteria: features, customisability and support. The features available is the most important criteria because the number of features available is the main differentiator between different platforms. The next most important criteria is customisability. It should be relatively easy to make changes to the implemented solution. The final criteria is support; the platform used to implement the final solution should ideally be well supported by the developer and the community.

The final implemented solution is AppOverflow, powered by the open-source Q&A platform Question2Answer. Design decisions made during the implementation of AppOverflow were highly influenced by the popularity of websites like Stack Overflow. This is because of gamification element of the site which has the possibility to induce more engagement in the website which in turn makes the platform more effective at improving access to organisational information.

Question2Answer, the platform that AppOverflow is based off, is built with PHP and MySQL which is scalable to millions of users and posts, quick and snappy and completely self-sustaining. It is also free, implemented in less than 4 months and met all the security requirements for the company. This satisfies all the functional and constraint requirements outlined. It also satisfies the evaluation criteria by having an extremely large variety of features, is completely customizability and is well supported by the community.

Alternative solutions were also considered for this project. Mamute was another open source platform designed in Java but lacked documentation and support from developers and the community. Stack Overflow Enterprise and Atlassian Questions for Confluence are both paid closed-sourced systems delivered in a software-as-a-service model. Those factors and learning curve, customizability and features made these options inferior to the Question2Answer platform.

AppOverflow does have some limitations. The platform suffers from some issues that plague many online communities such as the promotion of quantity of quantity, discourages new users from interacting, inaccurate or out-of-date information and lack of new content being created. The final chosen platform Question2Answer is also heavily dependent on volunteer contributors to maintain the project and there are no assurances that they will continue doing so regularly.

## Recommendations

AppOverflow is a powerful tool which, if utilized properly, can add tremendous value to the company. Although the web application is self-sustaining, it is recommended that resources are continued to be put into the project to improve it. Recourses that can be considered include developer support, training and/or internal marketing.

Regarding the limitations outlined in Section 4.5 of this report, it is recommended the project be monitored closely for the limitations outlined and adjust the functionality of the platform accordingly. Another recommendation is to make a larger effort to promote the system to employees in order to increase user retention rates. This can be done in multiple ways such as by having monthly rewards, training sessions, promotion during orientation and more.

Next steps for AppOverflow can begin after a minimum of six months, if the platform is still producing desired results. This can include modify and expanding the platform outside of the Engineering and Product departments, implementing other new features, optimisations and security improvements or re-evaluating the other proposed alternative solutions.

## Acknowledgements

I would like to acknowledge Ken Newman for providing me with this collaborative question and answer knowledge management platform project, for his assistance promoting the project and his help uploading changes to the web server. I acknowledge Muhamad Samji for his help installing and setting up the program on the web server initially and support afterwards.

I would also like to thank the members of the UI/UX Architecture Team: Stephen Cunliffe, Jacob Farber, Ken Newman and Muhamad Samji for their guidance, feedback and mentorship during my co-op term and countless others at PointClickCare who helped with the project by providing feedback.

## Sources

[1] PointClickCare Technologies Inc., “PointClickCare Technologies Named One of Canada’s Best Managed Companies for the Fourth Consecutive Year,” PointClickCare Technologies Inc., 9 March 2017. [Online]. Available: [https://pointclickcare.com/pointclickcare-technologies-named-one-of-canadas-best-managed-companies-for-the-fourth-consecutive-year/.](https://pointclickcare.com/pointclickcare-technologies-named-one-of-canadas-best-managed-companies-for-the-fourth-consecutive-year/.) [Accessed 9 April 2017].

[2] PointClickCare Technologies Inc., “PointClickCare Named One of Deloitte’s Technology Fast 50 For 8th Consecutive Year,” PointClickCare Technologies Inc., 16 November 2015. [Online]. Available: [https://pointclickcare.com/pointclickcare-named-one-of-deloittes-technology-fast-50-for-8th-consecutive-year/.](https://pointclickcare.com/pointclickcare-named-one-of-deloittes-technology-fast-50-for-8th-consecutive-year/.) [Accessed 9 April 2017].

[3] M. Alavi and D. E. Leidner, “Review: Knowledge Management and Knowledge Management Systems: Conceptual Foundations and Research Issues,” *MIS Quarterly, *p. 107, 2001.

[4] A. M. Dennis, “Wiki,” Encyclopædia Britannica, Inc., 10 July 2008. [Online]. Available: [https://www.britannica.com/topic/wiki.](https://www.britannica.com/topic/wiki.) [Accessed 24 April 2017].

[5] H. Cavusoglu, Z. Li and K.-W. Huang, “Can Gamification Motivate Voluntary Contributions?: The Case of StackOverflow Q&A Community,” *CSCW’15 Companion Proceedings of the 18th ACM Conference Companion on Computer Supported Cooperative Work & Social Computing, *pp. 171–174, 14 March 2015.

[6] G. Greenspan, “Question2Answer,” [Online]. Available: [http://www.question2answer.org/.](http://www.question2answer.org/.) [Accessed 25 April 2017].

[7] Caelum Group, “Mamute,” Caelum Group, [Online]. Available: [http://www.mamute.org.](http://www.mamute.org.) [Accessed 25 April 2017].

[8] Stack overflow, “Stack Overflow Enterprise,” Stack Overflow, [Online]. Available: [https://www.stackoverflowbusiness.com/enterprise.](https://www.stackoverflowbusiness.com/enterprise.) [Accessed 25 April 2017].

[9] Atlassian, “Questions for Confluence,” Atlassian, [Online]. Available: [https://www.atlassian.com/software/confluence/questions.](https://www.atlassian.com/software/confluence/questions.) [Accessed 25 April 2017].
