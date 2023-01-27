module.exports = [
	/**
	 * @param {number[]} nums1
	 * @param {number[]} nums2
	 * @return {number}
	 */
	function findMedianSortedArrays(nums1, nums2) {
		let numsLen = nums1.length + nums2.length;
		let midLen = Math.ceil(numsLen / 2);
		let findNextOrderNum = makeFindNextOrderNum(nums1, nums2);
		for (let i = 0; i < midLen - 1; i++) {
			findNextOrderNum();
		}
		let isDoubleMid = numsLen % 2 === 0;
		if (isDoubleMid) {
			return (findNextOrderNum() + findNextOrderNum()) / 2;
		}
		return findNextOrderNum();

		function makeFindNextOrderNum(nums1, nums2) {
			let j1 = 0;
			let j2 = 0;
			return () => {
				if (j1 > nums1.length - 1 && j2 > nums2.length - 1) {
					return 0;
				}
				if (
					j1 <= nums1.length - 1 &&
					(j2 > nums2.length - 1 || nums1[j1] <= nums2[j2])
				) {
					return nums1[j1++];
				}
				return nums2[j2++];
			};
		}
	},
];
