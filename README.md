# Angular-mosh
Important git command to add to remote git hub repository.
//Initial Commit
git init

//Staging area
git add. or git add -A

sending files with commit message.
git commit -m "first commit"

copying files to github.com  
1) First create new github repository with plue icon on the right top corner.
2) go to that repository and copy url.

Now run the below command to push to github.
git remote add angular-mosh https://github.com/kokilapatelus/Angular-mosh.git

then push the code to repository.

git push origin

git branch --set-upstream-to=<remote>/<branch> 

If you are planning on basing your work on an upstream
hint: branch that already exists at the remote, you may need to
hint: run "git fetch" to retrieve it.

 If you are planning to push out a new local branch that
hint: will track its remote counterpart, you may want to use
hint: "git push -u" to set the upstream config as you push.

The current branch test1 has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin test1

