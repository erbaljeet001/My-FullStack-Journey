public class largest_atleast_twice {

    public int dominantIndex(int[] nums) {

        int n = nums.length;
        int largest = Integer.MIN_VALUE;
        int Sec_largest = Integer.MIN_VALUE;
        int largest_ind = -1;
        for (int i = 0; i < n; i++) {
            if (nums[i] > largest) {
                largest = nums[i];
                largest_ind = i;

            }
        }

        for (int i = 0; i < n; i++) {
            if (nums[i] > Sec_largest && nums[i] != largest) {
                Sec_largest = nums[i];

            }
        }

        if (largest >= 2 * Sec_largest) {
            return largest_ind;
        } else {
            return -1;
        }

    }
}
