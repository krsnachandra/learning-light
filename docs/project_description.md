# Project title: Learning Light

## Team members
- Connie
- Vicky
- Chandra

## Introduction

Currently, the free course content on http://lighthouse-labs.thinkific.com exists to serve the need for easily accessible, introductory course content that gives people interested in coding a low-risk opportunity to try it.

Lighthouse Labs staff have expressed to us a desire to move the existing courses from Thinkific to a lighthouselabs.ca subdomain to have more control over the content and its metadata.

In consideration of the likelihood that we will need to be handle potentially sensitive information as part of this project, we have set up a private project repo at https://gitlab.com/cvcfinal/learning-light. Of the LHL staff, currently only Joel has access to it, but view access can be granted as needed.

## Target audience

1. General public, specifically people lacking code knowledge but who think they might be interested in learning
2. LHL marketing team
3. LHL teaching staff, specifically those who are interested in sharing their teaching material for the general public

## Current problems being faced and proposed solutions

1. Problem: Lighthouse Labs content hosted on Thinkific deprives LHL of SEO benefits
  - Proposed solution: move all content to an LHL subdomain
  - Best practice: request a redirect from the current page on Thinkific to the new subdomain

2. Problem: LHL content on Thinkific does not provide easy access to metrics for the purposes of student progress, targeted marketing
  - Proposed solution: LHL-hosted webapp to store metrics in the DB as they are generated, for later analysis
  - Will need input from LHL staff regarding what data points will be useful to them

3. Problem: front-facing app as it stands is currently feature poor and needs improvement
  - Proposed solution: poll sophisticated users for features we take for granted that current course lacks, consider implementing them

Further specific problems to be determined through discussion with primary stakeholders and mentors (currently Tiffany and Joel).

## Expectations

- Team CVC to develop improved front-facing app with primary focus on user/visitor experience
  - Create an obvious feature to attract new users
  - Fix annoyances that cause users to leave
- The following things are out of scope for this project:
  - Actual content generation
  - Metrics collection
  - Long-term back-end maintenance
