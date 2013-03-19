## Pimptro
This is my first attempt at creating a Tritium project to optimize a desktop site on my mobile device. In about 4 hours at a coffee shop, I was able to improve the user experience of the sxsw schedule site. The project adds a couple interface buttons to better navigate the schedule, left-justifies the content of the entire page, and pushes the list of sponsors to the bottom.  
'A++++ Would Develop With Again'

## Before Running This

To run this project, you must have the Moovweb SDK installed on your system. Installation is easy - just go to [the download page on the Moovweb site](http://console.moovweb.com/download) to download and install.

We have lots of informative guides, videos, live help, documentation, and even a book on how to use Moovweb. You should be able to get up and running in 30 minutes if you visit [console.moovweb.com](http://console.moovweb.com).

You might find [the page about the scripts folder](http://console.moovweb.com/learn/reference/configuration/pages) useful for starting to write Tritium, and our [documents on the stylesheets folder](http://console.moovweb.com/learn/reference/configuration/stylesheet) for information on how we structure our stylesheets.

## Launching

Typically, on Mac or Linux, just browse to this project folder in a terminal and then run the following command:

    sudo moov server --auto-hosts

Then, just browse to [mlocal.schedule.sxsw.com](http://mlocal.schedule.sxsw.com) and you are ready to start developing!

## Deployment

Moovweb uses a git-based deployment system. To deploy, just type

    git commit -a -m 'New code'
    git push origin master

## More Info

See detailed documentation for Moovweb at [console.moovweb.com](http://console.moovweb.com).

## Domains
Remember to put all domains you're going to hit in your etc/hosts or to run your server with the `-auto-hosts=true` option.


    127.0.0.1   mlocal.schedule.sxsw.com
