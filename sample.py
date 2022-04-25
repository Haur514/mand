import git
import os

url = 'https://github.com/Haur514/mand'

to_path = './foo'

if not os.path.exists(to_path):
    git.Repo.clone_from(url,to_path)
else:
    git.Repo().remotes.origin.pull()

with open('foo/bar.txt','wt') as fp:
    fp.write('hogehoge')
    
repo = git.Repo()
repo.git.commit(".","-m",'\"Commit Log\"')
origin = repo.remote(name='origin')
origin.push()