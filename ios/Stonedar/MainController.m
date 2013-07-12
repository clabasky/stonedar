//
//  MainController.m
//  Stonedar
//
//  Created by devin sewell on 7/1/13.
//  Copyright (c) 2013 Stonedar. All rights reserved.
//

#import "MainController.h"

@interface MainController ()

@end

@implementation MainController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor colorWithPatternImage:[UIImage imageNamed:@"launch5"]];
    UIView *topBar = [[UIView alloc]initWithFrame:CGRectMake(0, 0, self.view.frame.size.width, 44)];
    topBar.backgroundColor = [UIColor colorWithPatternImage:[UIImage imageNamed:@"header"]];
    [self.view addSubview:topBar];
    UIView *nav = [[UIView alloc]initWithFrame:CGRectMake(0, self.view.frame.size.height-49-44-44, self.view.frame.size.width, 49)];
    UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.frame = CGRectMake(0, 0, (self.view.frame.size.width/2)-1, 49);
    btn.tag=1;
    btn.enabled = NO;
    [btn setBackgroundImage:[UIImage imageNamed:@"nav1"] forState:UIControlStateNormal];
    [btn setBackgroundImage:[UIImage imageNamed:@"nav1sel"] forState:UIControlStateDisabled];
    [btn addTarget: self action: @selector(click:) forControlEvents: UIControlEventTouchDown ];
    [nav addSubview:btn];
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.frame = CGRectMake((self.view.frame.size.width/2)+1, 0, (self.view.frame.size.width/2)-1, 49);
    btn.tag=2;
    [btn setBackgroundImage:[UIImage imageNamed:@"nav2"] forState:UIControlStateNormal];
    [btn setBackgroundImage:[UIImage imageNamed:@"nav2sel"] forState:UIControlStateDisabled];
    [btn addTarget: self action: @selector(click:) forControlEvents: UIControlEventTouchDown ];
    [nav addSubview:btn];
    [self.view addSubview:nav];
    map =[[ MKMapView alloc]initWithFrame:CGRectMake(0, 44,  self.view.frame.size.width, self.view.frame.size.height-90-42-49)];
    [self.view addSubview:map];
    //MKMapView *map = [MKMapRectMake(0.00, 64.00, self.view.frame.size.width,  self.view.frame.size.height-80)] ;
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.tag = 3;
    [btn addTarget: self action: @selector(click:) forControlEvents: UIControlEventTouchDown ];
    btn.frame = CGRectMake(7, 7, 36, 29);
    [btn setBackgroundImage:[UIImage imageNamed:@"btnList"] forState:UIControlStateNormal];
    [self.view addSubview:btn];
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.tag = 4;
    [btn addTarget: self action: @selector(click:) forControlEvents: UIControlEventTouchDown ];
    btn.hidden = YES;
    btn.frame = CGRectMake(7, 7, 36, 29);
    [btn setBackgroundImage:[UIImage imageNamed:@"btnMap"] forState:UIControlStateNormal];
    [self.view addSubview:btn];
    btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.tag = 5;
    [btn addTarget: self action: @selector(click:) forControlEvents: UIControlEventTouchDown ];
    btn.frame = CGRectMake(self.view.frame.size.width-33, 9, 26, 27);
    [btn setBackgroundImage:[UIImage imageNamed:@"btnSettings"] forState:UIControlStateNormal];
    [self.view addSubview:btn];
}
-(IBAction)click:(id)sender{
    int s = [sender tag];
    if(s==1){
        UIButton *b = (UIButton *)[self.view viewWithTag:1];
        b.enabled=NO;
        b = (UIButton *)[self.view viewWithTag:2];
        b.enabled=YES;
        map.hidden = NO;
    }
    if(s==2){
        UIButton *b = (UIButton *)[self.view viewWithTag:1];
        b.enabled=YES;
        b = (UIButton *)[self.view viewWithTag:2];
        b.enabled=NO;
        map.hidden = YES;
    }
    if(s==3){
        UIButton *b = (UIButton *)[self.view viewWithTag:3];
        b.hidden=YES;
        b = (UIButton *)[self.view viewWithTag:4];
        b.hidden=NO;
        map.hidden = YES;
    }
    if(s==4){
        UIButton *b = (UIButton *)[self.view viewWithTag:3];
        b.hidden=NO;
        b = (UIButton *)[self.view viewWithTag:4];
        b.hidden=YES;
        map.hidden = NO;
    }
}
- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
