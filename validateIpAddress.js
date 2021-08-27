/** Given a string IP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.

A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain leading zeros. For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses but "192.168.01.1", while "192.168.1.00" and "192.168@1.1" are invalid IPv4 addresses.

A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:

1 <= xi.length <= 4
xi is a hexadecimal string which may contain digits, lower-case English letter ('a' to 'f') and upper-case English letters ('A' to 'F').
Leading zeros are allowed in xi.
For example, "2001:0db8:85a3:0000:0000:8a2e:0370:7334" and "2001:db8:85a3:0:0:8A2E:0370:7334" are valid IPv6 addresses, while "2001:0db8:85a3::8A2E:037j:7334" and "02001:0db8:85a3:0000:0000:8a2e:0370:7334" are invalid IPv6 addresses.

 

Example 1:

Input: IP = "172.16.254.1"
Output: "IPv4"
Explanation: This is a valid IPv4 address, return "IPv4".
Example 2:

Input: IP = "2001:0db8:85a3:0:0:8A2E:0370:7334"
Output: "IPv6"
Explanation: This is a valid IPv6 address, return "IPv6".
Example 3:

Input: IP = "256.256.256.256"
Output: "Neither"
Explanation: This is neither a IPv4 address nor a IPv6 address.
Example 4:

Input: IP = "2001:0db8:85a3:0:0:8A2E:0370:7334:"
Output: "Neither"
Example 5:

Input: IP = "1e1.4.5.6"
Output: "Neither"

**/

var validIPAddress = function(IP) {
    let map= {"0":1,"1":1,"2":1,"3":1,"4":1, "5":1, "6":1, "7":1, "8":1, "9":1,"A":1,"B":1,"C":1,"D":1,"E":1,"F":1,"a":1, "b":1, "c":1, "d":1, "e":1, "f":1}
    const ipV4= checkIP4(IP)
    if (ipV4){
        return "IPv4"
    }
    const ipV6= checkIP6(IP,map)
    return ipV6? "IPv6" : "Neither"
};

const checkIP4 = (IP) => {
    const splitIP = IP.split('.')
    if (splitIP.length!==4){
        return false
    }
    let subArray=[]
    for (let i=0;i<splitIP.length;i++){
        let sub= parseInt(splitIP[i])
        if (sub.toString().length !== splitIP[i].length) return false
        if(parseInt(splitIP[i])>255){
            return false
        }
        if (splitIP[i].length>1 && splitIP[i][0]==='0'){
            return false
        }
    } return true
}

const checkIP6 = (IP,map) => {
    const splitIP = IP.split(':')
    if (splitIP.length!==8){
        return false
    }
    for (let i=0;i<splitIP.length;i++){
        if (splitIP[i].length===0 ||splitIP[i].length>4){
            return false
        } 
        for (let j=0;j<splitIP[i].length;j++){
            if (!map[splitIP[i][j]]){
                return false
            }
        }
    }return true
    
    
}
