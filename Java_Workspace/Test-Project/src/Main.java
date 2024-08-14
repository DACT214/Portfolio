import java.util.Random;

public class Main {

    public static void main(String[] args) {
// =================== BUBBLE SORT ==================
        Random ran = new Random();
        int n = 10;

        int[] list = new int[n];
        for (int i = 0; i < n; i++) {
            list[i] = ran.nextInt(0, 15);
        }
        int[]  testlist = {3,0,11,6,0,11,0,9,13,2};


        System.out.println();
        System.out.println("==========");

//        System.out.println("Fibinachi: "+fibinachi(5));
//        System.out.println("==========");

        System.out.println("list unsorted:");
        printArray(testlist);
        System.out.println("==========");

        System.out.println("Selection Sort:");
        int[] newList = selectionSort(testlist);
        System.out.println("==========");
        System.out.println("Sorted:");
        printArray(testlist);
// ==================================================

//		int a = 10;
//		System.out.println("factoral number(N!): "+a);
//		int b = 3;
//		System.out.println("Prime number: "+b);
//
//		System.out.println(trailingZeros(a, b));

//		int fac = 5;
//		System.out.println(fibinachi(fac));

    }

    // =================== BUBBLE SORT ==================
    public static int[] bubbleSort(int[] array) {

        for(int y=0; y<array.length-1;y++) {
            for(int i=0; i<array.length-y-1;i++) {
                if(array[i]>array[i+1]){
                    int temp = array[i];
                    array[i]=array[i+1];
                    array[i+1]=temp;
                }
            }
            printArray(array);
        }

        return array;

    }
// ==================================================


    // =================== INSERTION SORT ==================
    public static int[] insertionSort(int[] array) {

        int temp;

        for(int i = 1; i<array.length;i++) {

            temp = array[i];

            int j = i-1;
            while(j>=0 && array[j]>temp) {
                array[j+1]= array[j];
                j--;
            }
            array[j+1]=temp;
//			my stupid way of doing it...
//			for(int j=i-1;j>=0; j--) {
//
//				if(temp<=array[j]) {
//
//					array[j+1] = array[j];
//					if(j == 0) {
//						array[j] = temp;
//					}
//
//				}
//
//				if(temp>array[j]) {
//					array[j+1]=temp;
//					j = -1;
//				}
//
//			}
            printArray(array);
        }

        return array;

    }
// ==================================================

    // =================== SELECTION SORT ==================
    public static int[] selectionSort(int[] array) {

        // i is current index
        for(int i=0; i< array.length; i++) {
            int selectValue = array[i];
            int selectedIndex=i;
            int j = i+1;
            while(j<array.length) {
                if(selectValue>array[j]) {
                    selectedIndex = j;
                    selectValue = array[j];
                }
                j++;
            }
            array[selectedIndex]= array[i];
            array[i]= selectValue;
            printArray(array);
        }

        return array;

    }
// ==================================================


    // =================== Quick SORT ==================
    public static int[] quickSort(int[] array) {
        return quickSort(array, 0, array.length-1);
    }


    public static int[] quickSort(int[] array, int lowend, int highend) {
        int temp;

        // returns array if section (not array) is length of 1
        if(!(lowend >= highend)) {

            // random pivot selection
            int pivotIndex = new Random().nextInt(highend - lowend)+lowend;
            int pivot = array[pivotIndex];

            // swap pivot with end value then run everything the same
            temp = array[pivotIndex];
            array[pivotIndex] = array[highend];
            array[highend] = temp;


            int leftpointer = lowend;
            int rightpointer= highend;

            System.err.println("pivot: "+pivot);

            while(leftpointer < rightpointer) {

                while(array[leftpointer]<=pivot && leftpointer<rightpointer) {
                    // move left pointer right one
                    leftpointer++;
//				System.err.println("left: "+leftpointer + "| value: "+ array[leftpointer]);
                }

                while(array[rightpointer]>=pivot && rightpointer>leftpointer) {
                    // move right pointer left one
                    rightpointer--;
//				System.err.println("right: "+rightpointer + "| value: "+ array[rightpointer]);
                }

                //swap pointer values
                temp = array[leftpointer];
                array[leftpointer] = array[rightpointer];
                array[rightpointer] = temp;

            }
            //pointers are now the same, swap pointers with the pivot
            temp = array[rightpointer];
            array[rightpointer] = array[highend];
            array[highend] = temp;


            for(int i : array) {
                System.err.print(i+" ");
            }
            System.err.println();

            quickSort(array, lowend, leftpointer-1);

            quickSort(array, leftpointer+1, highend);

        }
        return array;

    }
// ==================================================


    // =================== Factorial ====================
    public static int trailingZeros(int N, int P) {

        int zerosTrailing = 0;

        System.err.println("zerosTrailing: " + zerosTrailing);
        for (int power = P; power <= N; power *= P) {
            zerosTrailing += N / power;
            System.err.println("power of P: " + power);
            System.err.println("zerosTrailing: " + zerosTrailing);
        }

        return zerosTrailing;
    }

    public static int factoral(int f) {
        System.err.println(f);

        if (f == 1) {
            return f;
        } else {
            return f * factoral((f - 1));
        }
    }

    // ==================================================
// =================== Factorial ====================
    public static int fibinachi(int f) {

        if (f <= 1) {
            return f;
        }


        return fibinachi(f-1)+fibinachi(f-2);

    }

// ==================================================

    public static void printArray(int[] array) {
        for(int i : array) {
            System.out.print(i+" ");
        }
        System.out.println();
    }
}