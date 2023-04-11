## Node Version: `v14`
---
## API Docs

**Endpoint:** `POST /api/register`
**Description:**
-- Register a user into the system
**Payload:**
```json
{
	"name": "Dev Test",
	"email": "dev@test.com",
	"password": "12345678"
}
```

**Endpoint:** `POST /api/login`
**Description:**
-- Login to a user in the system
**Payload:**
```json
{
	"email": "dev@test.com",
	"password": "12345678",
	"remember": true|false
}
```

**Endpoint:** `GET /api/groups`
**Description:**
-- Get all groups

**Endpoint:** `POST /api/groups`
**Description:**
-- Create group
**Payload:**
```json
{
	"name": "A test group",
	"icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAeCAYAAAB0ba1yAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEKExcne2z1KQAABEVJREFUWEft12uIFWUYB/Dfemk3tc1SiiS7kFFZGpbRBUwqhD50I5IoIiIrouhrTReCSmQiCKMLhBBURhEUaQYlGgRdhMDMyhbMohtbWVFauq176cMzc5ydnXP26gnCPwyz887zntn//7m+HMRBHMT/GS1DGYwH0uyelJ6La83GASeeakwuZTLaxR32YU/C3jr2GLtg40q8EcmUG3EVJuAnbMUmnI2bcCh6ZMSxG7/hB+xAB7Yl8a74u6MSYVyJ50g5FbOEJ3sFgcdwQcGsO7v+EgKcheMMRq8QY58Q5me8i3ewPqGrYs+QGBHxsrppeGkazsPVuASzK7a+hqNxJFZjGY5Fa8GmT0TDSNGB17Pra+wtilEvIoZFvKI4nSS8dyUuM5BAFdaKb81JmAtpCHU7ljTaiH78ip1CvBkNbDuxUUTEVnyRi1DmMCTxomIpZ+AOXIxT6m4ajC1Yj7txXcIrkDIRj+MGEQ1V6McfWINnBPk5WICFMiEr0IltIiVeTKKu1Pg0JJ4bpZGrK4WX2ofaVwc342EcgnMSvsu8Phf3YkqjzRmew9P4Soh2lHDASpxYZ08PduFtLMsjYBCBkofbRDivwmFl2xGiA4/gJXyIK4SIW7L7gcaPQoB9WDCgmJRIn4s3RFiOlTRR6S/FclEfXhUF7qNGm8YRvTgNx2DyxHy1RPpBPIl5g7aPDWcK1dfgeiwWffmEBnvGC3mKPpGwvoUBuTxVFKHzjS6Ph4sOvIw7RZ42C12YmtBXI5dGlVwnqmuXCI1dwiPtQpRJYrRsUy1MT8XapIq1vGevFmm0GNMr7Oohn/AmiOFopiia9Wy7RVVfmrA5lf3zWV++B9vxMXYkfF/cncZH5mA+LsRFor3l6MMKA0fKHtyKkwtrn+IF0ftbhcCtwvtDkd8pxtc+MdJOFS2trWCzW7Sy/NqCDxLep9DOssY+TRwM+pRQzP3S+mwxez+EIwTJ6Ql/l+yWiPTJMT/hs5LNPNFuZqmPDcIZ84SQh2frv2CzEPRzMdt3ojOJiK2hyGXEeVwqgi1ivl4nvD8zidAr2k8RneFyrEq4TQlpHFTWqk98F54Vs8AMvCe+uQHfiLDvTipSrZ7jqvKvIUo/0p/wbcpSMStX2e9JY+JahAeqbIaBdpwuUuH+JFIK9YnlqPduNIeCGrJOIIkqfZeKI2OGTcLjv1e8Gy4WiXowoMU2It0II/Z4FTLyG8vrmTBtSczateKC1oR/yvYFbBWh/KWoGT32H0+7G+wbNsZMPPd6AzyFWwohuRyPGky8RRxIrsWb6KnKWfZ/b7TebgpSOlOuyf5enNKVlgRPWZhGrViQPR9wjNnjw0Ab7ksjbJ8XoVvuJn+Ks/knQxWr8UIziPeJGf0t0fpqBY5afdgurqZhTFV9BJiA4w3j/N8sNMPjvcLrfYXn/vxlMaybEeI5mkF8hZjecrJ7BPn/FP8CFMQfknFKffkAAAAASUVORK5CYII="
}
```

