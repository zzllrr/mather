/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Matrix Factorization']=Kx(

detail('矩阵分解 Factorization, Decompostion',Table([ZLR('算法 适用于 结果 说明')],[

			['T分解\n(by zzllrr)',zarray(['不可逆','且行（列）间','成比例（或相等）']),'A =α^Tβ',
				zarray(['其中α、β是行向量','分解不唯一',
					piece(['行间相同时，可分解为(1~1~1)^T(i~j~k)','列间相同时，可分解为(a~b~c)^T(1~1~1)',
						zmtrx([ZLR('a','i j k'),ZLR('b','i j k'),ZLR('c','i j k')])+' = '+zmtrx(['a','b','c'])+'[i~j~k]'])
				])
			],
			['LU分解\n三角分解','可逆','A = LU',
				zarray(['其中L是下三角，U是上三角','分解不唯一',piece([
					'L是单位下三角时，称为'+kxf('Doolittle')+'分解',
					'U是单位下三角时，称为'+kxf('Crout')+'分解'])])],
			['LDU分解\n','可逆','A = LDU',zarray(['其中L是单位下三角，','U是单位上三角，','D是对角阵','此分解唯一 ','⇔ A的前n-1个顺序主子式都不为0'])],
			['满秩分解\n','任意',zarray(['A = B_{m×r}C_{r×n}','其中','r(A)=r(B)=r(C)'])],
			['QR分解\n正交三角分解','可逆','A = QR',zarray(['其中Q是正交矩阵，R是上三角','当R对角元符号取定时，分解唯一'])],
			['UR分解\n酉三角分解','可逆', 'A = UR','其中U是酉矩阵，R是上三角'],
			['Cholesky分解\n','对称正定','A =R^TR','其中R是上三角，对角线上元素都为正'],
			['Schur分解\n','方阵','A = URU^T',zarray(['其中U是酉矩阵，R是上三角'+kxf('schur')+'矩阵','且其主对角线上的元素为A的特征值'])],
			['Hessenberg分解\n','方阵','A = PHp^T','其中P是酉矩阵，H是'+kxf('Hessenberg')+'矩阵'],
			['EVD分解\n特征值分解\nEigen Value Decomposition','方阵','AV = VD',zarray(['其中D是A的特征值对角阵，','V是A的特征向量矩阵'])],
			['SVD分解\n奇异值分解\nSingular Value Decomposition','任意','A =U_mS_{m×n}V_n^H',
				zarray(['其中U，V均为酉矩阵，','S是长方对角阵','【S对角线上依次为','从大到小排序的非负奇异值】','U由AA^H的正交特征向量构成，','V由A^HA的正交特征向量构成'])],
			['GMD分解\n几何均值分解\nGeometric Mean Decomposition','任意','A = QR_{k×k}P^H',
				zarray(['其中P，Q都含有正交列，','R是实上三角阵','【对角线元素均为A（r(A)=k）的','k个正奇异值的几何平均值】'])]


],'wiki').replace(/\n/g,br))

);