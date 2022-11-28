source /etc/profile
go env -w GOPROXY=http://192.168.20.10:8081/repository/go-group/
go env -w GO111MODULE=on
npm config set registry http://192.168.20.10:8081/repository/node-group/ #使用淘宝源 registry，下载更快
sudo apt-get install protoc-gen-go

base_dir=$(
  cd "$(dirname "$0")"
  pwd
)

#go env -w GOOS="linux"
#go env -w GOOS="windows"  # 打包成exe文件
#go build -a -installsuffix cgo -o main

#go env -w CGO_ENABLED=0
#go env -w GOOS=windows
#go env -w GOARCH=amd64


#监听性能
#_ "net/http/pprof"
#	go func() {
#		http.ListenAndServe("0.0.0.0:6060", nil)
#	}()

#更新包
#go get -u && go mod tidy
#go get -u all

#go build -a -installsuffix cgo -o Pro


#cd vitePage

npm install -g npm-check-updates #ncu 更新依賴
ncu -u && npm install
npm install -g npm@9.1.2
npm i

