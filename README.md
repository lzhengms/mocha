#测试用例

##mocha框架

##断言库
should.js
except.js
chai


#生成覆盖率报告的步骤：

-写好测试用例，录入test文件夹下的文件
-http://siliconforks.com/jscoverage/download.html下载jscoverage包放在目录下
-执行jscoverage ../test  ../result --no-highlight生成一个result目录文件夹，test是源目录，result是目标目录
-cd result进入到reslut目录下，执行mocha assert.js -R html-cov > report.html，就生成了一个覆盖率报告

#持续集成
-travis-ci
-https://travis-ci.com/
-https://travis-ci.org/
-http://www.cnblogs.com/whitewolf/archive/2013/04/14/3019838.html

