::: code-group

```go [服务端]
package main

import (
	_ "embed"
	"fmt"
	"net/http"
)

//go:embed a.html
var html string

func main() {
	http.HandleFunc("/ping", func(w http.ResponseWriter, r *http.Request) {
		fmt.Print(r.URL.Path + "\n")
		fmt.Print(r.UserAgent() + "\n")
		w.Write([]byte(html))
	})

	err := http.ListenAndServe("127.0.0.1:8080", nil)
	if err != nil {
		fmt.Println("服务启动失败，错误：", err)
	} else {
		fmt.Println("服务启动成功: http://127.0.0.1:8080")
	}
}

```

:::
