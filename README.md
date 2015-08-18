# HBP Collaboratory documentation example

This projects shows how to set up your documentation project with the
hbp-collaboratory-sphinx-theme git submodule. The documentation is
located in the [doc](doc/) folder and the following steps have been
executed to include the
[hbp-collaboratory-sphinx-theme](https://github.com/HumanBrainProject/hbp-collaboratory-sphinx-theme)
submodule:

* Add submodule: `git submodule add git@github.com:HumanBrainProject/hbp-collaboratory-sphinx-theme.git`
* Create a python virtual environment: `virtualenv venv`
* Install sphinx into venv: `venv/bin/pip install sphinx`
* Make sure you have Node.js, bower and grunt: `npm install -g bower grunt-cli`
* Install the dependencies: `npm install`
* Install the hbp-collaboratory-sphinx-theme bower dependencies: `(cd hbp-collaboratory-sphinx-theme; bower install)`

Now that our environment is set up, go to this repository in your terminal and run grunt:
```
grunt serve
```

This task will open your browser with the example documentation project and
refresh it automatically when there are changes to the theme or documentation
files.
