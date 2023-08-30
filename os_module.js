const os = require('os');
const path = require('path');
//windows와 posix 두개의 경로 구분자가 다르기 때문에 유용하게 사용된다.
const url = require('url');
//url을 파싱해주는 모듈이다.url을 파싱하는 방법은 크게 whatwg방식과 노드 방식으로 나누어 볼 수 있다.
const querystring = require('querystring');
//기본 노드 url의 search 부분을 사용하기 십게 객체로 만들어 주는 기능
const crypto = require('crypto');
//문자열을 암호화해주는 모듈 해시 알고리즘과 문자열, 인코딩 방식을 설정하면 암호화된 문자열이 출력된다. 단방향 암호화 방식과
//양방향 방식이 있다.
const fs = require('fs');
//파일을 생성하거나 삭제하고, 읽거나 쓸수 있게 해주는 모듈이다.


console.log('운영체제 정보------------------');
console.log('아키텍쳐:', os.arch());
console.log('플랫폼 정보:', os.platform());
console.log('운영체제 타입:',os.type());
console.log('운영체제 업타임:',os.uptime());
console.log('운영체제 호스트 네임:',os.hostname());
console.log('운영체제 릴리즈:',os.release());