**Endpoint:** `PUT /api/groups/:id`
**Description:**
-- Update group
**Payload:**
```json
{
	"name": "A test group edited",
	"icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAeCAYAAAB0ba1yAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEKExcne2z1KQAABEVJREFUWEft12uIFWUYB/Dfemk3tc1SiiS7kFFZGpbRBUwqhD50I5IoIiIrouhrTReCSmQiCKMLhBBURhEUaQYlGgRdhMDMyhbMohtbWVFauq176cMzc5ydnXP26gnCPwyz887zntn//7m+HMRBHMT/GS1DGYwH0uyelJ6La83GASeeakwuZTLaxR32YU/C3jr2GLtg40q8EcmUG3EVJuAnbMUmnI2bcCh6ZMSxG7/hB+xAB7Yl8a74u6MSYVyJ50g5FbOEJ3sFgcdwQcGsO7v+EgKcheMMRq8QY58Q5me8i3ewPqGrYs+QGBHxsrppeGkazsPVuASzK7a+hqNxJFZjGY5Fa8GmT0TDSNGB17Pra+wtilEvIoZFvKI4nSS8dyUuM5BAFdaKb81JmAtpCHU7ljTaiH78ip1CvBkNbDuxUUTEVnyRi1DmMCTxomIpZ+AOXIxT6m4ajC1Yj7txXcIrkDIRj+MGEQ1V6McfWINnBPk5WICFMiEr0IltIiVeTKKu1Pg0JJ4bpZGrK4WX2ofaVwc342EcgnMSvsu8Phf3YkqjzRmew9P4Soh2lHDASpxYZ08PduFtLMsjYBCBkofbRDivwmFl2xGiA4/gJXyIK4SIW7L7gcaPQoB9WDCgmJRIn4s3RFiOlTRR6S/FclEfXhUF7qNGm8YRvTgNx2DyxHy1RPpBPIl5g7aPDWcK1dfgeiwWffmEBnvGC3mKPpGwvoUBuTxVFKHzjS6Ph4sOvIw7RZ42C12YmtBXI5dGlVwnqmuXCI1dwiPtQpRJYrRsUy1MT8XapIq1vGevFmm0GNMr7Oohn/AmiOFopiia9Wy7RVVfmrA5lf3zWV++B9vxMXYkfF/cncZH5mA+LsRFor3l6MMKA0fKHtyKkwtrn+IF0ftbhcCtwvtDkd8pxtc+MdJOFS2trWCzW7Sy/NqCDxLep9DOssY+TRwM+pRQzP3S+mwxez+EIwTJ6Ql/l+yWiPTJMT/hs5LNPNFuZqmPDcIZ84SQh2frv2CzEPRzMdt3ojOJiK2hyGXEeVwqgi1ivl4nvD8zidAr2k8RneFyrEq4TQlpHFTWqk98F54Vs8AMvCe+uQHfiLDvTipSrZ7jqvKvIUo/0p/wbcpSMStX2e9JY+JahAeqbIaBdpwuUuH+JFIK9YnlqPduNIeCGrJOIIkqfZeKI2OGTcLjv1e8Gy4WiXowoMU2It0II/Z4FTLyG8vrmTBtSczateKC1oR/yvYFbBWh/KWoGT32H0+7G+wbNsZMPPd6AzyFWwohuRyPGky8RRxIrsWb6KnKWfZ/b7TebgpSOlOuyf5enNKVlgRPWZhGrViQPR9wjNnjw0Ab7ksjbJ8XoVvuJn+Ks/knQxWr8UIziPeJGf0t0fpqBY5afdgurqZhTFV9BJiA4w3j/N8sNMPjvcLrfYXn/vxlMaybEeI5mkF8hZjecrJ7BPn/FP8CFMQfknFKffkAAAAASUVORK5CYII="
}
```

**Endpoint:** `DELETE /api/groups/:id`
**Description:**
-- Delete group